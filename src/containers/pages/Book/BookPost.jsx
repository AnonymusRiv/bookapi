import LoadingCard from "components/loaders/LoadingCard";
import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { get_book } from "redux/actions/book";

function BookPost({get_book, post}){
    const params = useParams()
    const slug = params.slug

    useEffect(()=>{
        get_book(slug)
    },[])

    return(
        <FullWidthLayout>
            {
                post ?
                <div className="relative py-16 bg-white overflow-hidden">
                <div className="relative px-4 sm:px-6 lg:px-8">
                    <div className="text-lg max-w-prose mx-auto">
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