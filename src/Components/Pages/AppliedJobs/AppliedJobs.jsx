import axios from "axios";
import { useContext, useEffect, useState } from "react";
import AppliedJobsCard from "./AppliedJobsCard";
import { AuthContext } from "../../AuthContext/AuthProvider";


const AppliedJobs = () => {
    const {user} = useContext(AuthContext)
    const [applyJobsData, setApplyJobsData] = useState()

    useEffect(() => {
        axios.get(`https://stack-jobs-server.vercel.app/appliesJob/?email=${user.email}`, {withCredentials: true})
            .then((res) => {
                setApplyJobsData(res.data)
            })
    }, [user])

    console.log(applyJobsData)

    return (
        <div>
            <div className="mb-5 text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    applyJobsData?.map(appliesCard => <AppliedJobsCard key={appliesCard?._id} appliesCard={appliesCard}></AppliedJobsCard>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;