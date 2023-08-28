import axios from 'axios';
import {
    GET_BOOK_LIST_SUCCESS,
    GET_BOOK_LIST_FAIL,
    GET_BOOK_SUCCESS,
    GET_BOOK_FAIL,
    GET_BOOK_LIST_CATEGORIES_SUCCESS,
    GET_BOOK_LIST_CATEGORIES_FAIL,
    GET_SEARCH_BOOK_SUCCESS,
    GET_SEARCH_BOOK_FAIL
} from "./types"

export const get_book_list = () => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try{
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/book/`, config);
        if (res.status === 200) {
            dispatch({
                type: GET_BOOK_LIST_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_BOOK_LIST_FAIL
            });
        }

    }catch{
        dispatch({
            type: GET_BOOK_LIST_FAIL
        });
    }
}

export const get_book_list_page = (p) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try{
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/book/?p=${p}`, config);
        if (res.status === 200) {
            dispatch({
                type: GET_BOOK_LIST_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_BOOK_LIST_FAIL
            });
        }

    }catch{
        dispatch({
            type: GET_BOOK_LIST_FAIL
        });
    }
}

export const get_book_list_category = (category_id) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try{
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/book/category/${category_id}`, config);
        if (res.status === 200) {
            dispatch({
                type: GET_BOOK_LIST_CATEGORIES_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_BOOK_LIST_CATEGORIES_FAIL
            });
        }

    }catch{
        dispatch({
            type: GET_BOOK_LIST_CATEGORIES_FAIL
        });
    }
}

export const get_book_list_category_page = (category_id, p) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try{
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/book/category/${category_id}?p=${p}`, config);
        if (res.status === 200) {
            dispatch({
                type: GET_BOOK_LIST_CATEGORIES_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_BOOK_LIST_CATEGORIES_FAIL
            });
        }

    }catch{
        dispatch({
            type: GET_BOOK_LIST_CATEGORIES_FAIL
        });
    }
}

export const get_book = (slug) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try{
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/book/${slug}`, config);
        if (res.status === 200) {
            dispatch({
                type: GET_BOOK_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_BOOK_FAIL
            });
        }

    }catch{
        dispatch({
            type: GET_BOOK_FAIL
        });
    }
}

export const search_book = (search_term) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try{
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/book/search/${search_term}`, config);
        if (res.status === 200) {
            dispatch({
                type: GET_SEARCH_BOOK_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_SEARCH_BOOK_FAIL
            });
        }

    }catch{
        dispatch({
            type: GET_SEARCH_BOOK_FAIL
        });
    }
}