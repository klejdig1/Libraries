import { createContext, useEffect, useState } from "react";
import { getBooksFromStorage, saveBooksToStorage } from "../utils/localStorageHelpers";
import { v4 as uuidv4 } from "uuid";

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
    const [books, setBooks] = useState([]);
    const [searchResults, setSearchResults] = useState([]);


    const fetchBooks = async (query) => {
        const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
        const data = await res.json();
        setSearchResults(data.items || []);
        return data;
    };

    const clearSearch=()=>{
        setSearchResults([])
    }

    useEffect(() => {
        const storedBooks = getBooksFromStorage();
        setBooks(storedBooks);
    }, []);

    useEffect(() => {
        saveBooksToStorage(books);
    }, [books]);

    const addBook = (book) => {
        const newBook = { ...book, id: uuidv4() };
        setBooks((prev) => [...prev, newBook]);
    };

    const deleteBook = (id) => {
        setBooks((prev) => prev.filter((b) => b.id !== id));
    };

    const updateBook = (updatedBook) => {
        setBooks((prev) =>
            prev.map((b) => (b.id === updatedBook.id ? updatedBook : b))
        );
    };

    return (
        <BookContext.Provider value={{ books, addBook, deleteBook, updateBook,fetchBooks,searchResults,clearSearch}}>
            {children}
        </BookContext.Provider>
    );
};
