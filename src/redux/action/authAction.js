import axios from 'axios';
import { BASE_URL } from '../../utils/baseUrl';
import jwtDecode from 'jwt-decode';
import toast from 'react-simple-toasts';

export const LoginUser = (data) => {
    return (dispatch) => {
        axios({
            method: 'POST',
            url: `${BASE_URL}/login`,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
            data: data,
        }).then((response) => {
            if (response.data.statusCode == 200) {
                localStorage.setItem('accessToken', response.data.accessToken)
                const token = localStorage.getItem('accessToken')
                const user = jwtDecode(token)
                toast(`${response.data.message}`, 3000, 'green')
                axios({
                    method: 'GET',
                    url: `${BASE_URL}/users/${user.id}`,
                }).then((response) => {
                    localStorage.setItem('user', JSON.stringify(response.data.data))
                    dispatch({
                        type: 'LOGIN_USER',
                    })
                }).catch(error => console.log(error))
            } else {
                toast(`${response.data.message}`, 3000, 'green')
            }
        }).catch(error => toast(`${error.response.data.message}`))
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
                payload: response.data.data
            })
            toast(`${response.data.message}`, 3000, 'green')
        }).catch(error => toast(`${error.response.data.message}`))
    }
}

export const LogoutUser = () => {
    return (dispatch) => {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('user')
        dispatch({
            type: 'LOGOUT_USER'
        })
        toast(`Logout Berhasil!`, 3000, 'green')
    }
}
