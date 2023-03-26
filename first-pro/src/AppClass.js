import React, { Component } from 'react';
import BoxClass from './component/BoxClass';

export default class AppClass extends Component {
  constructor(props) {
    super(props) // 여기까지가 class component에서 쓰이는 state 기본세팅
    this.state = {
      counter2: 0,
      num: 1,
      value:3
    }; // 이 컴포넌트 안에는 state가 3개다. (오브젝트 안에다가)
  }

  increase = () => {
    this.setState({counter2:this.state.counter2 + 1, value:this.state.value +3})
  };


  render() {
    return (
      <div>
        { console.log("render")}
        <div>state:{this.state.counter2}</div>
        <button onClick={this.increase}>클릭 !</button>
        <BoxClass num={ this.state.value} />
      </div>
    );
  }
}
