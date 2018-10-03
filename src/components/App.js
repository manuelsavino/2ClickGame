import React, { Component } from 'react';
import Navbar from './navbar/navbar'
import Container from './container/container'

class App extends Component {

  constructor() {
    super()
    this.state = {
      clicked: [], //holds which images have been clicked
      high: 0, //holds a highscore
      current: 0, //holds current score
      message:"Click an image to start the Game", //holds message to be displayed on navbar
      currentClass: "none" //used for game over animation animate css class
    }
    this.handleClickEvent = this.handleClickEvent.bind(this);

  }

  render() {
    //Render the Navbar Components which passes the high score, current score and message as props
    //render the Container Component which passed the onclick event function and current class which is used for game over animation
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
      //Image hasnt been clicked yet, add to current array in state, if high is less that current, update high, add to current, change message to "Good Job, keep going...", 
      //removes class from animtate css that shows animation shake qhen game is over if the array is greater than 0
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
      //Reset current and clicked array, sets currentclass to animated shake which on the re-render will cause the container to shake 
      this.setState({ current: 0, clicked: [], message: "Game Over :(", currentClass: "animated shake" }  )

    }


  }
}



export default App;
