
import { useContext, useEffect, useState } from "react";
import Banner from "./Banner";
import axios from "axios";
import JobsCategory from "./JobsCategory";
import TheBestPart from "./TheBestPart";
import Sponsored from "./Sponsored";





const Home = () => {
    

    const [jobData, setJobData] = useState()
    useEffect(() => {
        axios.get('/Jobs.json')
            .then(res => {
                setJobData(res.data)
                
            })
    }, [])

    console.log(jobData)

    return (
        <div>
            <Banner></Banner>
            <div className=" relative bg-gradient-to-b from-[#FF8901] to-white">
                <h1 className="text-center text-[#053972] text-3xl font-bold pt-5">Our Job Category</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 ">

                    {
                        jobData?.map(jobsCategory => <JobsCategory key={jobsCategory.category} jobsCategory={jobsCategory}></JobsCategory>)
                    }
                </div>
            </div>

            <div className="h-full ">
                <TheBestPart></TheBestPart>
            </div>
            <Sponsored></Sponsored>
        </div>
    );
};

export default Home;