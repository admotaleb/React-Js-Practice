import React, { Component } from 'react'

 class Hook_handel extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    handelencriment = ()=>{
        this.setState({
            count : this.state.count +1
        })
    }
    
  render() {
    return (
      <div>
        <h1>Count : {this.state.count}</h1>
        <button onClick={this.handelencriment}>Increment</button>
      </div>
    )
  }
}
export default Hook_handel