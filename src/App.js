import React from 'react';
import './App.css'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      answerArray: ["Holy Smokes!", "No way, Jose", "Sure, why not?", "Yeah, Imma say no", "Umm.. seriously?", "Yaaaas girl", "If you say so"],
      answer: null,
      question: ""
    }
  }

  getAnswer = () => {
    // destructures answerArray out of state
    const { answerArray } = this.state
    // creates a random number
    let randomNumber = Math.floor(Math.random() * answerArray.length)
    return answerArray[randomNumber]
  }

  handleChange = (e) => {
    // gets the event from the input on change and updates state
    this.setState({question: e.target.value})
  }

  handleSubmit = () =>{
    // destructures question out of state
    const { question } = this.state
    // checks to see if there is a question in the input
    if(question.length > 0 && question.includes("?")){
      // calls the getAnswer function and saves the outcome as answer
      const answer = this.getAnswer()
      // sets state as the outcome to the getAnswer function in all uppercase for Magic8 Ball styling
      this.setState({answer: answer.toUpperCase()})
    }
  }

  render(){
    return (
      <div>
        <h1>Magic 8 Ball</h1>
        <input
          id="inputBox"
          type='text'
          onChange={this.handleChange}
        />
        <br />
        <button
          id="submitButton"
          onClick={this.handleSubmit}
        >
          Ask the Magic 8 Ball a Question
        </button>
        <div id="eightBall">
          <div id="eight">8</div>

          {this.state.answer &&
            <p id="answer"> {this.state.answer} </p>
          }

        </div>
      </div>
    )
  }
}

export default App;
