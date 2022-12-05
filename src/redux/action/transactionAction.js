import axios from 'axios';
import toast from 'react-simple-toasts';
import { BASE_URL } from '../../utils/baseUrl';

export const getAllTransaction = () => {
    const token = localStorage.getItem("accessToken");
    return (dispatch) => {
        axios({
            method: 'GET',
            url: `${BASE_URL}/transactions`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            dispatch({
                type: 'GET_ALL_TRANSACTION',
                payload: response.data.data
            })
        }).catch(error => console.log(error))
    }
}

export const getTransactionDetail = (id) => {
    const token = localStorage.getItem("accessToken");
    return (dispatch) => {
        axios({
            method: 'GET',
            url: `${BASE_URL}/transaction/detail/${id}`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            dispatch({
                type: 'GET_TRANSACTION_DETAIL',
                payload: response.data.data
            })
        }).catch(error => console.log(error))
    }
}

export const createTransaction = (data, slug) => {
    const token = localStorage.getItem("accessToken");
    return (dispatch) => {
        axios({
            method: 'POST',
            url: `${BASE_URL}/transaction/${slug}`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
            data: data
        }).then((response) => {
            toast(`${response.data.message}`, 3000, 'green')
            dispatch({
                type: 'CREATE_TRANSACTION',
                payload: response.data.data
            })
        }).catch(error => toast(`${error.response.data.message}`))
    }
}

export const updateTransaction = (data) => {
    const token = localStorage.getItem("accessToken");
    console.log(data)
    return (dispatch) => {
        axios({
            method: 'PUT',
            url: `${BASE_URL}/transaction/${data.status}/${data.id}`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((response) => {
            dispatch({
                type: 'UPDATE_TRANSACTION',
                payload: response.data.data
            })
        }
        ).catch(error => console.log(error))
    }
}