import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";

const Blog = ({ blog, deletable,handleDelete }) => {

    const { id, cover_image, title, description, published_at } = blog

    return (
        <div className="flex relative">
            <Link
                to={`/cart/${id}`}
                className="max-w-sm p-2 mx-auto group transition border-2 hover:scale-105 border-primary hover:border-secondary border-opacity-30 hover:no-underline focus:no-underline ">
                <img role="presentation" className="object-cover w-full rounded h-44 " src={cover_image} />
                <div className=" space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                    <span className="text-xs ">{new Date(published_at).toLocaleDateString()}</span>
                    <p>{description}</p>
                </div>

            </Link>
            {
                deletable && <div
                    onClick={()=> handleDelete(id)}
                    className="absolute -top-5 -right-4 p-2 rounded-full bg-primary 
                hover:bg-secondary group cursor-pointer hover:scale-105">
                    <MdDeleteForever size={20} className="text-secondary group-hover:text-primary"></MdDeleteForever>
                </div>
            }
        </div>
    );
};

export default Blog;