import React from "react";
import  { connect } from "react-redux"
import Pages from './Pages';
import { 
  ListGroup, 
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from 'reactstrap';


const Results = ({ results, title, numResults, activePage }) => {
  const bookList = results.map(book =>{
    return(
      // if there is no author_name provided, print "an unidentified author", otherwise if the array of 'author_name' is more than one person, loop through the array to print names in a more organized manner 
        <ListGroupItem color="info" key={book.key}>
          <ListGroupItemHeading>{book.title}</ListGroupItemHeading> 
          <ListGroupItemText>by 
          {typeof book.author_name ==="undefined" ? <span> an unidentified author </span>: 
            <span>
              {Array.isArray(book.author_name) && book.author_name !== "undefined"  && book.author_name.length === 1 ?
                <span> {book.author_name}</span>:
                <span> 
                  {book.author_name.map((x, index) =>{
                    //add a comma after each 'author name' in the array, unless that is the last author of the array.
                      if (typeof book.author_name[index+1] === "undefined"){
                        return <span key={index}> {x} </span>
                      }
                        return <span key={index}> {x}, </span>
                    })
                  }
                </span>
              }
            </span> 
          } 
          </ListGroupItemText>
      </ListGroupItem>
    )
  })
    const totalPages = Math.ceil(numResults/100)
  return (
    <div id="results">
      <h2>{numResults} search results for <b>{title}</b>...</h2> 
      <p>{ results.length>0 && <p>Page {activePage} of {totalPages} </p> }</p>
      <ListGroup className="book-list">
        {/* if no results are received from the search, print "no books found", otherwise print out the response list */}
        { results.length ?  <span>{ bookList } </span>: <h2> No books found </h2> }
      </ListGroup>
      { numResults > 100 && <Pages activePage={activePage}/> }
    </div>
  )
}

const mapStateToProps = state => {
  return{
    results: state.results,
    title: state.title,
    numResults: state.numResults,
    activePage: state.activePage
  }
}


export default connect(mapStateToProps)(Results);