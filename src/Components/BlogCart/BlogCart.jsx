import { useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { MdBookmarkAdd, MdOutlineBookmarkAdd } from "react-icons/md";
import { saveBlog } from "../../Utils";

const BlogCart = () => {
    const [tabIndex, setTabIndex] = useState(0)
    const blogCart = useLoaderData();
    const { id, cover_image, title, description, published_at,
        reading_time_minutes, comments_count, public_reactions_count,
        tags
    } = blogCart;

    const handleBookmarks = (blogCart) => {
        saveBlog(blogCart);
    }
    return (
        <div className="max-w-2xl px-6 py-16 mx-auto space-y-12">
            <article className="space-y-8  ">
                <div className="space-y-6">
                    <h1 className="text-2xl font-semibold md:tracking-tight md:text-5xl">{title}</h1>
                    <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center text-gray-400">
                        <div className="flex items-center md:space-x-2">
                            <p className="text-sm ">{reading_time_minutes} min read • {new Date(published_at).toLocaleDateString()}</p>
                        </div>
                        <p className="flex-shrink-0 mt-3 text-sm md:mt-0">{comments_count} Comments • {public_reactions_count} views</p>
                    </div>
                </div>
                {/* Tabs */}
                <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap  ">
                    <Link
                        to=""
                        onClick={() => setTabIndex(0)}
                        className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0' : 'border-b'} rounded-t-lg border-gray-400 `}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                        </svg>
                        <span>Content</span>
                    </Link>
                    <Link
                        to="author"
                        onClick={() => setTabIndex(1)}
                        className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0' : 'border-b'} rounded-t-lg border-gray-400 `}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                        </svg>
                        <span>Author</span>
                    </Link>
                    <div
                        onClick={()=> handleBookmarks(blogCart)}
                        className="bg-primary ml-5 bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 hover:scale-105 cursor-pointer">
                        <MdBookmarkAdd size={30} className="text-secondary" />
                    </div>
                </div>
            </article>
            <Outlet></Outlet>
            <div>

            </div>
        </div>
    );
};

export default BlogCart;