import axios from 'axios';

type PropsType = {
    url: string,
    method: any,
    data?: object
}

const { REACT_APP_API_KEY, REACT_APP_API_URL } = process.env

const request = (props: PropsType) => {
    return axios.request({
        url: `${REACT_APP_API_URL}${props.url}&api_key=${REACT_APP_API_KEY}`,
        method: props.method,
        data: props.data
    });
}

export default request