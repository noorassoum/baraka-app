export function GoogleButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="w-full flex items-center justify-center gap-3 
                 border border-neutral-300 bg-white 
                 py-3 rounded-xl shadow-xs
                 hover:bg-neutral-100 transition"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/512px-Google_%22G%22_logo.svg.png"
        alt="Google"
        className="w-5 h-5"
      />
      <span className="text-neutral-700 font-medium">
        Log In With Google
      </span>
    </button>
  );
}

export function AppleButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="w-full flex items-center justify-center gap-3 
                 border border-neutral-300 bg-white 
                 py-3 rounded-xl shadow-xs
                 hover:bg-neutral-100 transition"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
        alt="Apple"
        className="w-5 h-5"
      />
      <span className="text-neutral-700 font-medium">
        Log In With Apple
      </span>
    </button>
  );
}
