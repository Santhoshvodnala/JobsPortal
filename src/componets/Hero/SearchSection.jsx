import { Search } from "lucide-react";

const SearchSection = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto mb-8">
      <div className="flex flex-col md:flex-row gap-3 mb-6">
        <input
          type="text"
          placeholder="Job title or keyword"
          className="flex-1 border border-gray-800 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-gray-700"
        />
        <input
          type="text"
          placeholder="City, state, or remote"
          className="flex-1 border border-gray-800 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-gray-700"
        />
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md font-medium transition-colors duration-200 whitespace-nowrap">
          Search Jobs
        </button>
      </div>
      <div className="flex flex-wrap items-center gap-2 text-sm">
        <span className="text-gray-600">Popular searches:</span>
        <a href="#" className="text-orange-500 hover:text-orange-600 hover:underline">Software Engineer</a>
        <a href="#" className="text-orange-500 hover:text-orange-600 hover:underline">Data Scientist</a>
        <a href="#" className="text-orange-500 hover:text-orange-600 hover:underline">Product Manager</a>
      </div>
    </div>
  );
};

export default SearchSection;