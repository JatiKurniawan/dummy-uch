/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";

function Blog({ dataBlog }) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextReview = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 3) % dataBlog.length)
    }

    const previousReview = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 3 + dataBlog.length) % dataBlog.length)
    }

    const currentArticles = dataBlog.slice(currentIndex, currentIndex + 3).concat(dataBlog.slice(0, Math.max(0, currentIndex + 3 - dataBlog.length)))

    const showArticle = currentArticles.map((article, index) => (
        <div key={index} className="bg-white shadow-xl rounded-t-lg text-start flex flex-col gap-4 md:w-1/3">
            <img src={article.urlToImage} alt={article.title} className="rounded-t-xl h-full object-cover"/>
            <div className="px-4 pb-8 flex flex-col gap-4 md:hidden lg:block">
                <h2 className="font-bold text-lg">{article.title}</h2>
                <p>{article.description}</p>
                <Link to={`/article/${article.slug}`} className="text-blue-0">Read more</Link>
            </div>
        </div>
    ))

    return (
        <div className="bg-white px-6 py-10 flex flex-col gap-4 font-jof text-center text-black mt-16">
            <h1 className="text-2xl font-black">OUR RECENT BLOG</h1>
            <p className="text-gray-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae.</p>
            <div className="flex flex-col gap-6">
                <div className="flex flex-col md:flex-row gap-8">{ showArticle }</div>
                <div className="flex flex-row justify-evenly text-white font-bold"> 
                    <button onClick={previousReview} className="bg-blue-0 px-4 py-2 rounded-md">Previous</button>
                    <button onClick={nextReview} className="bg-blue-0 px-4 py-2 rounded-md">Next</button>
                </div>
            </div>
        </div>
    )
}

export default Blog
