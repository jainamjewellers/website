import axios from 'axios';

export async function getPrice() {
    try {
        let requestOptions = {
            method: 'get',
            url: '/api/price',
            timeout: 1000
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
            timeout: 4000
        }
        let result = await axios(requestOptions);
        //console.log("result.data",result.data)
       return result.data
    } catch (error) {
        return { objects: [] }
    }
}

export async function getPriceDirect() {
    try {
        let requestOptions = {
            method: 'get',
            url: 'https://data-asg.goldprice.org/dbXRates/USD,INR',
            timeout: 4000
        }
        let result = await axios(requestOptions);
        //console.log("result.data",result.data)
       return result.data
    } catch (error) {
        return { objects: [] }
    }
}