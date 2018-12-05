import React, { Component } from 'react'
import TodoItem from './TodoItem'
import { connect } from 'react-redux'
import Constants from '../Util/Constants'

const mapStateToProps = (state) => {
    console.log("mapStateToProps")
    console.log(state)
    if (state.visibility === Constants.SHOW_ALL)
        return { todos: state.todos }
    else if (state.visibility === Constants.SHOW_PENDING)
        return {todos : state.todos.filter((t) => t.status === Constants.STATUS_PENDING)}
    else if (state.visibility === Constants.SHOW_COMPLETED)
        return {todos : state.todos.filter((t) => t.status === Constants.STATUS_COMPLETED)}
}

class TodoList extends Component {

    render() {
        let todoItems = this.props.todos.map((t => {
            return <TodoItem id={t.id} key={t.id} details={t.details} status={t.status}></TodoItem>
        }))
        return (
            <div>
                {todoItems}
            </div>
        )
    }
}

const ConnectedTodoList = connect(mapStateToProps, null)(TodoList)

export default ConnectedTodoList