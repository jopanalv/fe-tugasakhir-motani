import axios from 'axios';
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

export const createTransaction = (data) => {
    const token = localStorage.getItem("accessToken");
    return (dispatch) => {
        axios({
            method: 'POST',
            url: `${BASE_URL}/transaction/${data.slug}`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
            data: {
                'offer_price': data.offer,
                'start_rent': data.start,
                'duration': data.duration,
            }
        }).then((response) => {
            dispatch({
                type: 'CREATE_TRANSACTION',
                payload: response.data.data
            })
        }).catch(error => console.log(error))
    }
}
