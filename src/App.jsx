import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from "axios";
import { useState, useEffect } from "react";
import slugify from "slugify";
import Home from './pages/Home';
import Blog from './pages/Blog';
import Article from './pages/Article';

function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const dataBlog = async () => {
    try {
        const response = await axios.get(
            'https://newsapi.org/v2/everything?q=indonesia&sortBy=popularity&sortBy=publishedAt&language=id&apiKey=851bd66278d3495b9de648b3d272a89b'
        )
        const filteredArticles = response.data.articles.filter((article) => article.urlToImage)
        
        const articlesWithSlugs = filteredArticles.map((article) => ({
            ...article,
            slug: slugify(article.title, { lower: true, strict: true })
        }));
        
        setData(articlesWithSlugs)
    } catch (error) {
        console.log("error", error)
    } finally {
        setLoading(false)
    }
  }

  useEffect(() => {
      dataBlog()
  }, [])

  if (loading) {
      return <div>Loading...</div>
  }
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home dataBlog={data}/>} />
          <Route exact path="/article" element={<Blog dataBlog={data}/>} />
          <Route exact path="/article/:slug" element={<Article data={data}/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
