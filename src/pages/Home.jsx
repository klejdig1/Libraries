import { useContext } from "react";
import { BookContext } from "../context/BookContext.jsx";
import BookList from "../components/BookList.jsx";

export default function Home() {
    const { searchResults = [] } = useContext(BookContext);

    return (
        <div className="p-6">
            {searchResults.length === 0 ? (
                <p className="text-gray-500">No books found. Try searching something.</p>
            ) : (
                <div className="flex flex-wrap gap-3 justify-start">
                    {searchResults.slice(0, 10).map((data) => (
                        <BookList key={data.id} data={data} />
                    ))}
                </div>
            )}
        </div>
    );
}
