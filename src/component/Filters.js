import React, { Component } from 'react'
import Constants from '../Util/Constants'
import AppActions from '../actions/AppActions'
import {connect} from 'react-redux'

 class Filters extends Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event) {
        event.preventDefault();
        console.log(event.target.value)
        this.props.dispatch({type: AppActions.APPLY_FILTER, filter: event.target.value})
    }

    render() {

        return (
            <div>
                <button onClick={this.handleClick} value={Constants.SHOW_ALL}>ALL</button> | 
                <button onClick={this.handleClick} value={Constants.SHOW_COMPLETED}>Completed</button> | 
                <button onClick={this.handleClick} value={Constants.SHOW_PENDING}>Pending</button>
            </div>
        )
    }
}

const ConnectedFilters = connect()(Filters)

export default ConnectedFilters