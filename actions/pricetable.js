
import axios from 'axios';

export async function getPortalPrices() {
    const url = `https://portal.jainamjewellers.in/api/prices`
    try {
        let requestOptions = {
            method: 'get',
            url: url,
            timeout: 1000
        }
        let result = await axios(requestOptions);
        //console.log("result.data",result.data)
       return result.data
    } catch (error) {
        return { objects: [] }
    }
}

export async function getBasePrice(arg) {
    try {
        let requestOptions = {
            method: 'get',
            url: `https://portal.jainamjewellers.in/api/${arg}`,
            timeout: 10000
        }
        let result = await axios(requestOptions);
        //console.log("result.data",result.data)
       return result.data
    } catch (error) {
        return { objects: [] }
    }
}