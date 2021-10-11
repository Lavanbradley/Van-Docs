import React from 'react'
import './pages.css'
function Home() {
  return (
    <div className="home">
     <h2 className="homeH2">This App is dedicated to show my ability to get data from external API's</h2> 
     <p className="homeH2p homeUnder">Inside the hamburger menus are my examples</p>
     <p className="homeH2p">1) My first example is called News Search. I am using the New York Times API to display new article to the browser. I also have a search feature attached. Give it a try!</p>
     <a href="/newsSearch" className="homeLinks homeUnder">News Search</a>
     <p className="homeH2p">2) In my second example I am using Axios to fetch data from the Breaking Bad API. I am also displaying the response data to the browser using some neat CSS tricks. </p>
     <a href="breakingBad" className="homeLinks homeUnder">Breaking Bad</a>
     <p className="homeH2p">3) In my third example I am using the Giphy API to display Gif's to the browser. There is also a search feature. Search for a random GIF! </p>
     <a href="giphy" className="homeLinks homeUnder">Giphy Search</a>
    </div>
  )
}

export default Home
