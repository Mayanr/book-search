import React, { Component } from 'react';
import  { connect } from "react-redux"
import './App.css';
import Search from './components/Search';
import Results from './components/Results';


class App extends Component {
  render (){
    return (
      <div id="app">
        <Search />
        {this.props.searching && <Results />}
      </div>
    )};
}

const mapStateToProps = state => {
  return{
    searching: state.searching
  }
}


export default connect(mapStateToProps)(App);
