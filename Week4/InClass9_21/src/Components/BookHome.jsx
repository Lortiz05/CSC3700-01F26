import React, {useState} from 'react';



function BookHome(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedId, setSelectedId] = useState(null);

    function handleToggle() {
        setIsOpen(!isOpen);
    }
    function handleSelect(event) {
        const id = parseInt(event.target.value);
        setSelectedId(id);
    }
    const books = [
        {
            id: 1, title: 'American Prometheus', author: 'Bird and Sherwin',
            cost: 12.99, desc: 'The story of J. Robert Oppenheimer'
        },
        {
            id: 2, title: 'Educated', author: 'Tara Westover',
            cost: 10.99, desc: 'A memoir about escaping a rural survivalist family'
        },
        {
            id: 3, title: 'The Fellowship of the Ring', author: 'J.R. Tolkien',
            cost: 11.99, desc: 'The first book of the LOTR trilogy'
        },
        {
            id: 4, title: 'Sapiens', author: 'Yuval Noah Harari',
            cost: 9.99, desc: 'A brief history of humankind'
        },
        {
            id: 5, title: 'The Martian', author: 'Andy Weir',
            cost: 14.99, desc: 'An astronaut stranded on Mars fights to survive'
        },
    ]

    const selectedBook = books.find(book => book.id === selectedId);
    return (
        <>
        <div>I
            <h2>Books 4 U play area</h2>
            <button className="btn btn-primary" onClick={handleToggle}>
                hello world
            </button>
            <div>{isOpen ? <p className={'text-success'}>We are Open</p> : 'We are Closed'}</div>
        </div>
            <select className='form-select mt-3'
                    onChange={handleSelect}
                    defaultValue=''>
                <option value='' disabled>Select a book...</option>
                {books.map(book => (
                    <option key={book.id} value={book.id}>
                        {book.title}
                    </option>
                ))}
            </select>

            {selectedBook && (
                <div className='card mt-3 text-start'>
                    <div className='card-body'>
                        <h5 className='card-title'>{selectedBook.title}</h5>
                        <h6 className='card-subtitle mb-2 text-muted'>
                            {selectedBook.author}
                        </h6>
                        <p className='card-text'>{selectedBook.desc}</p>
                        <p className='card-text fw-bold'>${selectedBook.cost}</p>
                    </div>
                </div>
            )}
            </>
    );
}

export default BookHome;