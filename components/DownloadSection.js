const DownloadSection = () => {
    return ( 
        <div className="flex px-5 py-24 md:flex-row flex-col items-center justify-center bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700">
            <div className="hidden md:block lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <img src="firefox.png" alt="firefox-logo" className="object-cover object-center w-full rounded"/>
            </div>
            <div className="md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 className="lg:text-7xl text-6xl mb-8 font-medium text-white">Disponible para moviles</h1>
                <div className="flex md:flex-row flex-col flex-wrap gap-5 justify-center items-center">
                    <button className="btn-download">
                        <img src="google-play.png" alt="google-play" className="w-10 h-10"/>
                        <span className="ml-4 flex items-start flex-col leading-none text-white">
                            <span className="text-xs uppercase">Disponible en</span>
                            <span className="font-medium text-xl">Google Play</span>
                        </span>
                    </button>
                    
                    <button className="btn-download">
                        <img src="apple-logo.png" alt="apple-logo" className="w-10 h-10"/>
                        <span className="ml-4 flex items-start flex-col leading-none text-white">
                            <span className="text-xs">Consiguelo en</span>
                            <span className="font-medium text-xl">App Store</span>
                        </span>
                    </button>
                    
                </div>
            </div>
        </div>
     );
}
 
export default DownloadSection;