const Hero = () => {
    return ( 
        <div className="container mx-auto flex px-5 md:py-24 md:flex-row flex-col items-center relative pt-40">
            {/* body hero */}
            <div className="lg:flex-grow md:w-1/2 lg:pr-32 md:pr-16 md:pb-0 flex flex-col md:items-start md:text-left items-center text-center pb-5">
                {/* text */}
                <h1 className="lg:text-6xl text-5xl mb-4 font-medium">Lorem ipsum dolor sit amet</h1>
                <p className="mb-8 leading-relaxed text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra tortor ut consequat ornare. Nulla congue auctor
                </p>
                {/* Buttons */}

                <div className="flex xl:flex-row md:flex-col flex-wrap w-full justify-center xl:justify-start gap-10 md:gap-0">
                    <button className="btn-download">
                        <img src="logo_windows.png" alt="logo-windows" className="w-10 h-10"/>
                        <span className="ml-4 flex items-start flex-col leading-none text-white">
                            <span className="text-xs uppercase">Instalar en</span>
                            <span className="font-medium text-xl">Windows</span>
                        </span>
                    </button>
                    <button className="btn-download xl:ml-4 md:mt-4 mt-0 xl:mt-0">
                        <img src="apple-logo.png" alt="logo-windows" className="w-10 h-10"/>
                        <span className="ml-4 flex items-start flex-col leading-none text-white">
                            <span className="text-xs uppercase">Instalar en</span>
                            <span className="font-medium text-xl">Mac Os</span>
                        </span>
                    </button>
                </div>
            </div>

            {/* Img */}
            <div className="hidden md:block lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <img src="image_hero1.png" alt="hero1" className="object-cover object-center rounded"/>
            </div>

            {/* SVG */}
            <img src="image_hero2.svg" className="hidden md:block absolute right-0 xl:w-1/2 lg:w-[60%] md:w-[55%] -z-10"/>
        </div>
     );
}
 
export default Hero;