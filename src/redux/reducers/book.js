import {
    GET_BOOK_LIST_SUCCESS,
    GET_BOOK_LIST_FAIL,
    GET_BOOK_SUCCESS,
    GET_BOOK_FAIL,
} from "../actions/types";

const initialState = {
    book_list: null,
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
        default:
            return state
    }
}