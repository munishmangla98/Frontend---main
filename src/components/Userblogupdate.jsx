// // import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Footer from "./Footer"
import Navbar from "./Navbar"
import Bolgs from "./Bolgs"
import Userblogupdateform from './Userblogupdateform';
import toast from "react-hot-toast";

function Userblogupdate() {
    const { id } = useParams();
    const [blog, setBlog] = useState();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const res = await axios.get(`https://mernbackend-main.onrender.com/api/blogs/${id}`);
                setBlog(res.data);
                setComments(res.data.comments);
            } catch (error) {
                console.error('Error fetching blog:', error);
            }
        };
        fetchBlog();
    }, [id]);



    // const handleDeleteComment = async (commentId) => {
    //     try {
    //         await axios.delete(`https://mernbackend-main.onrender.com/api/blogs/${id}/comments/${commentId}`);
    //         const updatedComments = comments.filter(comment => comment._id !== commentId);
    //         setComments(updatedComments);
    //     } catch (error) {
    //         console.error('Error deleting comment:', error);
    //     }
    // };

    const handleDeleteComment = async (commentId) => {
        try {
            if (!blog) {
                console.error('Blog details are not available.');
                return;
            }
    
            // Retrieve user object from localStorage
            const userString = localStorage.getItem('user');
            if (!userString) {
                console.error('No user information found in localStorage');
                return;
            }
    
            const user = JSON.parse(userString); // Parse the JSON string into an object
            const token = user.token; // Extract the token from the user object
    
            if (!token) {
                console.error('No token found');
                return;
            }
    
            // Make the DELETE request with the Authorization header
            const response = await axios.delete(
                `https://mernbackend-main.onrender.com/api/blogcomment/blogs/${blog._id}/comments/${commentId}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
    
            if (response.status === 200) {
                const updatedComments = comments.filter(comment => comment._id !== commentId);
                setComments(updatedComments);
                console.log('Comment deleted successfully.');
            } else {
                console.error('Failed to delete comment:', response.statusText);
            }
        } catch (error) {
            console.error('Error deleting comment:', error);
        }
    };
    
    

    const handleDeleteBlog = async () => {
        try {
            await axios.delete(`https://mernbackend-main.onrender.com/api/blogs/${id}`);
            // Redirect to a different route after successful deletion
            history.push('/blogs'); // Example redirect to a blogs page
            toast.success("Blog Deleted in Successfully");
            window.location.reload(); // Refresh the window
        } catch (error) {
            console.error('Error deleting blog:', error);
        }
    };
    if (!blog) return <div>Loading...</div>;
    return (
        <>
            <Navbar />
            <div className="flex h-screen items-center justify-center dark:text-white">
                <div className="card bg-base-100 w-[800px] h-[400px] shadow-xl border border-black">
                    {/* <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> */}
                    <div className="card-body flex flex-col items-center">
                        <h2 className="card-title">Title: {blog.title}</h2>
                        <p>Content: {blog.content}</p>
                        {/* <p>Author: {blog.author}</p> */}
                        <p>Date: {blog.date}</p>
                        <div className="card-actions justify-end">
                            <a
                                className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-blue-500 hover:text-white duration-10 flex items-center justify-center"
                                onClick={() =>
                                    document.getElementById("my_modal_42").showModal()
                                }
                            >Update Blog Form</a>
                            <Userblogupdateform />

                            <a className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-red-500 hover:text-white duration-200 flex items-center justify-center"
                                onClick={handleDeleteBlog} // Call handleDeleteBlog when clicked
                            >Delete Blog</a>
                        </div>
                        <hr />
                        <div className="overflow-x-auto">
                            <table className="table table-xs table-pin-rows table-pin-cols">

                                <thead>
                                    <tr>
                                        <th>
                                            Comment
                                        </th>
                                        <th>
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {comments.map(comment => (
                                        <tr key={comments._id}>
                                            <td>
                                                {comment.content}
                                            </td>
                                            <td>
                                                <button onClick={() => handleDeleteComment(comment._id)}>
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                                <hr />
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Bolgs />
            <Footer />
        </>
    )
}

export default Userblogupdate
