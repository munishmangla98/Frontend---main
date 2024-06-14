// import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
function Blogupdate() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        // Fetch user data from local storage
        const storedUser = localStorage.getItem('user');
        const openedBlog = localStorage.getItem('openedBlog');
        
        // Check if user data exists
        if (storedUser) {
            // Parse the user data to get the token
            const user = JSON.parse(storedUser);
            const token = user.token;
            
            // Set token as default header for all axios requests
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            console.log('Token:', token);
        } else {
            console.error('User data not found in local storage.');
        }

        // Check if blog data exists
        if (openedBlog) {
            // Parse the blog data to populate form fields
            const blog = JSON.parse(openedBlog);
            setTitle(blog.title);
            setContent(blog.content);
        } else {
            console.error('Blog data not found in local storage.');
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const currentDate = new Date().toISOString(); // Get current date
            console.log('Current Date:', currentDate); // Log the current date
            const requestData = {
                title,
                content,
                date: currentDate // Include current date in the request
            };
            console.log('Request Data:', requestData); // Log the complete request data
            const blogId = JSON.parse(localStorage.getItem('openedBlog'))._id;
            console.log('Headers:', axios.defaults.headers.common);
            const response = await axios.put(`http://localhost:5000/api/blogs/${blogId}`, requestData);
            console.log('Blog updated:', response.data);
            // Close the modal on success
            document.getElementById('my_modal_42').close();
        } catch (error) {
            console.error('Error updating blog:', error);
            if (error.response && error.response.status === 401) {
                console.error('Unauthorized access - possibly invalid or expired token.');
            }
        }
    };

    return (
        <>
            <dialog id="my_modal_42" className="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="modal-box">
                    <form method="dialog" onSubmit={handleSubmit}>
                        <button type="button" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById('my_modal_42').close()}>✕</button>
                        <h3 className="font-bold text-lg">Update Blog</h3>
                        <div className="mt-4 space-y-2">
                            <span>Title</span>
                            <br />
                            <input
                                type="text"
                                placeholder="Title"
                                className="w-80 px-3 py-1 border rounded-md outline-none"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            />
                            <br />
                        </div>
                        <div className="mt-4 space-y-2">
                            <span>Content</span>
                            <br />
                            <input
                                type="text"
                                placeholder="Enter your Content"
                                className="w-80 h-100 px-3 py-1 border rounded-md outline-none"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                required
                            />
                            <br />
                        </div>
                        <div className="flex justify-around mt-6">
                            <button type="submit" className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </dialog>
        </>
    )
}

export default Blogupdate
