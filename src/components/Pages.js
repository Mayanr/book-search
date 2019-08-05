import React,  { Component } from "react";
import  { connect } from "react-redux"
import { searchPages } from "../actions/searchAction"
import Pagination from "react-js-pagination";


class Pages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1
    };
  }

  handlePageChange = e => {
    const {title, searchPages} = this.props
    this.setState({
      activePage: e
    })
    searchPages(title, e);
    document.getElementById('app').scrollIntoView();
  }

render(){
  return(
    <div>
        <Pagination id="pagination"
          hideDisabled
          activePage={this.props.activePage}
          itemsCountPerPage={100}
          totalItemsCount={this.props.numResults}
          pageRangeDisplayed={10}
          onChange={ this.handlePageChange }
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    results: state.results,
    title: state.title,
    numResults: state.numResults,
  }
}
const mapDispatchToProps = dispatch => {
    return {
        searchPages: (title, page) => dispatch(searchPages(title, page)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Pages);