import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "@/components/home/Home";
import Job from "@/components/job/Job";

import "./App.css";

const App = () => {
  const ROUTES = [
    { path: "/", element: <Home />, index: true },
    { path: "/job", element: <Job /> }
  ];

  return (
    <BrowserRouter>
      <Routes>
        {ROUTES.map(({ element, path, index }) => (
          <Route {...{ path, element, index }} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
