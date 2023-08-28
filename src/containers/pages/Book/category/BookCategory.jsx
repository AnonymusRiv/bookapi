import CategoryBookList from "components/Book/CategoryBookList";
import FullWidthLayout from "hocs/layouts/FullWidthLayout"
import { useEffect } from "react"
import { Connect, connect } from "react-redux"
import { useParams } from "react-router-dom"
import { get_book_list_category, get_book_list_category_page } from "redux/actions/book"

function BookCategory({get_book_list_category, book_list, count, get_book_list_category_page}){

    const params = useParams()
    const category_id = params.category_id

    useEffect(()=>{
        get_book_list_category(category_id)
    },[])

    return(
        <FullWidthLayout>
            <CategoryBookList book_list={book_list && book_list} count={count && count} get_book_list_category_page={get_book_list_category_page} category_id={category_id} />
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