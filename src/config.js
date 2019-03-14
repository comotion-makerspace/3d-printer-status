export default {
    apiKey: process.env.REACT_APP_API_KEY,
    discoveryDocs: 
      ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
    spreadsheetId: process.env.REACT_APP_SHEET_ID
  };