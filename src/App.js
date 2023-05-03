import './App.css';
import { Component } from 'react';

class App extends Component{
  state = {
    name: 'Ezequiel da Silva',
    counter: 0
  };
  render(){
    const { name, counter } = this.state;
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
