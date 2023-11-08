import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategoryCard from "./CategoryCard";

const SingleCategory = () => {
    const [singleCategory, setSingleCategory] = useState()
    const [allJobsCategory, setAllJobsCategory] = useState()

    const {category} = useParams()
    console.log(category)

    useEffect(() => {
        axios.get('https://stack-jobs-server.vercel.app/allJobs')
            .then(res => {
                setAllJobsCategory(res.data)
            })
    }, [])

    useEffect(() => {
        const filterJobCategory = allJobsCategory?.filter(categoryData => categoryData.category.toLowerCase() == category.toLocaleLowerCase())
        setSingleCategory(filterJobCategory)
    }, [category, allJobsCategory])

    console.log(singleCategory)


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5">
            {
                singleCategory?.map(categoryCard=><CategoryCard key={categoryCard._id} categoryCard={categoryCard}></CategoryCard>)
            }
        </div>
    );
};

export default SingleCategory;