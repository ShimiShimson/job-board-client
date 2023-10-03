import { useNavigate } from "react-router-dom";
import { IJob } from "../../types/job";

import "./JobListItem.scss";

const JobListItem = ({ job }: { job: IJob }) => {
  const navigate = useNavigate();

  return (
    <div className="job-list-item">
      <div className="job-added-date">Added: {job.added}</div>
      <h3 className="job-title">{job.title}</h3>
      <p className="job-short-desc">{job.shortDesc}</p>
      <p className="job-salary">{job.salary}</p>
      <p className="job-location">
        {job.location.city}, {job.location.country}
      </p>
      <button onClick={() => navigate("/job", { state: { job } })}>
        View Job
      </button>
    </div>
  );
};

export default JobListItem;
