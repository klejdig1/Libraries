import { useContext } from "react";
import { BookContext } from "../context/BookContext.jsx";
import BookList from "../components/BookList.jsx";

export default function Home() {
    const {searchResults = []} = useContext(BookContext);

    return (
        <div>
            {searchResults.length === 0 ? (
                <p className="text-gray-500 text-center">No books found. Try searching something.</p>
            ) : (
                <div className='bg-gray-300 p-6'>
                    <div className="flex flex-wrap gap-5 justify-center items-center">
                        {searchResults.slice(0, 10).map((data) => (
                            <BookList key={data.id} data={data}/>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};
