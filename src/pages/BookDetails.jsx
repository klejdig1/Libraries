import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BookContext } from "../context/BookContext.jsx";

export default function BookDetails() {
    const { id } = useParams();
    const { searchResults } = useContext(BookContext);
    const navigate = useNavigate();
    console.log(searchResults)

    const book = searchResults.find(book => book.id === id);

    return (
        <div className="p-6">
            <button
                onClick={() => navigate(-1)}
                className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
                Go back
            </button>

            {!book ? (
                <p className="text-center mt-8">Book not found.</p>
            ) : (
                <div className="flex gap-4">
                    <img
                        src={book.volumeInfo?.imageLinks?.thumbnail}
                        alt={book.volumeInfo?.title || "Book cover"}
                        className="w-100 h-120 object-cover rounded shadow"
                    />
                    <div>
                        <h2 className="text-2xl font-bold mb-2">{book.volumeInfo?.title}</h2>
                        <p className='font-bold'>Author:<span className='text-blue-400'> {book.volumeInfo?.authors}</span></p>
                        <p className="text-gray-700">
                            {book.volumeInfo?.description || "No description available."}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}
