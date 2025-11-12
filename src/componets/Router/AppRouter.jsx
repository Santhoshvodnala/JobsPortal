// src/components/Router/AppRouter.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import FeaturedJobs from "../Jobs/FeaturedJobs";
import Home from "../../pages/Home";
import TopCompanies from "../Companies/TopCompanies";
import PremiumFeatures from "../Features/PremiumFeatures";
import Dashboard from "../../pages/Dashboard";
import Login from "../../pages/Login";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="pt-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/find-jobs" element={<FeaturedJobs />} />

          <Route path="/companies" element={<TopCompanies />} />
          <Route path="/find-candidates" element={<PremiumFeatures />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          {/* You can add PostJob later */}
          {/* <Route path="/post-job" element={<PostJob />} /> */}
          {/* optional 404 fallback */}
          <Route
            path="*"
            element={<div className="p-6">404 — Page not found</div>}
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
