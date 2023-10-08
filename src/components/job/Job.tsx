import React from "react";
import { useLocation } from "react-router-dom";

import { TStackItem } from "@/types/job";

import "./Job.scss";

const Job: React.FC = () => {
  const location = useLocation();
  const job = location.state.job;

  return (
    <div className="job-page">
      <h1 className="job-title">Job Details</h1>
      <h3 className="job-subtitle">{job.title}</h3>
      <p className="job-short-desc">{job.shortDesc}</p>
      <div className="job-info">
        <p className="job-salary">Salary: {job.salary}</p>
        <p className="job-added">Added: {job.added}</p>
      </div>
      <ul className="job-required-stack">
        <li className="job-required-stack-header">Required Stack:</li>
        {job.requiredStack.map((stackItem: TStackItem) => (
          <li key={stackItem} className="job-required-stack-item">
            {stackItem}
          </li>
        ))}
      </ul>
      <div className="job-long-desc">
        <p className="job-long-desc-content">{job.longDesc}</p>
      </div>

      <div className="job-location">
        <span>Location:</span> {job.location.city}, {job.location.country}
      </div>
      <div className="job-type-of-hiring">
        <p>Type of hiring: {job.typeOfHiring.join(", ").trim()}</p>
      </div>
    </div>
  );
};

export default Job;
