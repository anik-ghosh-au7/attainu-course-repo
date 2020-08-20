import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { CREATE_TODO, UPDATE_TODO, DELETE_TODO } from '../reducers/todoReducer';
import { populateAction } from '../actions/pupulate.action';

class Todo extends React.Component {
    state = {
        title: '',
        showEdit: {}
    };

    inputHandler = (e) => {
        this.setState({
            title: e.target.value
        });
    };

    submitHandler = (e) => {
        e.preventDefault();
        // this.props.dispatch({
        //   type: CREATE_TODO,
        //   payload: this.state.title
        // });
        this.props.createTodo(this.state.title);
        this.setState({ title: '' });
    };

    deleteTodoHandler = (id) => {
        this.props.deleteTodo(id);
    };

    editTodoHandler = (id) => {
        this.setState({ showEdit: {...this.state.showEdit, [id]: true} });
    };

    editSubmitHandler = (e) => {
        e.preventDefault();
        this.props.updateTodo(e.target.id.value, e.target.title.value);
        this.setState({ showEdit: {...this.state.showEdit, [e.target.id.value]: false} });
    };

    populateDataHandler = (e) => {
        e.preventDefault();
        this.props.populateTodo();
    }

    render() {
        const { todos } = this.props;
        const { title } = this.state;
        return (
            <div className="container">
                <div className="row">
                    <div className="span4 well">
                        <div className="row">
                            <div className="aboutus">
                                <h2 className="aboutus-title">Todos</h2>
                                <div>
                                    <form onSubmit={this.submitHandler}>
                                        <input type='text' name='title' value={title} onChange={this.inputHandler} style={{ width: '300px', marginBottom: '20px' }} placeholder='Add a new todo' />
                                        <button type='submit' className="btn fas fa-plus" title="add" disabled={!title} style={{paddingRight: '0px'}}></button>
                                        <button className="btn fas fa-angle-double-down" title="populate" disabled={title} onClick={this.populateDataHandler}></button>
                                    </form>
                                </div>
                                <div>
                                    <ul style={{ listStyleType: 'none', paddingLeft: '0px' }}>
                                        {
                                            todos.map((todo, idx) => {
                                                return (
                                                    <Fragment key={idx}>
                                                        {
                                                            this.state.showEdit[todo.id] ?
                                                                <form onSubmit={this.editSubmitHandler}>
                                                                    <input type='text' name='title' defaultValue={todo.title} style={{ width: '300px' }} />
                                                                    <input type='text' name='id' defaultValue={todo.id} hidden/>
                                                                    <button type='submit' className="btn fas fa-pencil-alt" title="edit" disabled={false}></button>
                                                                </form> :
                                                                <li onClick={() => this.editTodoHandler(todo.id)}>
                                                                    <button className="btn far fa-trash-alt" title="delete" onClick={() => this.deleteTodoHandler(todo.id)} style={{ paddingRight: '20px' }}></button>
                                                                    {todo.title}
                                                                </li>
                                                        }
                                                    </Fragment>
                                                );
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        createTodo: (title) => dispatch({ type: CREATE_TODO, payload: title }),
        deleteTodo: (id) => dispatch({ type: DELETE_TODO, payload: id }),
        updateTodo: (id, title) => dispatch({ type: UPDATE_TODO, payload: {id, title} }),
        populateTodo: () => dispatch(populateAction.fetchList())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
