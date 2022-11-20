import React, { Component } from 'react'

 class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
    
  render() {
    // short circuiting
    return this.state.isLoggedIn && <div>Welcome Robert</div>
    
    // ternary conditional operator
    // return (this.state.isLoggedIn ?<div>Welcome Richard</div> : <div>Welcome Guests</div>)

    // element varaible
// let message
// if(this.state.isLoggedIn){
//     message = <div>Welcome Diana</div>
// } else {
//     message = <div>Welcome Guests</div>
// }

// return <div>{message}</div>

    // if/else
    // if(this.state.isLoggedIn) {
    //     return <div>Welcome Robert</div>
    // } else {
    //    return <div>Welcome Guest</div>
    // }
  }
}
//     return (
//       <div>
        
//       </div>
//     )
//   }
// }

export default UserGreeting
