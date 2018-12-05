import React, { Component } from 'react'
import AppActions from '../actions/AppActions'
import {connect} from 'react-redux'
import Constants from '../Util/Constants'

class TodoItem extends Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event){
        console.log("Todo Item clicked", this.props.id)
        event.preventDefault()
        this.props.dispatch({type: AppActions.TOGGLE_COMPLETED, id:this.props.id})
    }

  render() {
      let detailsHTML = this.props.details;
      if (this.props.status === Constants.STATUS_COMPLETED){
        detailsHTML = <strike>{detailsHTML}</strike>
      }
    return (
      <div>
        <h4>{this.props.id}</h4>
        <p onClick={this.handleClick}>{detailsHTML}</p>
      </div>
    )
  }
}

const ConnectedTodoItems = connect()(TodoItem)

export default ConnectedTodoItems