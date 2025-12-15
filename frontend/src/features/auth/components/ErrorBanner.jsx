export default function ErrorBanner({ message }) {
  if (!message) return null;

  return (
    <div className="w-full bg-error-100 text-error-700 border border-error-300 
      px-4 py-3 rounded-xl text-sm mb-4 shadow-xs">
      {message}
    </div>
  );
}
