// import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import Userblog from "./Userblog";
// import Cards from "./Cards";

function Userblogs() {
    const [blog, setBlog] = useState([]);
    useEffect(() => {
        const getBlogs = async () => {
            try {
                // Retrieve user_id from local storage
                const storedUser = localStorage.getItem('user');
                if (!storedUser) {
                    console.error("User not found in local storage");
                    return;
                }

                const user = JSON.parse(storedUser);
                const userId = user.user_id;
                if (!userId) {
                    console.error("User ID not found in local storage");
                    return;
                }

                // Now you can use the userId variable for further operations
                console.log("User ID:", userId);

                // Construct the API URL using the retrieved user_id
                const url = `http://localhost:5000/api/users/${userId}/blogs`;

                // Make the API request
                const res = await axios.get(url);
                console.log(res.data); // Log all fetched data
                console.log("Data:", res.data); // Log the data received
                setBlog(res.data); // Set all fetched data
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
                            <Userblog key={item.id} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Userblogs
