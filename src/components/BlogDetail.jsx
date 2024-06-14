import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function BlogDetail() {
    const { id } = useParams();
    const [blog, setBlog] = useState();

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/blogs/${id}`);
                console.log('Blog data:', res.data); 
                setBlog(res.data);
            } catch (error) {
                console.error('Error fetching blog:', error);
            }
        };
        fetchBlog();
    }, [id]);

    if (!blog) return <div>Loading...</div>;

    return (
        <>
            <Navbar />
            <div className="flex h-screen items-center justify-center">
                <h1>{blog.title}</h1>
                <p>{blog.content}</p>
                <p>Author: {blog.author}</p>
                <p>Date: {new Date(blog.date).toLocaleDateString()}</p>
            </div>
            <Footer />
        </>
    );
}

export default BlogDetail;
