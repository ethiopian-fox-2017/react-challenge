
import React from 'react';
import { connect } from 'react-redux';

import { addTodoCreate } from '../../actions';

class TodoCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: ''
    }
  }

  handleChange(e) {
    const newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => {
            e.preventDefault();
            const newTodo = this.state;
            this.props.addTodo(newTodo);
          }
        }>
          <input
            type="text"
            name="todo"
            value={this.state.todo}
            onChange={this.handleChange.bind(this)}
            placeholder="new task..."
          />
          <input type="submit" value="add todo" />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch(addTodoCreate(todo))
  }
}
export default connect(null,mapDispatchToProps)(TodoCreateForm);
