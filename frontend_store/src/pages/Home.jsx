import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import Spinner from "../components/Spinner.jsx";
import {MdOutlineAddBox} from "react-icons/md";
import BooksTable from "../components/home/BooksTable.jsx";
import BooksCards from "../components/home/BooksCards.jsx";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");

  useEffect(()=>{
    setLoading(true);
    axios.get("http://localhost:5200/")
    .then((res)=>{
      setBooks(res.data.data);
      setLoading(false);
    })
    .catch((error)=>{
      console.log(error);
      setLoading(false);
    })
  }, []);
  return (
    <div className="p-4">
      <div className="flex justify-center items-center gap-x-4">
        <button className="bg-sky-300 hover:bg-sky-600 px-4 py-l 
        rounded-lg" onClick={()=>setShowType("table")}>
           Table
        </button>
        <button className="bg-sky-300 hover:bg-sky-600 px-4 py-l 
        rounded-lg" onClick={()=>setShowType("card")}>
           Cards
        </button>

      </div>

      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Book List</h1>
        <Link to="/books/create">
          <MdOutlineAddBox />
        </Link>
      </div>
      {loading? <Spinner />: showType === "table" ?
        <BooksTable books={books}/>:
        <BooksCards books={books}/>
      }
    </div>
  )
}

export default Home
