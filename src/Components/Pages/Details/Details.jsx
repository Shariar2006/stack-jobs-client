import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../AuthContext/AuthProvider";

const Details = () => {
    const { user } = useContext(AuthContext)

    const [jobCard, setJobCard] = useState()
    const [jobDataLoad, setJobDataLoad] = useState()
    const { id } = useParams()

    useEffect(() => {
        axios.get('http://localhost:5000/allJobs')
            .then(res => {
                setJobDataLoad(res.data)
            })
    }, [])

    useEffect(() => {
        const findJobData = jobDataLoad?.find(jobData => jobData._id == id)
        setJobCard(findJobData)
    }, [id, jobDataLoad])



    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl mb-5">
                <figure><img className="p-2 w-full h-[90vh] rounded-lg" src={jobCard?.photo} alt="Job Photo" /></figure>
                <div className="card-body">
                    <h1 className="text-2xl font-bold ">{jobCard?.name}</h1>
                    <hr />
                    <h2 className="text-xl font-bold">Job Name: {jobCard?.jobTitle}</h2>

                    <p className="text-base text-gray-600 font-semibold"> {jobCard?.description}</p>
                    <p className="text-lg font-semibold">Salary: {jobCard?.salary}</p>
                    <div className="text-base font-semibold flex">
                        <p>Posted Date: {jobCard?.postDate}</p>
                        <p>Application Deadline: {jobCard?.deadline}</p>
                        <p>Applicants Number: 0</p>
                    </div>
                    <div>
                        {
                            user?.email == jobCard?.userEmail ?
                                <button
                                    disabled={true}
                                    className="btn bg-[#FFC501] hover:bg-[#04396F] text-[#04396F] hover:text-[#FFC501] text-xl font-bold pt-2 pb-3 rounded-md"
                                >Apply this job</button>
                                :
                                <button
                                    className="btn bg-[#FFC501] hover:bg-[#04396F] text-[#04396F] hover:text-[#FFC501] text-xl font-bold pt-2 pb-3 rounded-md"
                                >Apply this job</button>
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Details;