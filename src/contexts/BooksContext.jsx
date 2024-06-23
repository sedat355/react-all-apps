import { createContext, useState } from "react";

export const BooksContext = createContext();

const BooksContextProvider = ({children}) => {
  const [ books, setBooks ] = useState([])

  const addBook = async newBook => {
    const url = "http://localhost:3000/books"
    const options = {
      method: "POST",
      body: JSON.stringify(newBook),
      headers: { "Content-Type": "application/json" },
    }

    const response = await fetch(url, options)
    const data = await response.json()

    console.log("data: ", data) //data:  {id: 'lfGcdTV9Z_kJB43junsbg', name: 'asdfaf'}

    setBooks([...books, data])
  }

  const values = {
    books,
    setBooks,
    addBook,
  }

  return(
    <BooksContext.Provider value={values}>
      {children}
    </BooksContext.Provider>
  )
}

export default BooksContextProvider;