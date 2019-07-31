import React, { Component } from 'react';
// styles
import './App.css';
import Search from './components/Search';
import Results from './components/Results';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [
        {name: "test1", id: 1}, 
        {name: "test2", id: 2}, 
        {"name": "test3", id: 3}
      ]
    }

  }
  render (){
  return (
    <div className="App">
      <header className="App-header">
        <Search />

      {this.state.results.length > 0 &&
        <Results results={this.state.results}/>
      }
      
      </header>
    </div>
  )};
}

export default App;
