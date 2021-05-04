import axios from 'axios';

export async function getCarouselImages() {
    const url = `https://portal.jainamjewellers.in/api/carousel`
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