import React from 'react';
import './App.css'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      // Add magic 8 ball outcomes to the array
      answerArray: ['For sure', 'You wish', 'Good luck', 'I think so', 'I hope so', 'No doubt', 'Why not', 'Dream on'],
      question: '',
      answer: ''
    }
  }

  getAnswer = () => {
    // destructures answerArray out of state
    const { answerArray } = this.state;
    // Update the return statement below to reflect the outcome of your code.
    const randomIndex = Math.floor(Math.random() * answerArray.length);
    return answerArray[randomIndex];
  }

  handleChange = (e) => {
    // gets the event from the input on change and updates state
    this.setState({ question: e.target.value });
  }

  handleSubmit = () =>{
    const { question } = this.state;

    if (question.indexOf('?') !== question.length - 1 || question === '') {
      this.setState({ answer: 'Please ask a question; don\'t forget the question mark!' })
    } else {
      // calls the getAnswer function and updates answer's state with it
      this.setState({ answer: this.getAnswer() });
    }
  }

  reset = () => {
    this.setState({
        question: '',
        answer: ''
    });
  }

  render(){
    return (
      <div>
        <h1>Magic 8 Ball</h1>
        <input
          id= 'inputBox'
          type='text'
          value={ this.state.question }
          onChange={ this.handleChange }
        />
        <br />
        <button id="submitBtn" onClick={ this.handleSubmit }>
          Ask the Magic 8 Ball a Question
        </button>
        <button id="resetBtn" onClick={ this.reset }>
          Reset
        </button>
        <p> { this.state.answer } </p>
      </div>
    );
  }
}

export default App;
