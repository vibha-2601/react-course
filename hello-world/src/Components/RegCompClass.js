import React, { Component } from 'react'

 class RegCompClass extends Component {
  render() {
    console.log('Regular component')
    return (
      <div>
        Regular Component {this.props.name}
      </div>
    )
  }
}

export default RegCompClass
