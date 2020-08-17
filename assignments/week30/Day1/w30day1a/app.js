var redux = require('redux');

const initialState = {
    Counter: 0,
    TrackChanges: []
};

var rootReducer = function(state=initialState, action) {
    switch (action.type) {

        case 'INC_OPERATION':
            // Method 1 --->
            return {
                ...state,
                Counter: state.Counter + action.payload,
                TrackChanges: [...state.TrackChanges, state.Counter]
            }

        case 'DEC_OPERATION':
            // Method 2 --->
            const {Counter, TrackChanges} = state;
            return {
                Counter: Counter - action.payload,
                TrackChanges: [...TrackChanges, Counter]
            }
    
        default:
            return state;
    }
};

var store = redux.createStore(rootReducer);

// console.log(store.getState());

var subscribeHandler = function() {
    console.log('Subscriber Called --> ', store.getState())
};

store.subscribe(subscribeHandler);

store.dispatch({
    type: 'INC_OPERATION',
    payload: 1
});

store.dispatch({
    type: 'DEC_OPERATION',
    payload: 2
});

store.dispatch({
    type: 'INC_OPERATION',
    payload: 3
});

store.dispatch({
    type: 'DEC_OPERATION',
    payload: 2
});