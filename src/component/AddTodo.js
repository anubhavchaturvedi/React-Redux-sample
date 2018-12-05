import React, { Component } from 'react'
import {connect} from 'react-redux'
import AppActions from '../actions/AppActions'


class AddTodo extends Component {
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
    console.log(props)
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.dispatch({
      type: AppActions.ADD_TODO,
      details: event.target[0].value
    });
    event.target.reset()
  }

  render() {
    
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          TODO Item : <input />
          <button type='sumbit'>Add TODO</button>
        </form>
      </div>
    )
  }
}

const ConnectedAppTodo = connect()(AddTodo)

export default ConnectedAppTodo