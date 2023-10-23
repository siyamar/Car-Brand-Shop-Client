import { Link } from "react-router-dom";
import error from "../../assets/404/404.gif"

const Error = () => {
    return (
        <div className='text-center relative'>
            <img className="top-[20px] left-[350px] absolute" src={error} alt="" />
            <Link to={'/'}><button className="btn btn-error text-xl font-bold top-[550px] left-[700px] absolute">Go Back</button></Link>
        </div>
    );
};

export default Error;