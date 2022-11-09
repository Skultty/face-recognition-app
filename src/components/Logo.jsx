import Tilt from 'react-parallax-tilt';
import logo from '../assets/face.png';

const Logo = () => {
    return (
        <Tilt className="h-28 w-28 flex justify-center items-center mt-5 ml-5 shadow-xl bg-gradient-to-r from-blue-500 to-indigo-700">
            <img src={logo} alt="logo" className="w-2/3 shadow-2xl" />  
        </Tilt>
    );
}

export default Logo;