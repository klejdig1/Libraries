
// App.jsx
import {Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddBook from "./pages/AddBook";
import BookDetails from "./pages/BookDetails";
import EditBook from "./pages/EditBook";
import Navbar from "./pages/Navbar.jsx";

function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add" element={<AddBook />} />
                <Route path="/book/:id" element={<BookDetails />} />
                <Route path="/edit/:id" element={<EditBook />} />
            </Routes>
        </div>
    );
}

export default App;
