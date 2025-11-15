import { Link } from 'react-router-dom';
import errorImage from '../assets/images/404/404.gif';

const Errorpage = () => {
    return (
        <div className='mx-6 md:mx-32'>

            <img className='w-full' src={errorImage} alt="" />
        </div>
    );
};

export default Errorpage;