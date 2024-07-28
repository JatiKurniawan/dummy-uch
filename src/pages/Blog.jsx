/* eslint-disable react/prop-types */
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from 'axios'
import slugify from 'slugify'
import Navigation from "../component/Navigation"
import Footer from "../component/Footer"
import { CiSearch } from "react-icons/ci";


function Blog({ dataBlog }) {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [dataArticle, setDataArticle] = useState(dataBlog)
    const [query, setQuery] = useState('')
    const [loading, setLoading] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextReview = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 7) % dataArticle.length)
    }

    const previousReview = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 7 + dataArticle.length) % dataArticle.length)
    }

    const fetchArticles = async (query) => {
        setLoading(true);
        try {
          const response = await axios.get(
            `https://newsapi.org/v2/everything?q=${query}&sortBy=popularity&sortBy=publishedAt&language=id&apiKey=851bd66278d3495b9de648b3d272a89b`
          );
          const filteredArticles = response.data.articles.filter((article) => article.urlToImage);
          const articlesWithSlugs = filteredArticles.map((article) => ({
            ...article,
            slug: slugify(article.title, { lower: true, strict: true }),
          }));
          setDataArticle(articlesWithSlugs);
        } catch (error) {
          console.error('Error fetching articles:', error);
        } finally {
          setLoading(false);
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        fetchArticles(query);
    };

    const newestArticles = dataBlog.slice(0, 5).concat(dataArticle.slice(0, Math.max(0, 5 - dataArticle.length)))
    const currentArticles = dataArticle.slice(currentIndex, currentIndex + 7).concat(dataArticle.slice(0, Math.max(0, currentIndex + 7 - dataArticle.length)))

    const showArticle = currentArticles.map((article, index) => (
        <Link to={`/article/${article.slug}`} state={{ currentArticles }} key={index}>
            <div className="bg-white shadow-lg rounded-t-lg text-start flex flex-col gap-4">
                <img src={article.urlToImage} alt={article.title} className="rounded-t-xl"/>
                <div className="px-4 pb-8 flex flex-col gap-4">
                    <h2 className="font-bold text-lg">{article.title}</h2>
                    <p>{article.description}</p>
                </div>
            </div>
        </Link>
    ))

    const showNewest = newestArticles.map((article, index) => (
        <Link to={`/article/${article.slug}`} key={index}>
            <div className="bg-white shadow-md rounded-t-lg text-start flex flex-col gap-4">
                <img src={article.urlToImage} alt={article.title} className="rounded-t-xl"/>
                <h2 className="font-semibold text-sm h-11 overflow-hidden px-2">{article.title}</h2>
            </div>
        </Link>
    ))

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex flex-col gap-8" id="blog">
            <div className="bg-main bg-cover px-4 pt-6 pb-8 flex flex-col gap-12">
                <Navigation/>
                <h1 className="font-jof font-black text-3xl text-white text-center">BLOG</h1>
            </div>
            <div className="flex flex-col gap-8 px-6 md:flex-row">
                <div className="flex flex-col gap-8 md:w-2/3">
                    <div className="flex flex-col gap-6">
                        { showArticle }
                    </div>
                    <div className="flex flex-row justify-evenly text-white font-bold"> 
                        <button onClick={previousReview} className="bg-blue-0 px-4 py-2 rounded-md">Previous</button>
                        <button onClick={nextReview} className="bg-blue-0 px-4 py-2 rounded-md">Next</button>
                    </div>
                </div>
                <div className="md:w-1/4 flex flex-col gap-4">
                    <form onSubmit={handleSearch} className="flex flex-row gap-2 py-2 px-3 border-gray-0 border-2">
                        <button type="submit"><CiSearch size={20} color="#6C6C72"/></button>
                        <input
                            type="text"
                            placeholder="Cari"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="w-32"
                        />
                    </form>
                    <h3 className="text-black text-lg font-jof font-bold">RECENT POST</h3>
                    <div className="flex flex-col gap-4">
                        { showNewest }
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Blog