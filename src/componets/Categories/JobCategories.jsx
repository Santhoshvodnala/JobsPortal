import { JOB_CATEGORIES } from "../../data/constants";
import CategoryCard from "./CategoryCard";

const JobCategories = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6 sm:mb-10">
          Browse Job <span className="text-orange-500">Categories</span>
        </h2>
        <p className="text-center text-gray-600 mb-6 sm:mb-10">
          Explore opportunities in your field.
        </p>

        {/* Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {JOB_CATEGORIES.map((category, index) => (
            <CategoryCard key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobCategories;
