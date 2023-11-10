import LoadingCard from "components/loaders/LoadingCard";
import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { useContext, useEffect } from "react";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { get_book } from "redux/actions/book";
import { AuthContext } from "../../../App";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function BookPost({get_book, post}){
    const params = useParams()
    const slug = params.slug
    const { isLogged, username } = useContext(AuthContext);
    const navigate = useNavigate();
    const thumbnail = post ? `http://localhost:8000${post.thumbnail}` : null;
    
    useEffect(()=>{
        get_book(slug)
    },[])

    const handleReserve = async (event) => {
        event.preventDefault()
        const uuid = post.book_uuid;


        try {
            const response = await axios.post("http://localhost:8000/api/lend/addlend/", {
                username,
                uuid,
            });
            if (response.status === 201){
                console.log("Book lend successfully");
                navigate("/book");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return(
        <FullWidthLayout>
            {
                post ?
                <div className="relative py-16 bg-white overflow-hidden">
                <div className="relative px-4 sm:px-6 lg:px-8">
                    <div className="text-lg max-w-prose mx-auto">
                    <figure>
                        <img
                            className="w-full rounded-lg"
                            src={thumbnail}
                            alt=""
                            width={1310}
                            height={873}
                        />
                    </figure>
                    <h1>
                        <span className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
                        {post.category.name}
                        </span>
                        <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        {post.title}
                        </span>
                    </h1>
                    <p className="mt-8 text-xl text-gray-500 leading-8">
                        {post.excerpt}
                    </p>
                    </div>
                    <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
                    <p>
                        {post.description}
                    </p>
                    {isLogged ? (
                        post.available ? (
                            <Link to="/reserve" onClick={handleReserve} className="ml-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Reserve
                            </Link>
                        ) : 
                        <span className="ml-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                            Not Available
                        </span>

                    ) : 
                    null}

                    </div>
                </div>
            </div>
            :
            <LoadingCard/>
            }
        </FullWidthLayout>
    )
}

const mapStateToProps = state =>({
    post: state.book.post
})

export default connect(mapStateToProps,{
    get_book
})(BookPost)

{/*<figure>
  <img
    className="w-full rounded-lg"
    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3"
    alt=""
    width={1310}
    height={873}
  />
  <figcaption>Sagittis scelerisque nulla cursus in enim consectetur quam.</figcaption>
</figure>*/}