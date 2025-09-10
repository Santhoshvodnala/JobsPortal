import { useState } from "react";
import { JOBS_DATA } from "../../data/constants";
import JobCard from "./JobCard";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState(JOBS_DATA);

  const handleFavorite = (id) => {
    setJobs(
      jobs.map((job) =>
        job.id === id ? { ...job, favorite: !job.favorite } : job
      )
    );
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Featured <span className="text-orange-500">Jobs</span>
        </h2>
        <p class="text-center text-gray-600 mb-8">Explore our top job listings from leading companies. Find your perfect match today!</p>
        
        {/* Job Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} onFavorite={handleFavorite} />
          ))}
        </div>

        {/* View All Jobs Button */}
        <div className="flex justify-center mt-12">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-200">
            View All Jobs
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
