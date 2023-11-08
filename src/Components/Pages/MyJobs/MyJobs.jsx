import axios from "axios";
import { useEffect, useState } from "react";
import MySingleCard from "./MySingleCard";




const MyJobs = () => {
    const [allJobs, setAllJobs] = useState()

    useEffect(() => {
        axios.get('http://localhost:5000/myJobs')
            .then((res) => {
                setAllJobs(res.data)
            })
    }, [])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto mt-5">
            {
                allJobs?.map(jobsCard => <MySingleCard key={jobsCard?._id} jobsCard={jobsCard}></MySingleCard>)
            }
        </div>
    );
};

export default MyJobs;