import React, { Component } from 'react'

class UserInfo extends Component {
	
	handleNewId() {
		this.props.actions.createNewUserId()
	}
	
	handleNewIdIfOdd() {
		this.props.actions.createNewUserIdIfOdd()
	}
	
	handleNewIdAsync () {
		this.props.actions.createNewUserIdAsync()
	}
		
	render() {
		return (
			<li>
				<div>Username: {this.props.user.username}</div>
				<div>ID: {this.props.user.id}</div>
				<button onClick={this.handleNewId.bind(this)}>Update with Random ID</button>
				<button onClick={this.handleNewIdIfOdd.bind(this)}>Update only if Odd</button>
				<button onClick={this.handleNewIdAsync.bind(this)}>Update Asyncronously</button>
			</li>
		)
	}

}

export default UserInfo