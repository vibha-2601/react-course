import React from 'react'

const withCounter = (WrappedComponent,incrementNo) => {
    class WithCounter extends React.Component {
        constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    incrementCount = () => {
        this.setState(prevState => {
           return{count: prevState.count + incrementNo}
        })
    }

        render() {
            console.log(this.props.name)
            return (<WrappedComponent count={this.state.count} incrementCount={this.incrementCount}
                {...this.props} />
            )}
    } 
           
        return WithCounter
}


export default withCounter  
