import { useCollection } from "../hooks/useCollection";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import AddBook from "../components/AddBook";

function Home() {
  const { documents: books, error } = useCollection('books')

  if (!books) {
    return <h1 className="text-3xl mt-10">L o a d i n g . . .</h1>
  }

  const handleDelete = (id) => {
    deleteDoc(doc(db, 'books', id))
      .then((result) => {
        console.log(result)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <div className="site-container py-10 flex flex-col gap-3">
      {books && books.map((book) => {
        return (
          <div onClick={() => handleDelete(book.id)} className="bg-base-300 p-4 rounded text-xl cursor-pointer" key={book.id}>
            <p>{book.title}</p>
          </div>
        )
      })}
      <AddBook/>
    </div>
  )
}

export default Home