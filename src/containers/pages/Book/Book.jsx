import BookCategories from "components/Book/BookCategories";
import BookList from "components/Book/BookList";
import Header from "components/Book/Header";
import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { useEffect } from "react";
import { connect } from "react-redux";
import { get_book_list, get_book_list_page } from "redux/actions/book";

function Book({
    get_book_list,
    book_list,
    count,
    get_book_list_page
}){

    useEffect(()=>{
        get_book_list()
    },[])

    return(
        <FullWidthLayout>
            <Header/>
            <BookCategories/>
            <BookList book_list={book_list && book_list} count={count && count} get_book_list_page={get_book_list_page} />
        </FullWidthLayout>
    )
}

const mapStateToProps = state =>({
    book_list: state.book.book_list,
    count: state.book.count
})

export default connect(mapStateToProps,{
    get_book_list,
    get_book_list_page
})(Book)