/* eslint-disable react/prop-types */

import swal from "sweetalert";

import { Link } from "react-router-dom";




const MySingleCard = ({ jobsCard }) => {
    const { _id, name, jobTitle, deadline, salary, postDate, photo } = jobsCard || {}

    const handleDelete = id => {
        console.log('deleted id', id)
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`http://localhost:5000/myJobs/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            if (data.deletedCount > 0) {
                                swal("Poof! Your imaginary card has been deleted!", {
                                    icon: "success",
                                })
                                // setLoader(loader)
                                // const remaining = cardDelete?.filter(cardDelete => cardDelete._id == _id)
                                // setCardDelete(remaining)
                            }
                        })
                } else {
                    swal("Your imaginary file is safe!");
                }
            });
    }

 


    return (
        <div>
            <div className="card w-96 h-[550px] bg-base-100 shadow-xl mb-5">
                <figure><img className="p-2 rounded-lg h-60" src={photo} alt="Job Photo" /></figure>
                <div className="card-body">
                    <h1 className="text-2xl font-bold ">{name}</h1>
                    <hr />
                    <h2 className="text-xl font-bold">Job Name: {jobTitle}</h2>

                    <p className="text-lg font-semibold">Salary: {salary}</p>
                    <div className="text-base font-semibold">
                        <p>Posted Date: {postDate}</p>
                        <p>Application Deadline: {deadline}</p>
                    </div>
                    <div className="">
                        <button 
                        onClick={() => handleDelete(_id)}
                         className="btn w-full mb-2 bg-[#FFC501] hover:bg-[#04396F] text-[#04396F] hover:text-[#FFC501]">Delete Job</button>
                        <Link to={`/updateJob/${_id}`} className="btn w-full mb-2 bg-[#FFC501] hover:bg-[#04396F] text-[#04396F] hover:text-[#FFC501]">Job Update</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MySingleCard;