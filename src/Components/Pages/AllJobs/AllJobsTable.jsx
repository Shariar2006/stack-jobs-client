/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const AllJobsTable = ({jobsCard}) => {

    const { _id, name, jobTitle, deadline, salary, postDate } = jobsCard || {}

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
                <Link to={`/job/details/${_id}`}>Job Details</Link>
            </th>
        </tr>
    );
};

export default AllJobsTable;