import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";


const Update = () => {

    const oldData = useLoaderData('')
console.log(oldData)
    const  {_id, name, jobTitle, salary, category, postDate, deadline, description, photo} = oldData

    const handleUpdate = e =>{
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

        const jobUpdate = {name, jobTitle, salary, category, postDate, deadline, description, photo,}
        
        fetch(`https://stack-jobs-server.vercel.app/myJobUpdate/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(jobUpdate)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount){
                swal("Good job!", "You product updated successfully!", "success");
                
            }
        })

    }

    return (
        <div>

                <form onSubmit={handleUpdate} className="h-full py-8 px-10 rounded-lg login">
                    <p className=' text-[#FFC501] text-4xl text-center font-bold mb-5'>Add A New Job</p>


                    <div className='flex flex-col md:flex-row gap-2'>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#FFC501] text-xl font-bold">Name</span>
                            </label>
                            <input type="text" name='name' defaultValue={name} placeholder="Name" className="inputFild input input-bordered text-[#FFC501] text-lg font-semibold" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#FFC501] text-xl font-bold">Job Title</span>
                            </label>
                            <input type="text" name='jobTitle' defaultValue={jobTitle} placeholder="Job Title" className="inputFild input
                    text-[#FFC501] text-lg font-semibold input-bordered" required />
                        </div>

                    </div>

                    <div className='flex flex-col md:flex-row gap-2'>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#FFC501] text-xl font-bold">Salary range</span>
                            </label>
                            <input type="text" name='salary' defaultValue={salary} placeholder="Salary range" className="inputFild input input-bordered text-[#FFC501] text-lg font-semibold" required />
                        </div>

                        <div className="form-control mt-2">
                            <h1 className="label-text text-[#FFC501] text-xl font-bold">Job Category</h1>
                            <select defaultValue={category} required className="inputFild input input-bordered text-[#FFC501] text-lg font-semibold p-2 w-[252px] mt-2 rounded-md" name="category" id="">
                                
                            </select>
                        </div>

                    </div>

                    <div className='flex flex-col md:flex-row gap-2'>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#FFC501] text-xl font-bold">Post date</span>
                            </label>
                            <input type="date" name='postDate' defaultValue={postDate} placeholder="Post date" className="inputFild w-[252px] input input-bordered text-[#FFC501] text-lg font-semibold" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#FFC501] text-xl font-bold">Deadline</span>
                            </label>
                            <input type="date" name='deadline' defaultValue={deadline} placeholder="Deadline" className="inputFild w-[252px] input
                    text-[#FFC501] text-lg font-semibold input-bordered" required />
                        </div>

                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[#FFC501] text-xl font-bold">Job Description</span>
                        </label>
                        <textarea name='description' defaultValue={description} placeholder="Job Description" className="inputFild  input
                    text-[#FFC501] text-lg font-semibold input-bordered" cols="50" rows="5"></textarea>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[#FFC501] text-xl font-bold">Photo URl</span>
                        </label>
                        <input type="url" name='photo' defaultValue={photo} placeholder="Photo URL" className="inputFild w-full input
                    text-[#FFC501] text-lg font-semibold input-bordered" required />
                    </div>




                    <div className=' '>
                        <input className='btn border-none bg-[#ffc501] hover:bg-[#053C75] text-center text-[#053C75] hover:text-[#ffc501] py-3 rounded-lg text-xl font-bold w-full my-4' type="submit" value="Update Job" />
                    </div>
                </form>
                   
                    
        </div>
    );
};

export default Update;