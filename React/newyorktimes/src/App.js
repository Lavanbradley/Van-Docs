import './App.css';
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ShowArticles from './pages/ShowArticles';
import Navbar from './navComponents/Navbar';
import SearchForm from './navComponents/SearchForm';








const App = () => {
  const [articles, setArticles] = useState([]);
  const [term, setTerm] = useState('everything')
  
  



  // useEffect(() => {
  //   const fetchArticles = async () => {
  //     try {

  //       const res = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=qTMD0TblA7XarXAkxL1ZWtnc2DSvOtfY`
  //       )
  //       const articles = await res.json()
  //       console.log(articles);
  //       setArticles(articles.response.docs)
    
  //     } catch (error) {
  //       console.log(error);
  //     }

  //   }

  //   fetchArticles();
  // }, [term])


  const newsArticles = articles.map((article) => {
    return <ShowArticles
   
      key={article._id}
      abstract={article.abstract}
      lead_paragraph={article.lead_paragraph}
      news_desk={article.news_desk}
      section_name={article.section_name}
      web_url={article.web_url}
      word_count={article.word_count}
      headline={article.headline.main}
      byline={article.byline.original}


    />
  })

return(
  <Router>
  <>
<Navbar/>
<div className="showcase">

        </div>

        <Switch>
          <Route exact path="/">
            <div className="overlay ">
              <h1 >Viewing articles about {term}</h1>
              <SearchForm searchText={(text) => setTerm(text)} />


              <div >
                {newsArticles} 
              </div>

            </div>
          </Route>
        </Switch> 
  </>
  </Router>
)






}

export default App;
