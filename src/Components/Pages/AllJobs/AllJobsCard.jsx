/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const AllJobsCard = ({ jobsCard }) => {
    console.log(jobsCard)
    const { _id,name, jobTitle, deadline, salary, postDate, photo } = jobsCard || {}


    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl mb-5">
                <figure><img className="p-2 rounded-lg" src={photo} alt="Job Photo" /></figure>
                <div className="card-body">
                    <h1 className="text-2xl font-bold ">{name}</h1>
                    <hr />
                    <h2 className="text-xl font-bold">Job Name: {jobTitle}</h2>

                        <p className="text-lg font-semibold">Salary: {salary}</p>
                    <div className="text-base font-semibold">
                        <p>Posted Date: {postDate}</p>
                        <p>Application Deadline: {deadline}</p>
                    </div>
                    <div className="card-actions justify-end ">
                    <Link className="btn" to={`/job/details/${_id}`}>Job Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllJobsCard;