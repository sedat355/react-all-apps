import { useEffect, useState } from "react"
import BookForm from "./BookForm"
import Book from "./Book";
import axios from "axios";

const BookList = () => {
  const [ books, setBooks ] = useState([]);

  useEffect(() => {
    getBooks().then(data => setBooks(data))
  },[])

  const getBooks = async () => {
    const response = await fetch("http://localhost:3000/books")
    const data = await response.json()

    return data;
  }

  console.log(books)

  const addBook = async (newBook) => {
    const url = "http://localhost:3000/books";
    const options = {
      method: "POST",
      body: JSON.stringify(newBook),
      headers: { "Content-Type": "application/json"},
    }

    const response = await fetch(url, options );
    const data = await response.json()

    console.log("data: ", data)//data:  {id: 'lfGcdTV9Z_kJB43junsbg', name: 'asdfaf'}

    setBooks([...books, data])
  }

  const deleteBook = async (id) => {
    const url = "http://localhost:3000/books/";
    
    const response = await fetch(`${url}${id}`, {
      method: "DELETE",
    })
    const data = await response.json();
    
    console.log("data", data)
    
    setBooks(books.filter(book => book.id !== id))
  }
  
  const editBook = async (id, newName) => {
    const url = "http://localhost:3000/books/";

    //!FETCH İLE:
    const response = await fetch(url + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({name: newName})
    }) 

    const data = await response.json();
    console.log(data)//{name: 'Kayıp Gül 2', id: 'jP_SfWnKdopjRlyMz6pIO'}

    //!AXIOS İLE:
    // const response = await axios.put(url + id, {
    //   name: newName
    // })

    const bookList = books.map( book => {
      if( book.id === id ) {
        return {...book, name: newName }
      }
      return book;
    })

    setBooks(bookList)
  }

  const renderedBooks = books.map(book => {
    return <Book key={book.id} book={book} deleteBook={deleteBook} editBook={editBook}/>
  })

  return (
    <div className="w-full">
      <h1>Reading List</h1>
      <BookForm addBook={addBook}/>
      
      <ul className="mt-4 flex gap-2 flex-wrap">
        {renderedBooks}
      </ul>
    </div>
  )
}

export default BookList