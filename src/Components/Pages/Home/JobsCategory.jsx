/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const JobsCategory = ({jobsCategory}) => {
    const {category, img} = jobsCategory

    return (
        <div>
            <Link to={`/job/${category}`}>
            <div className=" bg-base-100 shadow-xl mt-5 mr-2">
                <figure><img className="p-2 rounded-lg  w-full h-[200px]" src={img} alt="Job Photo" /></figure>
                <h1 className="text-center text-xl font-bold pb-3">{category}</h1>
            </div></Link>
        </div>
    );
};

export default JobsCategory;