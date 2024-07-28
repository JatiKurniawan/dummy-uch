

function Hero() {
  return (
    <div className="relative border-[#7572FF] border-[10px] h-[420px] mx-auto w-[300px] sm:scale-110 md:mt-12 md:w-full md:h-[420px] lg:h-[460px] xl:h-[400px]" id="hero">
        <div className="h-fit bg-white absolute top-4 -left-8 w-[260px] px-4 py-6 font-jof md:w-full lg:px-6 lg:py-8">
            <h1 className="text-blue-0 font-black text-xl lg:text-2xl">EMPOWERING YOUR CREATIVITY, ONE ROOM AT A TIME.</h1>
            <p className="text-gray-0 text-sm mt-4 lg:text-lg">UTY Creative Hub adalah aplikasi inovatif yang memungkinkan mahasiswa Universitas Teknologi Yogyakarta untuk membooking ruangan di gedung UTY Creative Hub secara gratis.</p>
            <div className="mt-8 font-jof flex flex-col gap-0 items-start mb-4">
                <h2 className="font-bold text-sm lg:text-lg">DOWNLOAD APP NOW</h2>
                <img src="img-play.png" alt="" className="w-24 lg:w-40"/>
            </div>
        </div>  
    </div>
  )
}

export default Hero
