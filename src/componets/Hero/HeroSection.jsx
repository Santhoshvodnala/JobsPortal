import { Briefcase, Building2, Users } from "lucide-react";
import SearchSection from "./SearchSection";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-orange-50 to-orange-100 py-16 px-6 text-center overflow-hidden">
     
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1543269865-cbf427effbad")',
          opacity: 0.35,
          zIndex: 0,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Find Your <span className="text-orange-500">Dream Job</span> Today
        </h1>
<p className="text-center text-gray-800 mb-8 text-lg mx-auto max-w-3xl">
  Connect with top companies and discover opportunities that match your skills and aspirations
</p>


        <SearchSection />

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-gray-700">
          <div className="flex items-center gap-2">
            <Briefcase className="text-purple-500" size={24} />
            <span className="font-semibold">50,000+ Active Jobs</span>
          </div>
          <div className="flex items-center gap-2">
            <Building2 className="text-blue-500" size={24} />
            <span className="font-semibold">10,000+ Companies</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="text-green-500" size={24} />
            <span className="font-semibold">7M+ Job Seekers</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;