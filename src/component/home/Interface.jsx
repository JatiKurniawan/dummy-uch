

function Interface() {

    const recapData = [
        {
            img: "icon-download.png",
            number: "59865",
            category: "Download"
        },
        {
            img: "icon-like.png",
            number: "29852",
            category: "Like"
        },
        {
            img: "icon-star.png",
            number: "1500",
            category: "5 Star Rating"
        }
    ]

    const showRecapData = recapData.map((data, index) => (
        <div key={index} className="bg-blue-0 flex flex-col items-center w-1/3 justify-evenly rounded-md text-white py-4">
            <img src={ data.img } alt="" className="w-6"/>
            <h3 className="font-bold text-lg">{ data.number }</h3>
            <h4 className="text-sm">{ data.category }</h4>
        </div>
    ))
    return (
        <div className="bg-white px-6 py-10 flex flex-col gap-4 font-jof text-center items-center text-black" id="ui">
            <h1 className="text-xl font-black lg:text-3xl">Checkout Our <br></br>App Interface Look</h1>
            <p className="text-gray-0 w-5/6">Lihat sekilas antarmuka aplikasi UTY Creative Hub yang dirancang khusus untuk memudahkan pengalaman Anda dalam membooking ruangan. Dengan desain yang kreatif dan user-friendly, aplikasi ini memastikan bahwa setiap langkah, mulai dari pencarian hingga pembookingan, menjadi lebih cepat dan mudah. Mari jelajahi tampilan antarmuka yang menarik dan intuitif ini!</p>
            <div className="flex flex-col mt-16 gap-12 items-center md:flex-row">
                <div className="flex flex-col gap-6 items-start md:w-1/2">
                    <h1 className="text-start font-black text-lg md:text-xl lg:text-2xl">DOWNLOAD OUR <br></br> APP</h1>
                    <p className="text-gray-0 text-start lg:text-lg">UTY Creative Hub adalah aplikasi inovatif yang memungkinkan mahasiswa Universitas Teknologi Yogyakarta untuk membooking ruangan di gedung UTY Creative Hub secara gratis.</p>
                    <img src="img-play.png" alt="" className="w-24 lg:w-40"/>
                    <div className="flex flex-row justify-evenly gap-2 self-center w-full">{ showRecapData }</div>
                </div>
                <img src="img-phone-3.png" alt="" className="w-3/5 object-contain md:w-1/2"/>
            </div>
        </div>
    )
}

export default Interface