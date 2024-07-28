import { FaYoutube, FaFacebookF, FaTwitter  } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoSend } from "react-icons/io5";
import { Link } from "react-scroll";
import { Link as Links} from "react-router-dom" ;

function Footer() {
  return (
    <div className="bg-[#232233] font-jof text-white px-4 py-8 flex flex-col gap-8 md:flex-row ">
        <div className="md:w-1/3">
            <Link to={"/"}>
                <div className="flex flex-row items-center gap-1 rounded-lg py-3 px-2">
                    <img src="img-logo.png" alt="" className="w-10 object-cover"/>
                    <div className="font-jof font-bold text-xs">
                        <h4>UTY</h4>
                        <h4>CREATIVE</h4>
                        <h4>HUB</h4>
                    </div>
                </div>
            </Link>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.</p>
            <div className="flex flex-row gap-4">
                <FaFacebookF color="#5956E9" size={20}/>
                <h2>|</h2>
                <AiFillInstagram color="#FFFFFF" size={20}/>
                <h2>|</h2>
                <FaTwitter color="#FFFFFF" size={20}/>
                <h2>|</h2>
                <FaYoutube color="#FFFFFF" size={20}/>
            </div>
        </div>
        <div className="flex flex-col gap-2 md:w-1/5">
            <h1 className="font-black text-lg">QUICK LINK</h1>
            <div>
                <Links to={"/"}><h4>Home</h4></Links>
                <Link to="about" spy={true} smooth={true}><h4>About</h4></Link>
                <Link to="feature" spy={true} smooth={true}><h4>Features</h4></Link>
                <Link to="ui" spy={true} smooth={true}><h4>Screenshot</h4></Link>
                <Links to={"/article"}><h4>Blog</h4></Links>
            </div>
        </div>
        <div className="md:w-1/3">
            <h1 className="font-black text-lg">NEWS LETTER</h1>
            <h3>Subscribe our newsletter to get our latest update & news</h3>
            <div className="bg-white w-full pl-4 pr-2 py-2 rounded-lg flex flex-row justify-between">
                <input type="text" placeholder="Your email adress" className="text-black"/>
                <div className="px-3 py-3 bg-blue-0 rounded-sm">
                    <IoSend />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer