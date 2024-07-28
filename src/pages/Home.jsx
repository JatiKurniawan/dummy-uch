/* eslint-disable react/prop-types */
import { useEffect } from "react"
import Footer from "../component/Footer"
import About from "../component/home/About"
import Blog from "../component/home/Blog"
import Features from "../component/home/Features"
import Hero from "../component/home/Hero"
import Interface from "../component/home/Interface"
import Tutorial from "../component/home/Tutorial"
import Navigation from "../component/Navigation"


function Home({ dataBlog }) {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="" id="home">
            <div className="bg-main bg-cover px-4 pt-6 pb-16 flex flex-col gap-12">
                <Navigation/>
                <div className="flex flex-col gap-8 mx-24 items-center md:flex-row md:gap-24 ">
                    <div className="md:w-2/3">
                        <Hero/>
                    </div>
                    <img src="img-phone-1.png" alt="" className="w-3/5 self-center md:w-1/3" />
                </div>
            </div>
            <About />
            <Features />
            <Interface />
            <Tutorial />
            <Blog dataBlog={dataBlog}/>
            <Footer />
        </div>
    )
}

export default Home