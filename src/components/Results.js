import React from "react";
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

//redux
import  { connect } from "react-redux"

const Results = ({ results, searchTerm }) => {
  const bookList = results.map(book =>{
      return(
        // if there is no author_name provided, print "an unidentified author", otherwise if the array of 'author_name' is more than one person, loop through the array to print names in a more organized manner 
          <li key={book.key}>
            {book.title_suggest} by 
            {typeof book.author_name ==="undefined" ? <span> an unidentified author </span>: 
              <span>
                {typeof book.author_name ==="Array" && book.author_name !== "undefined"  &&book.author_name.length === 1 ?
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
        </li>
      )
    })

  return (
    <div id="resultsComp">
      <p>Search results for "<b>{searchTerm}</b>"</p> 
      <ul className="book-list">
        {/* if no results are received from the search, print "no books found", otherwise print out the response list */}
        { results.length ?  <ul>{ bookList }</ul> : <h2> No books found </h2> }
      </ul>
    </div>
  )
}

const mapStateToProps = state => {
  return{
    results: state.results,
    searchTerm: state.title,
    // searching: state.searching
  }
}

export default connect(mapStateToProps)(Results);