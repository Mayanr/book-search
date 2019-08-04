import React, { Component } from 'react';

//redux
import  { connect } from "react-redux"
import { searchTitle } from "./actions/searchAction"

// styles
import './App.css';

// import components
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

// const mapDispatchToProps = dispatch => {
//   return {
//     searchTitle: (title) => dispatch(searchTitle(title))
//   }
// }

export default connect(mapStateToProps)(App);
