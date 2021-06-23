import axios from 'axios';

export async function submitForm(array) {
    try {
        let requestOptions = {
            method: 'post',
            url: '/api/google',
            timeout: 1000,
            data: array
        }
        let result = await axios(requestOptions);
        //console.log("result.data",result.data)
       return result.data
    } catch (error) {
        return { objects: [] }
    }
}