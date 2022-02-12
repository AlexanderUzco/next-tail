import Navbar from "@components/Layout/Navbar";
import CustomImage from "@components/CustomImage/CustomImage";
import logo from '../../public/images/logo.svg';

const Header = () => {
    return(
        <div className="w-full bg-lime-300 flex justify-between p-1 items-center sticky top-0 z-10">
            <div className="
                flex 
                items-center 
                text-2xl 
                font-bold 
                font-mono 
                bg-gradient-to-r 
                from-amber-700 
                to-amber-500
                bg-clip-text
                text-transparent
                tracking-tight 
                italic 
            ">
                <CustomImage
                    src={logo}
                    alt={'Avocado logo'}
                    className="
                        w-10
                        h-10
                    "
                />
                <p>AvoApp</p>
            </div>
            <Navbar/>
        </div>
    )
}

export default Header;