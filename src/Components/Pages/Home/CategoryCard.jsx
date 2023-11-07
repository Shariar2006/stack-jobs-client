/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const CategoryCard = ({categoryCard}) => {

    const { _id,name, jobTitle, deadline, salary, postDate, photo } = categoryCard || {}
    
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl mb-5">
                <figure><img className="p-2 h-60 rounded-lg" src={photo} alt="Job Photo" /></figure>
                <div className="card-body">
                    <h1 className="text-2xl font-bold ">{name}</h1>
                    <hr />
                    <h2 className="text-xl font-bold">Job Name: {jobTitle}</h2>

                        <p className="text-lg font-semibold">Salary: {salary}</p>
                    <div className="text-base font-semibold">
                        <p>Posted Date: {postDate}</p>
                        <p>Application Deadline: {deadline}</p>
                        <p>Applicants Number: 0</p>
                    </div>
                    <div className="">
                        <Link to={`/job/details/${_id}`} className="w-full bg-[#FFC501] py-2 px-4 rounded-md">Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;