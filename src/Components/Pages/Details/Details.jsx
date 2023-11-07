import axios from "axios";
import { useEffect, useState } from "react";

const Details = () => {
    const [jobCard, setJobCard] = useState()
    const [jobDataLoad, setJobDataLoad] = useState()

    useEffect(()=>{
        axios.get('http://localhost:5000/allJobs')
        .then(res => {
            setJobDataLoad(res.data)
        })
    },[])

    useEffect(()=>{
        
    },[])


    return (
        <div>
            
        </div>
    );
};

export default Details;