import axios from 'axios';
import toast from 'react-simple-toasts';
import { BASE_URL } from '../../utils/baseUrl';

export const createBanner = (data) => {
    const token = localStorage.getItem("accessToken");
    return (dispatch) => {
        axios({
            method: 'POST',
            url: `${BASE_URL}/banners`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
            data: data
        }).then((response) => {
            dispatch({
                type: 'ADD_BANNER',
                payload: response.data
            })
        }).catch(error => toast(`${error.response.data.message}`))
    }
}

export const getAllBanner = () => {
    const token = localStorage.getItem("accessToken");
    return (dispatch) => {
        axios({
            method: 'GET',
            url: `${BASE_URL}/banners`,
        }).then((response) => {
            dispatch({
                type: 'GET_ALL_BANNER',
                payload: response.data.data
            })
        }).catch(error => toast(`${error.response.data.message}`))
    }
}

export const deleteBanner = (id) => {
    const token = localStorage.getItem("accessToken");
    return (dispatch) => {
        axios({
            method: 'DELETE',
            url: `${BASE_URL}/banners/${id}`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((response) => {
            dispatch({
                type: 'DELETE_BANNER',
                payload: id
            })
        }).catch(error => toast(`${error.response.data.message}`))
    }
}