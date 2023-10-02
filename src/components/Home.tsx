import React from "react";

import { JOBS } from "../assets/job-mocks";

import "./Home.scss";

const Home: React.FC = () => {
  const jobs = JOBS;

  return (
    <div className="job-board">
      <h1>Job Board</h1>
      {jobs.map((job) => (
        <div className="job-card" key={job.title}>
          <h3>{job.title}</h3>
          <p>{job.shortDesc}</p>
          <div className="job-info">
            <p>Salary: {job.salary}</p>
            <p>Added: {job.added}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
