import { Heart } from "lucide-react";

const JobCard = ({ job, onFavorite }) => {
  const isImage = typeof job.logo === "string" && job.logo.startsWith("http");

  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition relative flex flex-col items-center text-center border">
      {/* Favorite Button */}
      <button
        onClick={() => onFavorite(job.id)}
        className="absolute top-3 right-3 text-gray-400 hover:text-red-500"
      >
        <Heart
          className="w-5 h-5"
          fill={job.favorite ? "#ef4444" : "none"}
          stroke={job.favorite ? "#ef4444" : "currentColor"}
        />
      </button>

      {/* Company Logo */}
      <div className="mb-3">
        {isImage ? (
          <img
            src={job.logo}
            alt={job.company + " logo"}
            className="w-12 h-12 object-contain mx-auto"
          />
        ) : (
          <span className="text-3xl">{job.logo}</span>
        )}
      </div>

      {/* Job Info */}
      <h3 className="text-lg font-semibold">{job.title}</h3>
      <p className="text-gray-600">{job.company}</p>
      <p className="text-sm text-gray-500">
        {job.location} · {job.type}
      </p>
      <p className="text-orange-500 font-bold mt-1">{job.salary}</p>
      <p className="text-gray-400 text-xs mt-1">Posted {job.posted} ago</p>

      {/* Apply Button */}
      <button className="bg-blue-600 hover:bg-blue-700 text-white mt-5 px-5 py-2 rounded-md font-medium transition-all duration-200">
        Apply Now
      </button>
    </div>
  );
};

export default JobCard;
