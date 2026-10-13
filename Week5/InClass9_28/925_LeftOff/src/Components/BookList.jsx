import BookHome from "./BookHome.jsx";
function BookList({title, books, handleDelete}) {

    return (
        <div>
            <h3>{title}</h3>
            <div>
                <h3>{title}</h3>
                <table className='table table-striped table-bordered table-hover'>
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Description</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {books.map(book => (
                        <tr key={book.id}>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.desc}</td>
                            <td>${book.cost}</td>
                            <td>
                                <button className='btn btn-danger'
                                        onClick={() => handleDelete(book.id)}>
                                    Delete {book.id}
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BookList
