import React from "react";


const Results = ({ results }) => {
    const bookList = results.map(book =>{
        return(
        <li key={book.id}>
            {book.name}
        </li>
        )
    })
    return (
        <div id="resultsComp">
        <h1>This is the Results Component</h1> 
        <p> Search Results for this.entered.booktitle</p>
        <ul className="book-list">
          { bookList }
        </ul>
      </div>
    )
}
export default Results;