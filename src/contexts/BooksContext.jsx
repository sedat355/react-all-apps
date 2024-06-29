import { createContext, useCallback, useState } from "react";
import { getBooks } from "../utilities/getBooks";

export const BooksContext = createContext();

const initialState = [
  {
    "id": "KtIAbWKJNuelx8L2xZRwY",
    "name": "Tehlikeli Oyunlar"
  },
  {
    "id": "UMA70pJEqQiHgeiWriEJ4",
    "name": "Latin Amerika' nın Kesik Damarları"
  },
  {
    "id": "8Cf6tjHKpSdmQnt2aqIMW",
    "name": "Tutunamayanlar"
  },
  {
    "name": "Olasılıksız",
    "id": "HmbOJ52OFWP4En9sLfAhR"
  }
]

const BooksContextProvider = ({children}) => {
  const [ books, setBooks ] = useState(initialState)

  const addBook = (newBook) => {
    setBooks([...books, newBook])
  }

  const deleteBook = (id) => {
    setBooks(books.filter(book => book.id !== id))
  }

  const editBook = (id, newName) => {
    const newBooks = books.map( book => {
      if( book.id === id ) {
        return { ...book, name: newName }
      }
      return book;
    })
    setBooks(newBooks);
  }

  const values = {
    books,
    setBooks,
    addBook,
    editBook,
    deleteBook,
    //stableGetBooks,
  }

  return(
    <BooksContext.Provider value={values}>
      {children}
    </BooksContext.Provider>
  )
}

export default BooksContextProvider;


//! netlify json-server' ı çalıştırmadığı için aşağıdaki fonksiyonlar state üzerinden çalışacak şekilde yeniden ayarlandı.
  //const stableGetBooks = useCallback(getBooks, [])
  
  // const addBook = async newBook => {
  //   const url = "http://localhost:3000/books"
  //   const options = {
  //     method: "POST",
  //     body: JSON.stringify(newBook),
  //     headers: { "Content-Type": "application/json" },
  //   }

  //   const response = await fetch(url, options)
  //   const data = await response.json()

  //   console.log("data: ", data) //data:  {id: 'lfGcdTV9Z_kJB43junsbg', name: 'asdfaf'}

  //   setBooks([...books, data])
  // }

  // const deleteBook = async id => {
  //   const url = "http://localhost:3000/books/"

  //   const response = await fetch(`${url}${id}`, {
  //     method: "DELETE",
  //   })
  //   const data = await response.json()

  //   console.log("data", data)

  //   setBooks(books.filter(book => book.id !== id))
  // }

  // const editBook = async (id, newName) => {
  //   const url = "http://localhost:3000/books/"

  //   //!FETCH İLE:
  //   const response = await fetch(url + id, {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ name: newName }),
  //   })

  //   const data = await response.json()
  //   console.log(data) //{name: 'Kayıp Gül 2', id: 'jP_SfWnKdopjRlyMz6pIO'}

  //   //!AXIOS İLE:
  //   // const response = await axios.put(url + id, {
  //   //   name: newName
  //   // })

  //   const bookList = books.map(book => {
  //     if (book.id === id) {
  //       return { ...data }
  //     }
  //     return book
  //   })

  //   setBooks(bookList)
  // }