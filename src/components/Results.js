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
    return (
      // if there is no author_name provided, print "an unidentified author", otherwise if the array of 'author_name' is more than one person, loop through the array to print names in a more organized manner 
      <ListGroupItem color="info" key={book.key}>
        <ListGroupItemHeading>{book.title}</ListGroupItemHeading> 
        <ListGroupItemText>by 
          {typeof book.author_name ==="undefined" ? <span> an unidentified author </span>: 
            <span>
              {Array.isArray(book.author_name) && book.author_name !== "undefined"  && book.author_name.length === 1 ?
                <span> {book.author_name} </span>:
                <span> 
                  {book.author_name.map((author, index) => {
                    //add a comma after each 'author name' in the array, unless that is the last author of the array.
                      if (typeof book.author_name[index+1] === "undefined"){
                        return <span key={index}> {author}  </span>
                      }
                        return <span key={index}> {author}, </span>
                    })
                  }
                </span>
              }
            </span> 
          } 
          {/* display the year first published if available in API, if not, note that the data is unavailable */}
          <br/> {book.first_publish_year ? <span> originally published in {book.first_publish_year}</span>: <span> year published unavailable</span>}
        </ListGroupItemText>
      </ListGroupItem>
    )
  })

  // determine the total amount of pages for this search to display to user
  const totalPages = Math.ceil(numResults/100)

  // provide amount of search results with "," in large numbers
  const formattedNumResults = numResults.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

  return (
    <div id="results">
      {/* if there are results, display some data to the user (number of results, their original search term with the search was conducted on, the page they're viewing out of the total number of pages) */}
      { results.length > 0 && <div>
        <h2>{formattedNumResults} search results for <b>{title}</b>...</h2><p>Page {activePage} of {totalPages} </p>
      </div> }
      <ListGroup>
        {/* if no results are received from the search, print "No results found for [the search term they entered]", otherwise print out the response list */}
        { results.length ?  <span>{ bookList } </span>: <h2> No results found for <b>{title}</b></h2> }
      </ListGroup>
      {/* if the number of results is greater than 100, that means there will be more than one page, so show the pagination component, 'Pages' */}
      { numResults > 100 && <Pages activePage={activePage}/> }
    </div>
  )
}

// variables needed to render data to this page
const mapStateToProps = ({ searching, ...state }) => {
  return state;
}


export default connect(mapStateToProps)(Results);