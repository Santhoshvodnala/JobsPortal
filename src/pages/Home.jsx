// src/pages/Home.jsx
import { useState } from "react";
import SpecialOfferBanner from "../componets/Banner/SpecialOfferBanner";
import Navbar from "../componets/Navbar/Navbar";
import ContentRouter from "../componets/Router/ContentRouter";
import Footer from "../componets/Footer/Footer";

export default function Home() {
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
