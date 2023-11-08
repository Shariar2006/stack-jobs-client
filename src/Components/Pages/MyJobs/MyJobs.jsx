import axios from "axios";
import { useContext, useEffect, useState } from "react";
import MySingleCard from "./MySingleCard";
import { AuthContext } from "../../AuthContext/AuthProvider";




const MyJobs = () => {
    const {user} = useContext(AuthContext)
    const [allJobs, setAllJobs] = useState()

    useEffect(() => {
        axios.get(`https://stack-jobs-server.vercel.app/myJobs?email=${user.email}`, {withCredentials: true})
            .then((res) => {
                setAllJobs(res.data)
            })
    }, [user])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto mt-5">
            {
                allJobs?.map(jobsCard => <MySingleCard key={jobsCard?._id} jobsCard={jobsCard}></MySingleCard>)
            }
        </div>
    );
};

export default MyJobs;