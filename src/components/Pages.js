import React,  { Component } from "react";
import  { connect } from "react-redux"
import { searchPages } from "../actions/searchAction"

import { 
  Pagination, 
  PaginationItem, 
  PaginationLink, 
} from 'reactstrap';


class Pages extends Component {
    constructor(props) {
      super(props);
      this.state = {
        page: 1
      };
    }

  handleClick = e => {
    console.log (parseInt(e.target.id))
    const {title, searchPages} = this.props
    // this.setState({
    //   page: parseInt(e.target.id)
    // })
    searchPages(title, parseInt(e.target.id));
    document.getElementById('app').scrollIntoView();
  }

render(){
// const Pages = ({numResults, title, searchPages}) =>{
  var pageNumbers = [];  
  for (let i= 1; i<Math.ceil(this.props.numResults/100); i++){
    pageNumbers.push(i);
  }
  const renderPageNumbers = (pageNumbers) = pageNumbers.map(number => {
    return (
      <PaginationItem key={number} >
        <PaginationLink
          id={number}
          onClick={this.handleClick}>
        {number}
        </PaginationLink>
      </PaginationItem>
    );
  });

//     for (let i= 1; i<Math.ceil(numResults/100); i++){
//       return(
//         <PaginationItem>
//           <PaginationLink onClick={this.handleClick}>
//             {i}
//           </PaginationLink>
//         </PaginationItem>
//       )
//     }
//   }
//   render(){
//     return(
//       <div>
//         { this.pageNumbers }
//       </div>
//     )
//   }

  return(
    <Pagination id="pagination">
    <PaginationItem>
          <PaginationLink first id='1'
          onClick={this.handleClick} />
        </PaginationItem>
        {renderPageNumbers}
        <PaginationItem>
          <PaginationLink last
          onClick={this.handleClick}/>
        </PaginationItem>
    </Pagination>
    )
  }
}


  // handleSearch = () => {
  //   this.props.searchPages(this.props.title, this.state.page)
  // }
  // componentDidMount=()=>{
  //   this.props.pageCount(this.props.title);
  // }

  // pagesArray = ()=> {
  //   for (var i= 1; i<5; i++){
      
  //     if(this.props.searchPages(this.props.title, i) ){
  //       if (this.props.results.length > 0){
  //         console.log(this.props.searchPages(this.props.title, i))
  //       }
  //     }
  //   }
  // }

  // for class comp
//   pageNumbers = (numResults) => {
//     for (let i= 1; i<Math.ceil(numResults/100); i++){
//       return(
//         <PaginationItem>
//           <PaginationLink onClick={this.handleClick}>
//             {i}
//           </PaginationLink>
//         </PaginationItem>
//       )
//     }
//   }
//   render(){
//     return(
//       <div>
//         { this.pageNumbers }
//       </div>
//     )
//   }
// }  

const mapStateToProps = state => {
  return{
    results: state.results,
    title: state.title,
    numResults: state.numResults
  }
}
const mapDispatchToProps = dispatch => {
    return {
        searchPages: (title, page) => dispatch(searchPages(title, page)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Pages);