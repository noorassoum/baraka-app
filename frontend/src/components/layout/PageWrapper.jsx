import { useState } from "react";
import Sidebar from "./Sidebar";

const PageWrapper = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Page Content */}
      <div className="min-h-screen w-full px-4 py-4 bg-neutral-100">
        {typeof children === "function"
          ? children({ openSidebar: () => setIsSidebarOpen(true) })
          : children}
      </div>
    </>
  );
};

export default PageWrapper;
