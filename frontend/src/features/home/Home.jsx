import PageWrapper from "../../components/layout/PageWrapper";
import Footer from "../../components/layout/Footer";

import HomeHeader from "./components/HomeHeader";
import SearchBar from "./components/SearchBar";
import HeroSection from "./components/HeroSection";
import Categories from "./components/Categories";
import AvailableToday from "./components/AvailableToday";

export default function Home() {
  return (
    <>
      <PageWrapper>
        <div className="bg-neutral-100">
          <HomeHeader />
          <SearchBar />
          <HeroSection />
          <Categories />
          <AvailableToday />
        </div>
      </PageWrapper>

      <Footer />
    </>
  );
}
