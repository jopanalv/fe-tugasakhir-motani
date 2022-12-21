import axios from 'axios';
import { BASE_URL } from '../../utils/baseUrl';
import toast from 'react-simple-toasts';

export const getAllReviews = (id) => {
    return (dispatch) => {
        axios({
            method: 'GET',
            url: `${BASE_URL}/review/${id}`,
        }).then((response) => {
            dispatch({
                type: 'GET_ALL_REVIEWS',
                payload: response.data.data
            })
        }).catch(error => toast(`${error.response.data.message}`, 2000))
    }
}

export const createReview = (data) => {
    const token = localStorage.getItem("accessToken");
    return (dispatch) => {
        axios({
            method: 'POST',
            url: `${BASE_URL}/review`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
            data: data,
        }).then((response) => {
            toast(`${response.data.message}`, 2000)
            dispatch({
                type: 'CREATE_REVIEW',
                payload: response.data.data
            })
        }).catch(error => toast(`${error.response.data.message}`, 2000))
    }
}