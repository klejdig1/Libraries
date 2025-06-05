import {useContext, useState} from "react";
import {BookContext} from "../context/BookContext.jsx";
import {HiSearch} from "react-icons/hi";
import {useNavigate} from "react-router-dom";

export default function Navbar() {
    const [query, setQuery] = useState("");
    const {fetchBooks,clearSearch} = useContext(BookContext)
    const navigate=useNavigate()


    const handleSearch = async () => {
        if (!query.trim()){
            clearSearch()
            navigate('/');
            return;
        }

        await fetchBooks(query);
        navigate('/')
        setQuery('');
    };



    return(
        <div className='bg-gray-500 pt-4 pb-4 flex justify-between items-center '>
            <img className='w-16 h-14 rounded-[30px] ml-5' src='./public/images.jpg' alt='logo'/>
            <div className='flex items-center justify-end gap-4 px-4'>
            <input className='p-2 rounded-xl bg-white border-none outline-none ring-0 focus:ring-0 focus:outline-none' placeholder='Search...' value={query} onKeyDown={event => {if (event.key === "Enter") handleSearch()}} onChange={event => setQuery(event.target.value)}/>
            <button className='rounded-xl px-7 py-2 bg-red-500 text-white text-2xl' onClick={handleSearch}><HiSearch/></button>
            </div>
            </div>
    )

}

