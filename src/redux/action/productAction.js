import axios from 'axios';
import { BASE_URL } from '../../utils/baseUrl';
import jwtDecode from 'jwt-decode';

export const addProduct = (data) => {
    const token = localStorage.getItem("accessToken");
    const user = jwtDecode(token);
    return (dispatch) => {
        axios({
            method: 'POST',
            url: `${BASE_URL}/products`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
            data: data
        }).then((response) => {
            dispatch({
                type: 'ADD_PRODUCT',
                payload: response.data.data
            })
        }).catch(error => console.log(error))
    }
}

export const getProducts = () => {
    const token = localStorage.getItem("accessToken");
    return (dispatch) => {
        axios({
            method: 'GET',
            url: `${BASE_URL}/products`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((response) => {
            // console.log(response.data.data)
            dispatch({
                type: 'GET_PRODUCTS',
                payload: response.data.data
            })
        }).catch(error => console.log(error))
    }
}

export const getProductById = (slug) => {
    return (dispatch) => {
        axios({
            method: 'GET',
            url: `${BASE_URL}/products/${slug}`
        }).then((response) => {
            // console.log(response.data.data)
            dispatch({
                type: 'GET_PRODUCT_BY_ID',
                payload: response.data.data
            })
        }).catch(error => console.log(error))
    }
}

export const updateProduct = (data, slug) => {
    const token = localStorage.getItem("accessToken");
    return (dispatch) => {
        axios({
            method: 'PUT',
            url: `${BASE_URL}/products/${slug}`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
            data: data
        }).then((response) => {
            console.log(response.data)
        }).catch(error => console.log(error))
    }
}

export const deleteProduct = (id) => {
    const token = localStorage.getItem("accessToken");
    return (dispatch) => {
        axios({
            method: 'DELETE',
            url: `${BASE_URL}/products/${id}`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((response) => {
            console.log(response.data)
        }).catch(error => console.log(error))
    }
}