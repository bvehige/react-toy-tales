import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

const toys_URL = "http://localhose:3000/toys"

class App extends React.Component{

  state = {
    display: false,
    toys: [],
  }

  componentDidMount() {
    fetch(toys_URL)
    .then(resp => resp.json())
    .then(toys => {
      this.setState({ toys })
    })
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer/>
      </>
    );
  }

}

export default App;
