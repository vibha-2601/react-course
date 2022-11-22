import React, { Component } from 'react'

 class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username: '',
         comments: '',
         options: 'react'

      }
    }

    handlerUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handlerCommentsChange = event => {
        this.setState({
            comments: event.target.value
        })
    }
    
    handlerOptionChange = event => {
        this.setState({
            options: event.target.value
        })
    }

    handleSubmit = event => {
    alert(`${this.state.username} ${this.state.comments} ${this.state.options}`)
    event.preventDefault()
    }
 
    render() {
        const {username, comments, options} = this.state
    return (
        <form onSubmit={this.handleSubmit}>
      <div>
        <label>Username: </label>
        <input type='text' value={username} onChange={this.handlerUsernameChange} /> 
      </div>
     <div>
        <label>Comments: </label>
        <textarea value={comments} onChange={this.handlerCommentsChange}></textarea>
      </div>
      <div>
        <label>Options: </label>
        <select value={options} onChange={this.handlerOptionChange}>
            <option value='react'>React</option>
            <option value='javascript'>Javascript</option>
            <option value='angular'>Angular</option>

        </select>
      </div>
      <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default Form

