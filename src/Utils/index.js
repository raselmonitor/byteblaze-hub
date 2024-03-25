import toast from "react-hot-toast";

// Get blogs
const getBlogs = () => {
    let blogs = [];
    const storedBlogs = localStorage.getItem('blogs');
    if (storedBlogs) {
        blogs = JSON.parse(storedBlogs);
    }
    return blogs;
}

// Save blogs

const saveBlog = (blogCart) => {
    let blogs = getBlogs();
    const isExist = blogs.find(b => b.id === blogCart.id)
    if (isExist) {
        return toast.error("This blog already exists.");
    }
    blogs.push(blogCart);
    localStorage.setItem('blogs', JSON.stringify(blogs));
    toast.success("The blog has been saved successfully!");
}

// Delete  blog
const deleteBlogs = (id) => {
    let blogs = getBlogs();
    const remainingBlogs = blogs.filter(blog => blog.id !== id);
    localStorage.setItem('blogs', JSON.stringify(remainingBlogs));
    toast.success("Remove blog from bookmarks!");
}


export {getBlogs, saveBlog, deleteBlogs}