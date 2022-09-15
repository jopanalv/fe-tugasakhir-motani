import axios from 'axios';
import { BASE_URL } from '../../utils/baseUrl';
import jwtDecode from 'jwt-decode';

export const LoginUser = (data) => {
    return (dispatch) => {
        axios({
            method: 'POST',
            url: `${BASE_URL}/login`,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
            data: data
        }).then((response) => {
            localStorage.setItem('accessToken', response.data.accessToken)
            const token = localStorage.getItem('accessToken')
            const user = jwtDecode(token)
            localStorage.setItem('user', JSON.stringify(user))
            dispatch({
                type: 'LOGIN_USER',
            })
        }).catch(error => console.log(error))
    }
}

export const RegisterUser = (data) => {
    return (dispatch) => {
        axios({
            method: 'POST',
            url: `${BASE_URL}/register`,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
            data: data
        }).then((response) => {
            dispatch({
                type: 'REGISTER_USER',
            })
        }).catch(error => console.log(error))
    }
}

export const LogoutUser = () => {
    return (dispatch) => {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('user')
        dispatch({
            type: 'LOGOUT_USER'
        })
    }
}