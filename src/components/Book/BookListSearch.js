import LoadingCard from "components/loaders/LoadingCard";
import { useEffect } from "react";
import { connect } from "react-redux"
import { get_book_list, get_book_list_page } from "redux/actions/book";
import BookCard from "./BookCard";
import SmallSetPagination from "components/pagination/SmallSetPagination";

function BookList({
    book_list,
    get_book_list_page,
    count
}){

    return(
        <div>
            {
                book_list ?
                <>
                <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
                    <div className="absolute inset-0">
                        <div className="bg-white h-1/3 sm:h-2/3" />
                    </div>
                    <div className="relative max-w-7xl mx-auto">

                        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                            {
                                book_list.map(post=>(
                                    <BookCard data={post}/>
                                ))
                            }
                        </div>
                        <SmallSetPagination get_book_list_page={get_book_list_page} book_list={book_list} count={count} />
                    </div>
                </div>
                </>
                :
                <LoadingCard/>
            }
        </div>
    )
}

const mapStateToProps = state => ({
    count: state.book.count
})

export default connect(mapStateToProps,{

})(BookList)