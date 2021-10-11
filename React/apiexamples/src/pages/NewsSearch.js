import React, { useState, useEffect } from 'react'
import ShowArticles from './ShowArticle';
import SearchForm from './SearchForm';
function NewsSearch() {
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





  return (
    <>
    <h1 className="newsH1">SEARCH ANY TOPIC</h1>
    <SearchForm searchText={(text) => setTerm(text)} />
    <div>
      {newsArticles}
    </div>
  </>
  )
}

export default NewsSearch
