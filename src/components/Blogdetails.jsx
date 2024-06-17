// export default Blogdetails;
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from "./Navbar";
import Bolgs from "./Bolgs";
import Footer from "./Footer";
import Addcomment from "./Addcomment";

function Blogdetails() {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const res = await axios.get(`https://mernbackend-main.onrender.com/api/blogs/${id}`);
                setBlog(res.data);
                setComments(res.data.comments);
            } catch (error) {
                console.error('Error fetching blog:', error);
                window.location.reload();
            }
        };
        fetchBlog();
    }, [id]);

    const handleDeleteComment = async (commentId) => {
        try {
            if (!blog) {
                console.error('Blog details are not available.');
                return;
            }

            const response = await axios.delete(`http://localhost:5000/api/blogcomment/blogs/${blog._id}/comments/${commentId}`);

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

    // Retrieve userId from localStorage
    const userId = localStorage.getItem('user');
    const userObject = JSON.parse(userId); // Parse the JSON string into an object
    const userIdValue = userObject.user_id;

    console.log(userIdValue); // This will output: "6664327128120e79d1321b17"


    if (!blog) return <div>Loading...</div>;

    return (
        <>
            <Navbar />
            <div className="flex h-screen items-center justify-center dark:text-white">
                <div className="card bg-base-100 w-[800px] h-[400px] shadow-xl border border-black">
                    <div className="card-body flex flex-col items-center">
                        <h2 className="card-title">Title: {blog.title}</h2>
                        <p>Content: {blog.content}</p>
                        <p>Autor : {blog.author.name}</p>
                        <p>Date: {new Date(blog.date).toLocaleString()}</p>
                        <div className="card-actions justify-end">
                            <button className="btn bg-blue-500 text-white" onClick={() => document.getElementById("my_modal_34").showModal()}>
                                Add Comment
                            </button>
                            <Addcomment />
                        </div>
                        <hr />
                        <div className="overflow-x-auto">
                            <table className="table table-xs table-pin-rows table-pin-cols">
                                <thead>
                                    <tr>
                                        <th>Comment</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {comments.map(comment => (
                                        <tr key={comment._id}>
                                            <td>{comment.content}</td>
                                            {comment.user === userIdValue && ( 
                                                <td>
                                                    <button onClick={() => handleDeleteComment(comment._id)}>
                                                        Delete
                                                    </button>
                                                </td>
                                            )} 
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Bolgs />
            <Footer />
        </>
    );
}

export default Blogdetails;
