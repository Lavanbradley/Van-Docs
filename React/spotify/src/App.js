import React, {useEffect, useState} from 'react'
import axios from 'axios';
import './App.css';

function App() {
const [token, setToken] = useState('');
const [tracks, setTracks] = useState([]);
const id = '06HL4z0CvFAxyc27GXpf02';
	const market = 'US';

useEffect(()=>{

  // Api call for retrieving token
  axios('https://accounts.spotify.com/api/token', {
    'method': 'POST',
    'headers': {
       'Content-Type':'application/x-www-form-urlencoded',
       'Authorization': 'Basic ' + (new Buffer('67f4ff3a1c4f4e3fb05effd902609907' + ':' + '5bf81f411da145d59ebb87e228170eb8').toString('base64')),
    },
    data: 'grant_type=client_credentials'
  }).then(tokenresponse => {
    console.log(tokenresponse.data.access_token);
    setToken(tokenresponse.data.access_token);

    // Api call for retrieving tracks data
    axios(`https://api.spotify.com/v1/artists/${id}/top-tracks?market=${market}`,{
      'method': 'GET',
      'headers': {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + tokenresponse.data.access_token
      }
    }).then(trackresponse=> {
      console.log(trackresponse.data.tracks);
      setTracks(trackresponse.data.tracks);
    }).catch(error=> console.log(error))
  }).catch(error => console.log(error));
},[])

  return (
    <div className="App">
     
    </div>
  );
}

export default App;
