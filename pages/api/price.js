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
    var d = new Date();
    var n = d.getTime();
    //console.log(n)
    let geturl = `http://spngoldlivebroadcast.noip.us:8888/VOTSBroadcast/Services/xml/a/%20mumbai?_=${n}`
    try {
      let requestOptions = {
        method: 'get',
        url: geturl,
        timeout: 1000
      };
      let result = await axios(requestOptions);
      let split_array =  result.data.split("|")
      let mumbai = split_array[3].split(",")
      let mumbai_999 = mumbai[3]
      //console.log(mumbai_999)
      //return result.data.toString().replace(/.*?({.*}).*/, "$1")
      return mumbai_999
    } catch (error) {
      return { objects: [] }
    }
  }

export default handler;