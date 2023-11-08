/* eslint-disable react/prop-types */


const AppliedJobsCard = ({appliesCard}) => {
    const {name, email, link, jobName} = appliesCard || {}
    return (
        <div>
            <div className="card w-96 h-96 bg-base-100 shadow-xl my-5">
                
                <div className="card-body">
                    <h1 className="text-2xl font-bold ">Name: {name}</h1>
                    <hr />
                    <h2 className="text-xl font-bold">Email: {email}</h2>
                    <h2 className="text-xl font-bold">Your Applied Job: {jobName}</h2>

                        <p className="text-lg font-semibold">Your Resume Link: {link}</p>
                    
                    
                </div>
            </div>
        </div>
    );
};

export default AppliedJobsCard;