import React from 'react'
import Search from './Search'
function GiphySearch() {
  return (
    <div className="App">
      <h1 className="appHeader">Search For A Gif!</h1>
      <Search initialQuery='cat'/>
    </div>
  )
}

export default GiphySearch
