import { useState } from "react";

import PageWrapper from "../../components/layout/PageWrapper";
import Footer from "../../components/layout/Footer";
import Sidebar from "../../components/layout/Sidebar";

import HomeHeader from "./components/HomeHeader";
import SearchBar from "./components/SearchBar";
import HeroSection from "./components/HeroSection";
import Categories from "./components/Categories";
import AvailableToday from "./components/AvailableToday";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <PageWrapper>
        <div className="bg-neutral-100">
          <HomeHeader onMenuClick={() => setIsSidebarOpen(true)} />

          <SearchBar />
          <HeroSection />
          <Categories />
          <AvailableToday />
        </div>
      </PageWrapper>

      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <Footer />
    </>
  );
}
