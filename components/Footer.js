import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {FaFacebookF ,FaTwitter , FaInstagram , FaLinkedinIn} from 'react-icons/fa'

const Footer = () => {
    return ( 
        <footer className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700">
            <div className="container mx-auto px-5 py-8 flex items-center">
                <div className="w-full flex justify-center gap-10">

                <a href="" className="text-white cursor-pointer">
                    <FaFacebookF className="text-2xl"/>                    
                </a>
                <a href="" className="text-white cursor-pointer">
                    <FaTwitter className="text-2xl"/>
                </a>
                <a href="" className="text-white cursor-pointer">
                    <FaInstagram className="text-2xl"/>
                </a>
                <a href="" className="text-white cursor-pointer">
                    <FaLinkedinIn className="text-2xl"/>                    
                </a>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;