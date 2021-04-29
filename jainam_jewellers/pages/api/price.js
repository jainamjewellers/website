import axios from 'axios'

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
    let geturl = "https://www.bullionvault.com/view_market_json.do?callback=jQuery35105053285641317669_1619715961271&marketWidth=1&securityId=AUXZU&considerationCurrency=USD"
    try {
      let requestOptions = {
        method: 'get',
        url: geturl
      };
      let result = await axios(requestOptions);
      return result.data.toString().replace(/.*?({.*}).*/, "$1")
    } catch (error) {
      return { objects: [] }
    }
  }

export default handler;