import Markdown from "react-markdown";
import { useLoaderData, useNavigation } from "react-router-dom";
import rehypeRaw from "rehype-raw";
import Loader from "../Loader/Loader";

const Content = () => {
    const navigation = useNavigation();
    const blogs = useLoaderData();
    const { id, cover_image, title, url, published_at, tags, body_html } = blogs
    // console.log(blogs)
    if(navigation.state === 'loading') return <Loader></Loader>
    return (
        <div>
            <div
                className="mx-auto group border-2 p-2 border-opacity-30 hover:no-underline focus:no-underline ">
                <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src={cover_image} />
                <div className="flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-400">

                    {
                        tags.map(tag => <a rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline  text-gray-900">#{tag}</a>)
                    }
                </div>
                <div className=" space-y-2">
                    <span className="text-xs text-gray-400">{new Date(published_at).toLocaleDateString()}</span> <br />
                    <a
                        href={url}
                        target="_blank"
                        className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</a>
                </div>
                <div>
                    <Markdown rehypePlugins={rehypeRaw}>{body_html}</Markdown>
                </div>
            </div>
        </div>
    );
};

export default Content;