// import React from 'react'
import PropTypes from 'prop-types';
import { Link } from "react-router-dom"

function Userblog({ item }) {
    const storeBlogDetails = () => {
        // Store the details of the opened blog in local storage
        localStorage.setItem('openedBlog', JSON.stringify(item));
    };
    console.log(item)
    return (
        <div className="mt-4 my-3 p-3">
            <div className="card w-90  bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
                <div className="card-body">
                    <h2 className="card-title">
                        Blog Title : {item.title}
                    </h2>
                    <p>{item.content}</p>
                    <p>{item.date}</p>
                    <div className="card-actions justify-between">
                 
              
                       
                    </div>
                    <Link
                            to={`/Userblogupdate/${item._id}`}
                            className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-blue-500 hover:text-white duration-200"
                            onClick={storeBlogDetails}>Update Blog</Link>
                </div>
            </div>
        </div>
    )
}
// Define the PropTypes for the item prop
Userblog.propTypes = {
    item: PropTypes.shape({
        _id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        author: PropTypes.shape({
            _id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        }),
        date: PropTypes.string.isRequired,
    }).isRequired,
};
export default Userblog
