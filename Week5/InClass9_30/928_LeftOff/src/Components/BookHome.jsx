// src/components/BookHome.jsx
import {useEffect, useState} from 'react'
import BookList from './BookList.jsx'
import data from "bootstrap/js/src/dom/data.js";

function BookHome() {
    const myTitle = 'Books For Sale!'
    const genres = ['Fiction', 'Non-fiction', 'Fantasy'];
    // Books array moves to useState — same data, now tracked as state
    // Using useState here means React will re-render when books changes
    // This sets us up for add and delete in Lesson 7

    // setTimeout(()=>{
    //     fetch(URL).then(resp=>{
    //         return resp.json()
    //     })
    //         .then(data =>{console.log(data); setBooks(data);
    //     })
    //
    // }
    const [isLoading, setIsLoading]=useState(true)
    useEffect(() => {
        console.log("Starting")
        const URL = "http//localhost:3333/books/";
        async function fetchBooks() {
            const resp = await fetch(URL);
            const data = await fetch(resp.json());
            setIsLoading(false);
            console.log(data);
            setBooks(data);
        }

        // setTimeout(()=>{fetchBooks()}, 2000);
    }, []);
    const [books,setBooks] = useState([]);
    // const [books, setBooks] = useState([
    //     { id: 1, title: 'American Prometheus', author: 'Bird and Sherwin',
    //         cost: 12.99, desc: 'The story of J. Robert Oppenheimer' },
    //     { id: 2, title: 'Educated', author: 'Tara Westover',
    //         cost: 10.99, desc: 'A memoir about escaping a rural survivalist family' },
    //     { id: 3, title: 'The Fellowship of the Ring', author: 'J.R. Tolkien',
    //         cost: 11.99, desc: 'The first book of the LOTR trilogy' },
    //     { id: 4, title: 'Sapiens', author: 'Yuval Noah Harari',
    //         cost: 9.99,  desc: 'A brief history of humankind' },
    //     { id: 5, title: 'The Martian', author: 'Andy Weir',
    //         cost: 14.99, desc: 'An astronaut stranded on Mars fights to survive' },
    //     { id: 6, title: 'The Two Towers', author: 'J.R. Tolkien',
    //         cost: 11.99, desc: 'The second book of the LOTR trilogy' },
    // ])

    const handleDelete = (id) => {
        // Find the book so the message can show its title
        const book = books.find(b => b.id === id)

        // window.confirm shows OK / Cancel and returns true or false
        const ok = window.confirm(`Delete "${book.title}"?`)

        // Cancel: stop here, nothing changes
        if (!ok) {
            return
        }

        // OK: remove the book from the screen
        setBooks(books.filter(b => b.id !== id))
    }
    return (
       <div className='p-3'>
           {isLoading ? <p className='text-center mt-3'>Loading Books...
           </p> : <BookList title={myTitle} books={books} handleDelete = {handleDelete} />}
            <BookList title={myTitle} books={books} handleDelete = {handleDelete} />
        </div>
    )
}

export default BookHome
