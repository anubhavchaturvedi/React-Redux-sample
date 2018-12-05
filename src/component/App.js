import React, { Component } from 'react'
import ConnectedAppTodo from './AddTodo.js'
import Filters from './Filters'
import ConnectedTodoList from './TodoList'

export default class App extends Component {
  render() {
    return (
      <div>
        <ConnectedAppTodo/>
        <Filters/>
        <ConnectedTodoList/>
      </div>
    )
  }
}