import {
    GET_BOOK_LIST_SUCCESS,
    GET_BOOK_LIST_FAIL,
    GET_BOOK_SUCCESS,
    GET_BOOK_FAIL,
    GET_BOOK_LIST_CATEGORIES_SUCCESS,
    GET_BOOK_LIST_CATEGORIES_FAIL,
    GET_SEARCH_BOOK_SUCCESS,
    GET_SEARCH_BOOK_FAIL
} from "../actions/types";

const initialState = {
    book_list: null,
    book_list_category: null,
    filtered_posts: null,
    post: null,
    count: null,
    next: null,
    previous: null
};

export default function book(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case GET_BOOK_LIST_SUCCESS:
            return {
                ...state,
                book_list: payload.results.posts,
                count: payload.count,
                next: payload.next,
                previous: payload.previous,
            }
        case GET_BOOK_LIST_FAIL:
            return {
                ...state,
                book_list: null,
                post: null,
                count: null,
                next: null,
                previous: null
            }
        case GET_BOOK_LIST_CATEGORIES_SUCCESS:
            return {
                ...state,
                book_list_category: payload.results.posts,
                count: payload.count,
                next: payload.next,
                previous: payload.previous,
            }
        case GET_BOOK_LIST_CATEGORIES_FAIL:
            return {
                ...state,
                book_list_category: null,
                post: null,
                count: null,
                next: null,
                previous: null
            }
        case GET_BOOK_SUCCESS:
            return {
                ...state,
                post: payload.post
            }
        case GET_BOOK_FAIL:
            return {
                ...state,
                post: null
            }
        case GET_SEARCH_BOOK_SUCCESS:
            return {
                ...state,
                filtered_posts: payload.filtered_posts
            }
        case GET_SEARCH_BOOK_FAIL:
            return {
                ...state,
                filtered_posts: null
            }
        default:
            return state
    }
}