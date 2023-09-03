import BookCategoriesList from "components/Book/BookCategoriesList";
import FullWidthLayout from "hocs/layouts/FullWidthLayout"
import { useEffect } from "react"
import { Connect, connect } from "react-redux"
import { useParams } from "react-router-dom"
import { get_book_list_category, get_book_list_category_page } from "redux/actions/book"

function BookCategory({get_book_list_category, book_list, count, get_book_list_category_page}){

    useEffect(()=>{
    },[])

    return(
        <FullWidthLayout>
            <BookCategoriesList/>
        </FullWidthLayout>
    )
}

const mapStateToProps = state => ({
    book_list: state.book.book_list_category,
    count: state.book.count
})

export default connect(mapStateToProps,{
    get_book_list_category,
    get_book_list_category_page
})(BookCategory)