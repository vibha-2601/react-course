import React, { Component } from 'react'

 class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello' 
      }

        // binding in constuctor: 
      this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(){
        this.setState({
            message: 'Goodbye!'
        })
        console.log(this)
    }

    // using class property as arrow function
    // clickHandler = () => {
    //     this.setState({
    //         message: 'Goodbye!'
    
    //     })
    // }
    
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* using bind keyword: <button onClick={this. clickHandler.bind(this)}>Change Message</button> */}
          {/* using arrow function: <button onClick={() => this.clickHandler()}>Change Message</button> */}
         <button onClick={this.clickHandler}>Change Message</button>
      </div>
    )
  }
}

export default EventBind
