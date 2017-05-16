import React from 'react';
import { connect } from 'react-redux';

import TodoCreateForm from './TodoCreateForm';
import TodoItem from './TodoItem'

class TodoList extends React.Component {
  render(){
    return (
      <div>
        <h1>Todo List</h1>
        {this.props.todos.length === 0 && <h2>Loading.....</h2>}
        <ul>
          { this.props.todos.map(todo => (
            <TodoItem key={todo.todoId} {...todo} />
          )) }
        </ul>
        <TodoCreateForm />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todos,
});

export default connect(mapStateToProps, null)(TodoList);
