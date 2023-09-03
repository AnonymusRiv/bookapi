import { Link } from "react-router-dom"

function BookCard(data){
    let post = data && data.data
    const thumbnail = "http://localhost:8000" + post.thumbnail
    return(
        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="flex-shrink-0">
            <Link to={`/book/post/${post.slug}`} className="block mt-2">
                <img className="h-48 w-full object-cover" src={thumbnail} alt="" />
                </Link>
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                        <Link to={`/book/categories/${post.category.id}`} className="hover:underline">
                            {post.category.name}
                        </Link>
                    </p>
                    <Link to={`/book/post/${post.slug}`} className="block mt-2">
                        <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                    </Link>
                </div>
                <div className="mt-6 flex items-center">
                    <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">
                            <Link to="#" className="hover:underline">
                                {post.author}
                            </Link>
                        </p>
                        <div className="flex space-x-1 text-sm text-gray-500">
                            <time>{post.published}</time>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookCard