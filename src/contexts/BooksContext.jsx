import { createContext, useState } from "react";

export const BooksContext = createContext();

const BooksContextProvider = ({children}) => {
  const [ books, setBooks ] = useState([])

  const values = {
    books,
    setBooks,
  }

  return(
    <BooksContext.Provider value={values}>
      {children}
    </BooksContext.Provider>
  )
}

export default BooksContextProvider;