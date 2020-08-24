import axios from 'axios';
import { POPULATE_TODO } from '../reducers/todoReducer';
import { v4 as uuid } from 'uuid';

export const populateAction = {
    fetchList: () => (dispatch,getState) => {
        // console.log('redux previous state --> ', getState());
        axios({
            method:'GET',
            url:'https://jsonplaceholder.typicode.com/posts'
        })
        .then(resp=>{
            let start_index = Math.floor(Math.random() * 10);
            let end_index = start_index + 5;
            let data_arr = resp.data.slice(start_index, end_index);
            const newArray = data_arr.map(({id, userId, body, ...rest}) => {
                return {...rest, id: uuid()}
            })
            dispatch({type:POPULATE_TODO, payload:newArray});
        })
    }
};
