import {useNavigate} from "react-router-dom";
import Spinner from "./Spinner.jsx";

function BookList({ data }) {
    const volumeInfo = data.volumeInfo || {};
    const { title, imageLinks} = volumeInfo;
    const navigate=useNavigate();
    console.log(data)

    if (!title || !imageLinks?.thumbnail) return null;

    function handleClick() {
        navigate(`/book/:${data.id}`)

    }

    return (
        <div className="w-[200px] cursor-pointer" onClick={handleClick}>
            <img
                className="w-full h-[300px] object-cover rounded shadow-md"
                src={imageLinks.thumbnail}
                alt={title}
            />
            <h3 className="mt-2 font-semibold text-sm">{title}</h3>
        </div>
    );
}

export default BookList;
