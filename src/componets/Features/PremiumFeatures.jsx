import { PREMIUM_FEATURES } from "../../data/constants";
import FeatureCard from "./FeatureCard";

const PremiumFeatures = () => {
  return (
    <section className="py-16 bg-orange-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Premium Features
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
Upgrade to our premium plan for exclusive features that enhance your hiring experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  ">
          {PREMIUM_FEATURES.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
        <div>
          <button class="bg-orange-500 cursor-pointer text-white px-6 py-3 rounded-full hover:bg-orange-600 transition mt-10">Explore Premium Features</button>
        </div>
      </div>
    </section>
  );
};

export default PremiumFeatures;
