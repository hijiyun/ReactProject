import React from 'react'
import ReactPropTypes from 'prop-types'


class App2 extends React.Component{
  render(){
  const state ={
      counter: 0
    };
    return 
    <div>
        <h1>The number is:  {this.state.counter}</h1>
    </div>
  }
}
    

export default App2
