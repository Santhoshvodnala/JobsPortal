import HeroSection from "../Hero/HeroSection";
import PremiumFeatures from "../Features/PremiumFeatures";
import FeaturedJobs from "../Jobs/FeaturedJobs";
import TopCompanies from "../Companies/TopCompanies";
import JobCategories from "../Categories/JobCategories";
import CallToAction from "../CTA/CallToAction";

const ContentRouter = ({ activeRoute }) => {
  switch (activeRoute) {
    case "home":
      return (
        <>
          <HeroSection />
          <PremiumFeatures />
          <FeaturedJobs />
          <TopCompanies />
          <JobCategories />
          <CallToAction />
        </>
      );
    case "find-jobs":
      return <FeaturedJobs />;
    case "companies":
      return <TopCompanies />;
    case "find-candidates":
      return <PremiumFeatures />;
    case "dashboard":
      return <JobCategories />;
    default:
      return <HeroSection />;
  }
};

export default ContentRouter;
