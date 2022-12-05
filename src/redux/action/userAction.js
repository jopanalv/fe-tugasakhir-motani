import axios from 'axios';
import toast from 'react-simple-toasts';
import { BASE_URL } from '../../utils/baseUrl';

export const getAllUsers = () => {
    const token = localStorage.getItem('accessToken');
    return (dispatch) => {
        axios({
            method: 'GET',
            url: `${BASE_URL}/users`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((response) => {
            dispatch({
                type: 'GET_ALL_USERS',
                payload: response.data.data,
            });
        }).catch(error => toast(`${error.response.data.message}`))
    }
}

export const updateUser = (data, id) => {
    return (dispatch) => {
        axios({
            method: 'PUT',
            url: `${BASE_URL}/users/${id}`,
            data: data
        }).then((response) => {
            toast(`${response.data.message}`, 3000, 'green')
            axios({
                method: 'GET',
                url: `${BASE_URL}/users/${id}`,
            }).then((response) => {
                localStorage.removeItem('user')
                localStorage.setItem('user', JSON.stringify(response.data.data))
            }).catch(error => console.log(error))
        }).catch(error => toast(`${error.response.data.message}`))
    }
}

export const deleteUser = (id) => {
    const token = localStorage.getItem('accessToken');
    return (dispatch) => {
        axios({
            method: 'DELETE',
            url: `${BASE_URL}/users/${id}`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((response) => {
            dispatch({
                type: 'DELETE_USER',
                payload: id,
            })
            toast(`${response.data.message}`, 3000, 'green')
        }).catch(error => toast(`${error.response.data.message}`))
    }
}