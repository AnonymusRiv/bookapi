import axios from 'axios';
import {
    GET_BOOK_LIST_SUCCESS,
    GET_BOOK_LIST_FAIL,
    GET_BOOK_SUCCESS,
    GET_BOOK_FAIL,
    GET_BOOK_PAGINATION_RESULTS_SUCCESS,
    GET_BOOK_PAGINATION_RESULTS_FAIL,
} from "./types"

export const get_book_list = () => async dispatch => {
    const config = {
        headers: {
            'Accept': 'aplication/json'
        }
    };

    try{
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/book`, config);
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
            'Accept': 'aplication/json'
        }
    };

    try{
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/book?p=${p}`, config);
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

export const get_book = (slug) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'aplication/json'
        }
    };

    try{
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/book${slug}`, config);
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