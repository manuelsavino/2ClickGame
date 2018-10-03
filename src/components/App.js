import React, { Component } from 'react';
// import './App.css';
import Navbar from './navbar/navbar'
import Container from './container/container'

class App extends Component {

  constructor() {
    super()
    this.state = {
      clicked: [],
      high: 10,
      current: 0
    }
    this.handleClickEvent = this.handleClickEvent.bind(this);

  }

  render() {
    return (
      <div className="App">
        <Navbar high={this.state.high} current={this.state.current} />
        <Container handleClick={this.handleClickEvent} />
      </div>
    );
  }

  handleClickEvent(e, data) {
    console.log(data)
    const current = this.state.clicked.filter(img => data === img)
    if (current.length === 0) {
      //Image hasnt been clicked yet, add to curre
      console.log("Not clicked yet")
      this.setState({ current: this.state.current + 1, high: (this.state.current === this.state.high ? this.state.high + 1 : this.state.high), clicked: [...this.state.clicked, data] })
    }
    else {
      //Game Over
      console.log("Clicked Already")
    }


  }
}



export default App;
