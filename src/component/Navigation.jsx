import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseCircle } from "react-icons/io5";
import { Link } from "react-scroll";
import { Link as Links} from "react-router-dom" ;
import { useState } from "react";

function Navigation() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toogleNavbar = () => {
    setIsNavOpen(!isNavOpen)
  }

  return (
    <>
      <div className="bg-white px-2 py-3 rounded-lg flex flex-row justify-between items-center h-12 md:h-16 lg:h-18">
        <button className="block md:hidden" onClick={toogleNavbar}>
          <GiHamburgerMenu size={20}/>
        </button>
        <div className="flex-row justify-evenly w-1/2 hidden md:flex">
          <Links to={"/"}><h4 className="text-lg font-semibold font-jof">Home</h4></Links>
          <Link to="about" spy={true} smooth={true}><h4 className="text-lg font-semibold font-jof">About</h4></Link>
          <Link to="feature" spy={true} smooth={true}><h4 className="text-lg font-semibold font-jof">Features</h4></Link>
        </div>
        <Links to={"/"}>
          <div className="flex flex-row items-center scale-105 gap-1 bg-white rounded-lg py-3 px-2 w-32 justify-center md:scale-110 lg:scale-125">
              <img src="img-logo.png" alt="" className="w-10 object-cover"/>
              <div className="font-jof font-bold text-xs">
                  <h4>UTY</h4>
                  <h4>CREATIVE</h4>
                  <h4>HUB</h4>
              </div>
          </div>
        </Links>
        <div className="flex-row justify-evenly w-1/2 hidden md:flex">
          <Link to="ui" spy={true} smooth={true}><h4 className="text-lg font-semibold font-jof">Screenshot</h4></Link>
          <Links to={"/article"}><h4 className="text-lg font-semibold font-jof">Blog</h4></Links>
        </div>
        <h3 className="bg-blue-0 px-2 py-3 font-jof font-bold text-[8px] text-white rounded-md md:text-base lg:text-lg">DOWNLOAD</h3>
      </div>
      {isNavOpen && (
        <div className="flex flex-col font-jof font-bold bg-white text-black text-lg absolute top-0 left-0 z-50 w-full h-full py-10 px-12">
          <div onClick={toogleNavbar} className="flex flex-col items-end"><IoCloseCircle size={32} color="#5956E9"/></div>
          <Links to={"/"} onClick={toogleNavbar}><h4>Home</h4></Links>
          <Link to="about" spy={true} smooth={true} onClick={toogleNavbar}><h4>About</h4></Link>
          <Link to="feature" spy={true} smooth={true} onClick={toogleNavbar}><h4>Features</h4></Link>
          <Link to="ui" spy={true} smooth={true} onClick={toogleNavbar}><h4>Screenshot</h4></Link>
          <Links to={"/article"} onClick={toogleNavbar}><h4>Blog</h4></Links>
        </div>
      )}
    </>
  )
}

export default Navigation