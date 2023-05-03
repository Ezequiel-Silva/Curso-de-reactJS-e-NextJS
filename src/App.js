import './App.css';
import { Component } from 'react';

class App extends Component{
  state = {
    posts: [
      {
        id: 1,
        title: 'O título 1',
        body: 'O corpo 1'
      },
      {
        id: 2,
        title: 'O título 2',
        body: 'O corpo 2'
      },
      {
        id: 3,
        title: 'O título 3',
        body: 'O corpo 3'
      }
    ]
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
