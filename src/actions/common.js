import axios from 'axios';

export async function getPrice() {
    try {
        let requestOptions = {
            method: 'get',
            url: '/api/price',
        }
        let result = await axios(requestOptions);
        //console.log("result.data",result.data)
       return result.data
    } catch (error) {
        return { objects: [] }
    }
}

export async function getPrice2() {
    try {
        let requestOptions = {
            method: 'get',
            url: '/api/price2',
        }
        let result = await axios(requestOptions);
        //console.log("result.data",result.data)
       return result.data
    } catch (error) {
        return { objects: [] }
    }
}