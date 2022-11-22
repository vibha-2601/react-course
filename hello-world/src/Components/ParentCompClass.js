import React, { Component } from 'react'
import MemoFunctional from './MemoFunctional'
import PureCompClass from './PureCompClass'
import RegCompClass from './RegCompClass'

 class ParentCompClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Robert'
      }
    }

    componentDidMount() {
        setInterval(()=>{
            this.setState({
                name: 'Robert'
            })
        },2000)
    }
    
  render() {
    console.log('------------Parent component----------')
    return (
      <div>
        Parent Component
        <MemoFunctional name={this.state.name} />
        {/* <RegCompClass name={this.state.name} />
        <PureCompClass name={this.state.name} /> */}

      </div>
    )
  }
}

export default ParentCompClass
