import { v4 as uuid } from 'uuid';

const STATUS = {
    PENDING: 0,
    DONE: 1,
    DELETED: 2
};

export const CREATE_TODO = '@@todo/create';
export const UPDATE_TODO = '@@todo/update';
export const DELETE_TODO = '@@todo/delete';
export const POPULATE_TODO = '@@todo/populate';

const todoModel = {
    id: uuid(),
    title: '',
    state: STATUS.PENDING
}

const initialState = [];

const todoReducer = function(state, action) {
    state = state || initialState;

    switch (action.type) {
        case CREATE_TODO:
            const todo = {...todoModel, title: action.payload, id: uuid()};
            return [...state, todo];
        case UPDATE_TODO:
            // wrong way (don't mutate state directly) ------>
            // let todo_idx = state.findIndex( todo => todo.id === action.payload.id);
            // state[todo_idx] = {...state[todo_idx], title: action.payload.title};
            // return state;
            let todo_list = state.map( todo => {
                if(todo.id === action.payload.id) {
                    return {
                        ...todo, title: action.payload.title
                    }
                }
                return todo;
            });
            return todo_list;
        case DELETE_TODO:
            const todos = state.filter( todo => todo.id !== action.payload)
            return todos;
        case POPULATE_TODO:
            console.log('payload --> ', action.payload)
            return [...state, ...action.payload];
        default:
            return state;
    }   
};

export default todoReducer;