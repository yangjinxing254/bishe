import {baseUrl} from './env'

export default async (url = '', data = {}, type = 'GET', method = 'fetch') => {
    type = type.toUpperCase();
    url = baseUrl + url;
    let requestConfig;
    if (type === 'POST' && localStorage.getItem('token')) {
        requestConfig = {
            method: type,
            headers: {
                "Content-type": "application/json; charset=utf-8",
                Authorization: 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify(data)
        }
    } else {
        requestConfig = {
            method: type,
            headers: {
                "Content-type": "application/json; charset=utf-8",
            },
            body: JSON.stringify(data)
        }
    }
    try {
        const response = await fetch(url, requestConfig);
        const responseJson = await response.json();
        return responseJson
    } catch (error) {
        throw new Error(error)
    }
}
