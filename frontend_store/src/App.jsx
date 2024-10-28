import React from 'react';
import { Routes, Route} from "react-router-dom";
import CreateBook from "./pages/CreateBook.jsx";
import Home from "./pages/Home.jsx";
import ShowBook from "./pages/ShowBook.jsx";
import DeleteBook from "./pages/DeleteBook.jsx";
import EditBook from "./pages/EditBook.jsx";


const App = () => {
  return (
    <div>
      <div className="bg-red-400 text-white text-center">
        Book Store App  
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/books/details/:id" element={<ShowBook/>}/>
        <Route path="/books/create" element={<CreateBook/>}/>
        <Route path="/books/delete/:id" element={<DeleteBook/>}/>
        <Route path="/books/edit/:id" element={<EditBook/>}/>
      </Routes>
    </div>
  )
}

export default App
