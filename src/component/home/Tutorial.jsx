

function Tutorial() {
  return (
    <div className="bg-main bg-cover flex flex-col items-center font-jof px-6 py-10 gap-6 text-white text-center relative h-[350px] sm:h-[450px] md:h-[520px] lg:h-[640px] xl:h-[720px] ">
        <h1 className="font-black text-xl lg:text-3xl">HOW TO USE OUR APP PERFECTLY</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae.</p>
        <iframe src="https://www.youtube.com/embed/s2skans2dP4" className="aspect-video w-5/6 absolute -bottom-16 lg:w-4/6"></iframe>
    </div> 
  )
}

export default Tutorial