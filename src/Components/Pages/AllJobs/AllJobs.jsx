import { useEffect, useState } from "react";
import axios from "axios";
import AllJobsCard from "./AllJobsCard";
import AllJobsTable from "./AllJobsTable";


const AllJobs = () => {
    const [allJobs, setAllJobs] = useState()

    useEffect(() => {
        axios.get('http://localhost:5000/allJobs')
            .then((res) => {
                setAllJobs(res.data)
            })
    }, [])

    return (
        <div>


            <div className="hidden md:block overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="bg-base-200">
                        {/* Name (logged in user's name),
                        - 
                        - 
                        - 
                        - 
                        -  */}
                        <tr>
                            <th>Who posted the job</th>
                            <th>Job Title</th>
                            <th>Job Posting Date</th>
                            <th>Application Deadline</th>
                            <th>Salary range</th>
                            <th>Details Button</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allJobs?.map(jobsCard => <AllJobsTable key={jobsCard?._id} jobsCard={jobsCard}></AllJobsTable>)
                        }
                    </tbody>
                    {/* foot */}
                    <tfoot>
                        <tr>
                            <th>Who posted the job</th>
                            <th>Job Title</th>
                            <th>Job Posting Date</th>
                            <th>Application Deadline</th>
                            <th>Salary range</th>
                            <th>Details Button</th>
                        </tr>
                    </tfoot>

                </table>
            </div>

            <div className="block md:hidden mb-5 text-center">
                {
                    allJobs?.map(jobsCard => <AllJobsCard key={jobsCard?._id} jobsCard={jobsCard}></AllJobsCard>)
                }
            </div>

        </div>
    );
};

export default AllJobs;