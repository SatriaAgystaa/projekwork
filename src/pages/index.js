import NavbarSection from "../components/DashboardBarenganaja/NavbarSection/index.js";
import MainSection from "../components/DashboardBarenganaja/MainSection/index.js";
import SummaryCardSection from "../components/DashboardBarenganaja/TestimoniSection/index.js";
import ProfitSection from "../components/DashboardBarenganaja/ProfitSection/index.js";
import LayananBerlangganan from "../components/DashboardBarenganaja/LayananBerlangganan/index.js";
import ProductPromo from "../components/ProductPromo/index.js";
import ProductTerlaris from "../components/ProductTerlaris/index.js";
import SubscriptionSection from "../components/DashboardBarenganaja/SubscriptionSection/index.js";
import PartnersSection from "../components/DashboardBarenganaja/PartnersSection/index.js";
import FAQSection from "../components/DashboardBarenganaja/FAQSection/index.js";
import FooterSection from "../components/DashboardBarenganaja/FooterSection/index.js";

const Home = () => {
  return (
    <>
      <NavbarSection />
      <MainSection />
      <SummaryCardSection />
      <ProfitSection />
      <LayananBerlangganan />
      <ProductPromo />
      <ProductTerlaris />
      <SubscriptionSection />
      <PartnersSection />
      <FAQSection />
      <FooterSection />
    </>
  );
};

export default Home;
