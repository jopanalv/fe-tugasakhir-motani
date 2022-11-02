import axios from 'axios';
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
        }).catch(error => console.log(error));
    };
}
