// import React from 'react'
import Cards from "./Cards"
import { useEffect, useState } from "react";
import axios from "axios";


function Allblog() {
    const [blog, setBook] = useState([]);
    useEffect(() => {
        const getBlogs = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/blogs");
                console.log(res.data); // Log all fetched data
                console.log("Data:", res.data); // Log the data received
                setBook(res.data); // Set all fetched data
            } catch (error) {
                console.error("Error fetching blogs:", error);
            }
        };
        getBlogs();
    }, []);
  return (
    <>
    <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
    <div className="mt-20 items-center justify-center text-center">
    <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
        {blog.map((item) => (
            <Cards key={item.id} item={item} />
        ))}
    </div>
    </div>
    </div>
</>
  )
}

export default Allblog
