import React, { Component } from "react";
import { connect } from "react-redux"
import { searchPages } from "../actions/searchAction"
import Pagination from "react-js-pagination";


class Pages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1
    };
  }

  // when page is clicked, recognize that page as the 'active page' and fetch the results for that page, then locate to the top of the page.
  handlePageChange = async e=> {
    const { title, searchPages } = this.props
    this.setState({
      activePage: e
    })
    await searchPages(title, e)
    document.getElementById('app').scrollIntoView()
  }

  render(){
    return(
      <div id="pagination">
        <Pagination 
          hideDisabled
          activePage={this.props.activePage}
          itemsCountPerPage={100}
          totalItemsCount={this.props.numResults}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange}
        />
      </div>
    )
  }
}

const mapStateToProps = ({ results, title, numResults }) => {
  return {
    results,
    title,
    numResults
  }
}

// need to reference when page number is clicked
const mapDispatchToProps = dispatch => {
  return {
    searchPages: (title, page) => dispatch(searchPages(title, page)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Pages);