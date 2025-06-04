export const saveBooksToStorage = (books) => {
    localStorage.setItem("books", JSON.stringify(books));
};

export const getBooksFromStorage = () => {
    const stored = localStorage.getItem("books");
    return stored ? JSON.parse(stored) : [];
};
