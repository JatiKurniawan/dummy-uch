/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Navigation from "../component/Navigation";
import Footer from "../component/Footer";
import { IoMdStopwatch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import "../style/index.css";

function Article({ data }) {
  const location = useLocation();
  const { slug } = useParams();
  const [dataArticle, setDataArticle] = useState(data);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const locationArticle = location.state.currentArticles || {};
    const combinedArticle = { ...data, ...locationArticle };
    setDataArticle(combinedArticle);
  }, [location.state.currentArticles, data]);

  const article = data.find((article) => article.slug === slug);

  if (!article) {
    return <div>No article found</div>;
  }

  return (
    <div className="flex flex-col gap-8" id="blog">
      <div className="bg-main bg-cover px-4 pt-6 pb-8 flex flex-col gap-12">
        <Navigation />
        <h1 className="font-jof font-black text-xl text-white text-center">{article.title}</h1>
      </div>
      <div className="flex flex-col px-6">
        <div className="flex flex-col gap-8">
          <img src={article.urlToImage} alt="" className="rounded-xl" />
          <div className="flex flex-row justify-evenly">
            <div className="flex flex-row gap-2">
              <IoMdStopwatch size={20} color="#6C6C72" />
              <h3>{new Date(article.publishedAt).toLocaleDateString()}</h3>
            </div>
            <div className="flex flex-row gap-2">
              <FaRegUser size={20} color="#6C6C72" />
              <h3>{article.author}</h3>
            </div>
          </div>
          <p>{article.description}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Article;
