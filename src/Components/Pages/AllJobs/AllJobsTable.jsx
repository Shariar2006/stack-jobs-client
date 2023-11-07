/* eslint-disable react/prop-types */


const AllJobsTable = ({jobsCard}) => {

    const { name, jobTitle, deadline, salary, postDate } = jobsCard || {}

    return (
        <tr className="">


            <td>
                <div className="font-bold">{name}</div>
            </td>
            <td>
                <div className="font-bold">{jobTitle}</div>
            </td>
            <td className="font-bold">{postDate}</td>
            <td className="font-bold">{deadline}</td>
            <td className="font-bold">{salary}</td>
            <th>
                <button>Job Details</button>
            </th>
        </tr>
    );
};

export default AllJobsTable;