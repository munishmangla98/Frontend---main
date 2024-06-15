import  { useState, useEffect } from 'react';
import axios from 'axios';
import toast from "react-hot-toast";
function Userblogupdateform() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [blogId, setBlogId] = useState('');

    useEffect(() => {
        // Fetch blog data from local storage
        const Blogdata = localStorage.getItem('openedBlog');
        if (Blogdata) {
            // Parse the blog data to get title, content, and id
            const Data = JSON.parse(Blogdata);
            setTitle(Data.title);
            setContent(Data.content);
            setBlogId(Data._id);
        } else {
            console.error('Blog data not found in local storage.');
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const currentDate = new Date().toISOString();
            const requestData = {
                title,
                content,
                date: currentDate,
            };

            const response = await axios.put(`https://mernbackend-main.onrender.com/api/blogs/${blogId}`, requestData);
            console.log('Blog updated:', response.data);
            // Show success toast
            toast.success('Blog updated successfully!');
            // Close the modal on success
            document.getElementById('my_modal_42').close();
        } catch (error) {
            console.error('Error updating blog:', error);
            if (error.response && error.response.status === 401) {
                console.error('Unauthorized access - possibly invalid or expired token.');
            }
            toast.error('Failed to update blog. Please try again.');
        }
    };

    return (
        <>
            <dialog id="my_modal_42" className="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="modal-box">
                    <form onSubmit={handleSubmit}>
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
    );
}

export default Userblogupdateform;
