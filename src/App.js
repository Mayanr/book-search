import React, { Component } from 'react';
import  { connect } from "react-redux"
import './App.css';
import Search from './components/Search';
import Results from './components/Results';


class App extends Component {
  render (){
    return (
      <div id="app">
        <div id="content">
          <Search />
          {this.props.searching ?
            <Results />:
            <img 
              src={require('./img/magnifyBooks.png')} 
              width="150" 
              style={{paddingTop: 8+"%"}} 
              alt="https://www.trendingtop5.com/wp-content/uploads/2017/08/unnamed.png"/>
          }
        </div>
        <footer>
            <p>Built by Mayan Rothstein  |  Powered by React/Redux<br/>
            {'\u00A9'} August 2019</p>
        </footer>
      </div>
    )
  };
}

const mapStateToProps = ({ searching }) => {
  return{
    searching
  }
}


export default connect(mapStateToProps)(App);
