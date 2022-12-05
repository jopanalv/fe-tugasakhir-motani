import axios from 'axios';
import toast from 'react-simple-toasts';
import { BASE_URL } from '../../utils/baseUrl';

export const getAllCategory = () => {
    return (dispatch) => {
        axios({
            method: 'GET',
            url: `${BASE_URL}/categories`,
        }).then((response) => {
            dispatch({
                type: 'GET_ALL_CATEGORY',
                payload: response.data.data
            })
        }).catch(error => toast(`${error.response.data.message}`))
    }
}

export const createCategory = (data) => {
    const token = localStorage.getItem("accessToken");
    return (dispatch) => {
        axios({
            method: 'POST',
            url: `${BASE_URL}/categories`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
            data: {
                name: data
            }
        }).then((response) => {
            dispatch({
                type: 'CREATE_CATEGORY',
                payload: data
            })
            toast(`${response.data.message}`)
        }).catch(error => toast(`${error.response.data.message}`))
    }
}

export const updateCategory = (id, data) => {
    const token = localStorage.getItem("accessToken");
    return (dispatch) => {
        axios({
            method: 'PUT',
            url: `${BASE_URL}/categories/${id}`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
            data: {
                name: data
            }
        }).then((response) => {
            console.log(data)
            dispatch({
                type: 'UPDATE_CATEGORY',
                payload: {
                    id: id,
                    name: data
                }
            })
            toast(`${response.data.message}`)
        }).catch(error => toast(`${error.response.data.message}`))
    }
}

export const deleteCategory = (id) => {
    const token = localStorage.getItem("accessToken");
    return (dispatch) => {
        axios({
            method: 'DELETE',
            url: `${BASE_URL}/categories/${id}`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((response) => {
            dispatch({
                type: 'DELETE_CATEGORY',
                payload: id
            })
            toast(`${response.data.message}`)
        }).catch(error => toast(`${error.response.data.message}`))
    }
}