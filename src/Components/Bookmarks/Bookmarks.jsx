import { useEffect, useState } from "react";
import { deleteBlogs, getBlogs } from "../../Utils";
import Blog from "../Blog/Blog";
import EmptyState from "../EmptyState/EmptyState";


const Bookmarks = () => {
    const [bookmark, setBookmark] = useState([]);

    useEffect(() => {
        const getData = getBlogs();
        setBookmark(getData)
    }, [])

    const handleDelete = (id) => {
        deleteBlogs(id)
        const getData = getBlogs();
        setBookmark(getData)
    }
    if (bookmark.length === 0) {
        return <EmptyState></EmptyState>
    }
    return (
        <div className="grid w-3/4 mt-10 mx-auto justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {
                bookmark.map(blog => <Blog handleDelete={handleDelete} deletable={true} key={blog.id} blog={blog}></Blog>)
            }
        </div>
    );
};

export default Bookmarks;