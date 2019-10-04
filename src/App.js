import React from 'react';
import './App.css'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      answer: null
    }
  }

  getAnswer = () => {
    //This is where you will write your Magic 8 Ball code
    return "The Magic 8 ball answer"
  }

  handleSubmit = () =>{
    const answer = this.getAnswer()
    this.setState({answer: answer})
  }

  render(){
    return (
      <div>
        <h1>Magic 8 Ball</h1>
        <input
          type='text'
        />
        <br />
        <button
          onClick={this.handleSubmit}
        >
          Ask the Magic 8 Ball
        </button>

        {this.state.answer &&
          <h2> The Magic 8 Ball says: {this.state.answer} </h2>
        }
      </div>
    )
  }
}

export default App;
