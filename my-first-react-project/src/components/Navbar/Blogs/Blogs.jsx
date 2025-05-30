import React, { useEffect, useState } from 'react';
import Blog from '../../Blog/Blog';

const Blogs = ({handleBookMark, handleMarkAsRead}) => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch("blogs.json")
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    //  console.log(blogs)
    return (
        <div>
            <h1 className='text-3xl font-black '>Total : {blogs.length}</h1>

            <div className="all-blogs grid grid-cols-2 gap-5 mt-5">
                {
                    blogs.map((blog) =>  <Blog key={blog.id} blog={blog}  handleBookMark = {handleBookMark}
                    handleMarkAsRead = {handleMarkAsRead}
                    ></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;