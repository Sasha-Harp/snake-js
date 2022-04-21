import React, { Component } from 'react';
import Snake from './Snake.js'

const startState = {
  segments: [[0, 0],[0, 1]]
}

class App extends Component {
  state = startState;
  
  frame() {
    console.log(this.state.segments);
    this.setState({segments: [[this.state.segments[0][0]+1,this.state.segments[0][1]+1],[this.state.segments[1][0]+1,this.state.segments[1][1]+1]]})
  }
  
  componentDidMount() {
    setInterval(() => {this.frame();}, 500);
  }
  
  render() {
    return (
      <div className="App">
        <Snake className="Snake" segments={this.state.segments} />
      </div>
    );
  }
}

export default App;
