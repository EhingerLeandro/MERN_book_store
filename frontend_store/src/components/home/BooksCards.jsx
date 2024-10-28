import React from 'react';
import SingleCard from "./SingleCard"

const BooksCards = ({books} ) => {
  return (
    <div className="grid sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
        {books.map((book)=>(
          <SingleCard key={book._id} item={book}/>
        ))}
    </div>
  )
}

export default BooksCards
