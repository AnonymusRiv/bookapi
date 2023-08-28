import { connect } from "react-redux";
import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { search_book } from "redux/actions/book";
import BookListSearch from "components/Book/BookListSearch";

function Search({search_book, posts}){

    const params = useParams()
    const term = params.term

    useEffect(() =>{
        search_book(term)
    },[])

    return(
        <FullWidthLayout>
            <BookListSearch book_list={posts}/>
        </FullWidthLayout>
    )
}

const mapStateToProps = state =>({
    posts: state.book.filtered_posts
})

export default connect(mapStateToProps,{
    search_book
})(Search)