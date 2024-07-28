import { FaCheckCircle } from "react-icons/fa";

function About() {
    const listData = [
        {
            head: "Creative design",
            text: "Tampilan yang inovatif dan menarik, dirancang untuk menginspirasi dan mendukung kreativitas Anda setiap kali menggunakan aplikasi."
        },
        {
            head: "easy to use",
            text: "Antarmuka yang intuitif dan sederhana, memungkinkan Anda untuk membooking ruangan dengan cepat dan tanpa kesulitan."
        },
        {
            head: "Best user experince",
            text: "Pengalaman pengguna yang optimal dengan navigasi yang mudah dan fitur-fitur yang memudahkan penggunaan aplikasi bagi semua kalangan mahasiswa."
        },
    ]

    const showListData = listData.map((data, index) => (
        <div key={index} className="flex flex-row gap-1 justify-evenly items-start bg-white shadow-md px-4 py-6 rounded-lg">
            <FaCheckCircle color="#5956E9" size={20}/>
            <div className="w-5/6">
                <h4 className="uppercase font-bold text-md lg:text-lg">{ data.head }</h4>
                <p className="lg:text-lg">{ data.text }</p>
            </div>
        </div>
    ))
    return (
        <div className="font-jof flex flex-col items-center px-6 py-10 gap-4" id="about">
            <h1 className="text-xl font-black lg:text-3xl">ABOUT OUR APP</h1>
            <p className="text-sm text-center w-5/6 text-gray-0 md:text-base lg:text-lg">UTY Creative Hub adalah aplikasi inovatif yang memungkinkan mahasiswa Universitas Teknologi Yogyakarta untuk membooking ruangan di gedung UTY Creative Hub secara gratis. Kini, Anda dapat dengan mudah menemukan dan memesan ruangan sesuai kebutuhan Anda dengan aplikasi yang tersedia di Google Playstore.</p>
            <div className="flex flex-col gap-4 items-center md:flex-row">
                <img src="img-phone-stack.png" alt="" className="w-4/6"/>
                <div className="flex flex-col gap-4">{ showListData }</div>
            </div>
        </div>
    )
}

export default About