import axios from 'axios'
import config from '../../config.json'
import {google} from 'googleapis'
import googleMapReact from 'google-map-react'

const handler = async (req, res) => {
    if (req.method == 'POST') {
      let array = req.body
      console.log("array",array)
      let data = await apiCall(array)
      res.json(data);
    } else {
      res.json({ "status": false, "message": "invalid request" })
    }
  }

  async function apiCall(array) {
    let geturl = ""
    const auth = new google.auth.GoogleAuth({
      keyFile: "google.json",
      scopes: "https://www.googleapis.com/auth/spreadsheets"
    })
    const client = await auth.getClient()


    const googleSheets = google.sheets({version:"v4",auth:client})
    const spreadsheetId = "1g3zU2MsUcHfRQLDVdNd49ZLK2Nxo1hWE5swV7u3Myqg"
    // get sheet data

    const metaData = await googleSheets.spreadsheets.get({
      auth,
      spreadsheetId
    
    })

    const getRows = await googleSheets.spreadsheets.values.get({
      auth,
      spreadsheetId,
      range:"Sheet1",
    })

    await googleSheets.spreadsheets.values.append({
      auth,
      spreadsheetId,
      range:"Sheet1!A:D",
      valueInputOption:"USER_ENTERED",
      resource:{
        values:[
          array
        ]
      }
    })

    try {
      return getRows.data
    } catch (error) {
      return { objects: [] }
    }
  }

export default handler;