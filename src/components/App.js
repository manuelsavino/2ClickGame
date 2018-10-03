import React, { Component } from 'react';
// import './App.css';
import Navbar from './navbar/navbar'
import Container from './container/container'

class App extends Component {

  constructor() {
    super()
    this.state = {
      clicked: [],
      high: 0,
      current: 0, 
      message:"Click an image to start the Game",
      currentClass: "none"
    }
    this.handleClickEvent = this.handleClickEvent.bind(this);

  }

  render() {
    return (
      <div className="App">
        <Navbar high={this.state.high} current={this.state.current} message={this.state.message}/>
        <Container handleClick={this.handleClickEvent} currentClass={this.state.currentClass} />
      </div>
    );
  }

  handleClickEvent(e, data) {
    console.log(data)
    const current = this.state.clicked.filter(img => data === img)
    if (current.length === 0) {
      //Image hasnt been clicked yet, add to curre
      console.log("Not clicked yet")
      this.setState({ 
        current: this.state.current + 1, 
        high: (this.state.current === this.state.high ? this.state.high + 1 : this.state.high), 
        clicked: [...this.state.clicked, data], 
        message: "Good Job, keep going...",
        currentClass: (this.state.clicked.length > 0? this.state.currentClass : "None")
      })
    }
    else {
      //Game Over
      //Reset current and clicked array
      this.setState({ current: 0, clicked: [], message: "Game Over :(", currentClass: "animated shake" }  )

    }


  }
}



export default App;
