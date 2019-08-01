import React, { Component } from 'react';
import axios from "axios";

// styles
import './App.css';

// import components
import Search from './components/Search';
import Results from './components/Results';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      searching: false
    }
  }

  handleSearch = (title) => {
    // if(!title){
    //   console.log('no title has been entered')
    // } else {
      axios.get(`http://openlibrary.org/search.json?title=${title}`)
      .then(res => this.setState({
          results: res.data.docs,
          searching: true
      }, console.log(res.data.docs)))
      .catch(err => console.log(err));
    }
  

  render (){
  return (
    <div className="App App-header">
        <Search search={this.handleSearch}/>
        {/* <div id="errorMssg"></div> */}
      {this.state.searching && <Results results={this.state.results}/>}
    </div>
  )};
}

export default App;
