// Refs: make it possible access DOM nodes directly within react.
// Ref usecase=> Fetch the input values

import React, { Component } from 'react'

export class RefsDemo extends Component {
    constructor(props) {
      super(props)
    // Step1: create a ref by using React.createRef method.
    this.inputRef = React.createRef()
      
    }

    componentDidMount(){
        {/* step:3 call focus method on this input element */}
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }

    clickHandler = () => {
    alert(this.inputRef.current.value)
    }
    
  render() {
    return (
      <div>
        {/* // step2: attach this ref to our input element in render method - we use reserveREF attribute */}
        <input type='text' ref={this.inputRef}/>
        <button onClick={this.clickHandler}>Click</button>
      </div>
      )
  }
}    
        
  

export default RefsDemo
