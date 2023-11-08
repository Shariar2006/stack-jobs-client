import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../AuthContext/AuthProvider";


const Details = () => {
    const { user } = useContext(AuthContext)
    const defaultName = user?.displayName
    const userEmail = user?.email
    console.log(userEmail)
    const [jobCard, setJobCard] = useState()
    const [jobDataLoad, setJobDataLoad] = useState()
    const { id } = useParams()

    useEffect(() => {
        axios.get('https://stack-jobs-server.vercel.app/allJobs')
            .then(res => {
                setJobDataLoad(res.data)
            })
    }, [])

    useEffect(() => {
        const findJobData = jobDataLoad?.find(jobData => jobData._id == id)
        setJobCard(findJobData)
    }, [id, jobDataLoad])

    const handleApplied = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const link = form.link.value
        const jobName = jobCard?.jobTitle
        const information = { name, email, link, jobName }
        axios.post('https://stack-jobs-server.vercel.app/appliesJob', information)
            .then(res => {
                console.log(res.data)
            })
    }


    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl mb-5">
                <figure><img className="p-2 w-full h-[90vh] rounded-lg" src={jobCard?.photo} alt="Job Photo" /></figure>
                <div className="card-body">
                    <h1 className="text-2xl font-bold ">{jobCard?.name}</h1>
                    <hr />
                    <h2 className="text-xl font-bold">Job Name: {jobCard?.jobTitle}</h2>

                    <p className="text-base text-gray-600 font-semibold"> {jobCard?.description}</p>
                    <p className="text-lg font-semibold">Salary: {jobCard?.salary}</p>
                    <div className="text-base font-semibold flex">
                        <p>Posted Date: {jobCard?.postDate}</p>
                        <p>Application Deadline: {jobCard?.deadline}</p>
                        <p>Applicants Number: 0</p>
                    </div>
                    <div>
                        {
                            user?.email == jobCard?.userEmail ?
                                <button
                                    disabled={true}
                                    className="btn bg-[#FFC501] hover:bg-[#04396F] text-[#04396F] hover:text-[#FFC501] text-xl font-bold pt-2 pb-3 rounded-md"
                                >Apply this job</button>
                                :

                                <div>
                                    <div>
                                        < button className="btn bg-[#FFC501] hover:bg-[#04396F] text-[#04396F] hover:text-[#FFC501] text-xl font-bold pt-2 pb-3 rounded-md" onClick={() => document.getElementById('my_modal_5').showModal()}>Apply this job</button>
                                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                            <div className="modal-box">

                                                <form onSubmit={handleApplied}>
                                                    <div className="form-control">
                                                        <label className="label">
                                                            <span className="label-text text-[#FFC501] text-xl font-bold">Name</span>
                                                        </label>
                                                        <input type="email" name='email' defaultValue={userEmail} placeholder="Email" className=" input input-bordered text-[#FFC501] text-lg font-semibold" />
                                                    </div>
                                                    <div className="form-control">
                                                        <label className="label">
                                                            <span className="label-text text-[#FFC501] text-xl font-bold">Name</span>
                                                        </label>
                                                        <input type="text" defaultValue={defaultName} name='name' placeholder="Email" className=" input input-bordered text-[#FFC501] text-lg font-semibold" />
                                                    </div>
                                                    <div className="form-control">
                                                        <label className="label">
                                                            <span className="label-text text-[#FFC501] text-xl font-bold">Your resume link</span>
                                                        </label>
                                                        <input type="url" name='link' placeholder="Resume link" className=" input input-bordered text-[#FFC501] text-lg font-semibold" required />
                                                    </div>

                                                    <div className="modal-action">

                                                        <input className="btn" type="submit" value="Apply" />

                                                    </div>
                                                </form>
                                                <form method="dialog">
                                                    {/* if there is a button in form, it will close the modal */}
                                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                </form>

                                            </div>
                                        </dialog>
                                    </div>
                                </div>

                        }
                    </div>

                </div>
            </div>
        </div >
    );
};

export default Details;