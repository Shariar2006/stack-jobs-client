/* eslint-disable react/jsx-key */
import { useContext } from 'react';
import '../../../index.css'
import { AuthContext } from '../../AuthContext/AuthProvider';
import axios from "axios";
import swal from 'sweetalert';



const AddAJobs = () => {
    const { user } = useContext(AuthContext)
    const defaultName = user?.displayName
    const userEmail = user?.email

    const jobCategory = ['Select Job Category', 'OnSite', 'Remote', 'PartTime', 'Hybrid']

    const handleAddJob =e=>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const jobTitle = form.jobTitle.value
        const salary = form.salary.value
        const category = form.category.value
        const postDate = form.postDate.value
        const deadline = form.deadline.value
        const description = form.description.value
        const photo = form.photo.value

        const newJob = {name, jobTitle, salary, category, postDate, deadline, description, photo, userEmail}
        
        

        axios.post('http://localhost:5000/addAJob', newJob)
        .then(res=>{
            if(res.data.insertedId){
                swal("Good job!", "You job added successfully!", "success");
                e.target.reset()
            }
        })

    }

    return (
        <div className='relative'>

            <div className='absolute flex flex-col justify-center items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] min-h-screen right-0 left-0'>
                <form onSubmit={handleAddJob} className="h-full py-8 px-10 rounded-lg login">
                    <p className=' text-[#FFC501] text-4xl text-center font-bold mb-5'>Add A New Job</p>


                    <div className='flex flex-col md:flex-row gap-2'>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#FFC501] text-xl font-bold">Name</span>
                            </label>
                            <input type="text" name='name' defaultValue={defaultName} placeholder="Name" className="inputFild input input-bordered text-[#FFC501] text-lg font-semibold" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#FFC501] text-xl font-bold">Job Title</span>
                            </label>
                            <input type="text" name='jobTitle' placeholder="Job Title" className="inputFild input
                    text-[#FFC501] text-lg font-semibold input-bordered" required />
                        </div>

                    </div>

                    <div className='flex flex-col md:flex-row gap-2'>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#FFC501] text-xl font-bold">Salary range</span>
                            </label>
                            <input type="text" name='salary' placeholder="Salary range" className="inputFild input input-bordered text-[#FFC501] text-lg font-semibold" required />
                        </div>

                        <div className="form-control mt-2">
                            <h1 className="label-text text-[#FFC501] text-xl font-bold">Job Category</h1>
                            <select required className="inputFild input input-bordered text-[#FFC501] text-lg font-semibold p-2 w-[252px] mt-2 rounded-md" name="category" id="">
                                {
                                    jobCategory.map(job => {
                                        return <option>{job}</option>
                                    })
                                }
                            </select>
                        </div>

                    </div>

                    <div className='flex flex-col md:flex-row gap-2'>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#FFC501] text-xl font-bold">Post date</span>
                            </label>
                            <input type="date" name='postDate' placeholder="Post date" className="inputFild w-[252px] input input-bordered text-[#FFC501] text-lg font-semibold" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#FFC501] text-xl font-bold">Deadline</span>
                            </label>
                            <input type="date" name='deadline' placeholder="Deadline" className="inputFild w-[252px] input
                    text-[#FFC501] text-lg font-semibold input-bordered" required />
                        </div>

                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[#FFC501] text-xl font-bold">Job Description</span>
                        </label>
                        <textarea name='description' placeholder="Job Description" className="inputFild  input
                    text-[#FFC501] text-lg font-semibold input-bordered" cols="50" rows="5"></textarea>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[#FFC501] text-xl font-bold">Photo URl</span>
                        </label>
                        <input type="url" name='photo' placeholder="Photo URL" className="inputFild w-full input
                    text-[#FFC501] text-lg font-semibold input-bordered" required />
                    </div>




                    <div className=' '>
                        <input className='btn border-none bg-[#ffc501] hover:bg-[#053C75] text-center text-[#053C75] hover:text-[#ffc501] py-3 rounded-lg text-xl font-bold w-full my-4' type="submit" value="Add Job" />
                    </div>
                </form>
            </div>
            <img className='h-[787.2px] md:h-screen w-full' src="https://static.vecteezy.com/system/resources/previews/004/604/522/non_2x/minimal-job-vacancy-banner-for-social-media-post-we-are-hring-background-with-scribble-magnifying-glass-vector.jpg" alt="" />
        </div>
    );
};

export default AddAJobs;