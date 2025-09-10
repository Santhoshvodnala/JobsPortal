import { COMPANIES_DATA } from "../../data/constants";
import CompanyCard from "./CompanyCard";

const TopCompanies = () => {
  return (
    <section className="py-16 bg-orange-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">
          Top <span className="text-orange-500">Companies</span> Hiring
        </h2>
        <p class="text-gray-600 mb-10">Join thousands of professionals at leading companies</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMPANIES_DATA.map((company, index) => (
            <CompanyCard key={index} company={company} />
          ))}
        </div>
        <div>
          <button class="text-orange-500 cursor-pointer  font-medium hover:underline text-lg mt-10">View All Companies →</button>
        </div>
      </div>
    </section>
  );
};

export default TopCompanies;
