const PageWrapper = ({ children }) => {
  return (
    <div className="min-h-screen w-full px-4 py-4 bg-neutral-100">
      {children}
    </div>
  );
};

export default PageWrapper;
