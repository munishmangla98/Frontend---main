import { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
// import toast from "react-hot-toast";
function AddComment({ onCommentAdded }) {
    const [comment, setComment] = useState('');
    const [blogId, setBlogId] = useState('');
    useEffect(() => {
        // Fetch openedBlog from localStorage
        const openedBlog = JSON.parse(localStorage.getItem('openedBlog'));
        if (openedBlog && openedBlog._id) {
            setBlogId(openedBlog._id);
        }
        // Fetch token from local storage
        const token = localStorage.getItem('token');
        // Set token as default header for all axios requests
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`https://mernbackend-main.onrender.com/api/blogcomment/blogs/${blogId}/comments`, {
                content: comment
            });
            if (res.status === 201) {
                onCommentAdded(res.data); // Assuming `onCommentAdded` updates the UI with the new comment
                setComment('');
                // toast.success("Comment added in Successfully");
                document.getElementById("my_modal_34").close(); // Close the modal after successful submission
                window.location.reload();
            }
        } catch (error) {
            console.error('Error adding comment:', error);
            // toast.error("An error occurred, please try again later");
        }
    };

    return (
        <dialog id="my_modal_34" className="modal">
            <div className="modal-box">
                <form onSubmit={handleSubmit}>
                    <button type="button" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById("my_modal_34").close()}>✕</button>
                    <h3 className="font-bold text-lg">Add Comment</h3>
                    <div className="mt-4 space-y-2">
                        <span>Comment</span>
                        <br />
                        <input
                            type="text"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            placeholder="Enter your Comment"
                            className="w-80 px-3 py-1 border rounded-md outline-none"
                        />
                        <br />
                    </div>
                    <div className="flex justify-around mt-6">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-700 duration-200"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </dialog>
    );
}

AddComment.propTypes = {
    blogId: PropTypes.string.isRequired,
    onCommentAdded: PropTypes.func.isRequired,
};

export default AddComment;
