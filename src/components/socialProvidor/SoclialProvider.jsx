
import google from '../../assets/icons/google 1.svg'
import { FaGithub } from "react-icons/fa";


const SoclialProvider = () => {
    return (
        <div className='space-x-6 py-6'>
            <button className='p-3 bg-dark-6 rounded-full'><img src={google} alt="" /></button>
            <button className='p-3 text-xl bg-dark-6 rounded-full'><FaGithub /></button>
        </div>
    );
};

export default SoclialProvider;