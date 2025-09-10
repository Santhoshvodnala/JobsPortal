import { useState } from "react";
// Correct import
import SpecialOfferBanner from "./componets/Banner/SpecialOfferBanner";
import Navbar from "./componets/Navbar/Navbar";
import ContentRouter from "./componets/Router/ContentRouter";
import Footer from "./componets/Footer/Footer";

function App() {
  const [bannerVisible, setBannerVisible] = useState(true);
  const [activeRoute, setActiveRoute] = useState("home");

  return (
    <div className="flex flex-col min-h-screen">
      <SpecialOfferBanner
        isVisible={bannerVisible}
        onClose={() => setBannerVisible(false)}
      />
      <Navbar activeRoute={activeRoute} onRouteChange={setActiveRoute} />
      <main className="flex-grow">
        <ContentRouter activeRoute={activeRoute} />
      </main>
      <Footer />
    </div>
  );
}

export default App;