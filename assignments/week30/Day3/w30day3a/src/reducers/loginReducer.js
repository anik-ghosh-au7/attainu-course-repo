export const SAVE_USER = '@@user/save';

const userModel = {
    firstname: '',
    lastname: '',
    email: ''
}

const initialState = {
    firstname: '', 
    lastname: '', 
    email: ''
};

const loginReducer = function(state, action) {
    state = state || initialState;

    switch (action.type) {
        case SAVE_USER:
            const user = {
                ...userModel, 
                firstname: action.payload.firstname, 
                lastname: action.payload.lastname, 
                email: action.payload.email
            };
            // return user;
            return {...state, ...user};
        default:
            return state;
    }
};

export default loginReducer;