import service from '../../../assets/images/products/1.png'
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = () => {
    return (
        <div className='p-8 border rounded-md'>
            <img className='rounded-md bg-red w-full object-cover' src={service} alt="" />
            <h2 className='text-2xl font-bold pt-4 text-dark-2'>Electrical System</h2>
            <div className='font-semibold text-xl text-red flex items-center justify-between pt-3'>
                <h2>Price : $20.00</h2>
                <FaArrowRight />
            </div>
        </div>
    );
};

export default ServiceCard;