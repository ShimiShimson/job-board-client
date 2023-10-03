import React from "react";

import JobListItem from "@components/job-list-item/JobListItem";

import { JOBS } from "@assets/job-mocks";

import "./Home.scss";

const Home: React.FC = () => {

  return (
    <div className="job-board">
      <h1>Job Board</h1>
      {JOBS.map((job) => (
        <div key={job.id} className="job-list-item">
          <JobListItem job={job} />
        </div>
      ))}
    </div>
  );
};

export default Home;
