import { useEffect, useState } from "react";
import axios from "axios";
import AllJobsCard from "./AllJobsCard";
import AllJobsTable from "./AllJobsTable";


const AllJobs = () => {
    const [search, setSearch] = useState('')
    const [allJobs, setAllJobs] = useState()
    console.log(search)

    useEffect(() => {
        axios.get('https://stack-jobs-server.vercel.app/allJobs')
            .then((res) => {
                setAllJobs(res.data)
            })
    }, [])

    const handleSearch = e => {
        e.preventDefault()
        const form = e.target.value
        setSearch(form)
    }

    return (
        <div>
            <h1 className="text-center text-xl md:text-3xl font-bold mt-2">Our all jobs</h1>
            <form onChange={handleSearch} className="p-2">
                <input className="border-2 w-full my-2 p-2 rounded-md" placeholder="Search" type="search" name="" id="">
                </input>
            </form>

            <div className="hidden md:block overflow-x-auto">
                <table className="table table-zebra">
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
                            allJobs?.filter((jobsCard) => {
                                return search.toLocaleLowerCase() === '' ? jobsCard : jobsCard?.jobTitle.toLocaleLowerCase().includes(search)
                            }).map(jobsCard => <AllJobsTable key={jobsCard?._id} jobsCard={jobsCard}></AllJobsTable>)
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
                    allJobs?.filter((jobsCard) => {
                        return search.toLocaleLowerCase() === '' ? jobsCard : jobsCard?.jobTitle.toLocaleLowerCase().includes(search)
                    }).map(jobsCard => <AllJobsCard key={jobsCard?._id} jobsCard={jobsCard}></AllJobsCard>)
                }
            </div>

        </div>
    );
};

export default AllJobs;