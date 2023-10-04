import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "@/components/home/Home";
import Job from "@/components/job/Job";

import "./App.css";

const App = () => {
  console.log(crypto.randomUUID());
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/job" element={<Job />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
