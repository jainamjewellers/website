const request = require('postman-request');

const handler = async (req, res) => {
    if (req.method == 'GET') {
        let data = await apiCall()
        //console.log("data",data)
        res.json(data);
    } else {
        res.json({ "status": false, "message": "invalid request" })
    }
}

async function apiCall(req) {
    let result
    try {
        let result = await request('https://data-asg.goldprice.org/dbXRates/USD,INR', function (error, response, body) {
        });
        //console.log(result)
        return result
    } catch (error) {
        return error
    }
}

export default handler;