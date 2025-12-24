import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import AuthInput from "../components/AuthInput";
import ErrorBanner from "../components/ErrorBanner";
import { registerVendor } from "../auth.api";
import { GoogleButton, AppleButton } from "../components/SocialButtons";

export default function VendorRegister() {
  const navigate = useNavigate();
  const { login } = useAuth(); // ✅ IMPORTANT

  const [form, setForm] = useState({
    businessName: "",
    ownerName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    location: "",
  });

  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const err = {};
    if (!form.businessName) err.businessName = "Restaurant name is required";
    if (!form.ownerName) err.ownerName = "Owner name is required";
    if (!form.email.includes("@")) err.email = "Invalid email format";
    if (form.password.length < 6)
      err.password = "Minimum 6 characters";
    if (form.password !== form.confirmPassword)
      err.confirmPassword = "Passwords do not match";
    return err;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError("");

    const validation = validate();
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    try {
      setLoading(true);

      const res = await registerVendor({
        businessName: form.businessName,
        ownerName: form.ownerName,
        email: form.email,
        password: form.password,
        phone: form.phone,
        location: form.location,
      });

      // ✅ THIS IS THE FIX
      login(
        {
          ...res.vendor,
          role: "vendor",
        },
        res.token
      );

      navigate("/vendor/dashboard");
    } catch (err) {
      setServerError(
        err.response?.data?.message || "Vendor registration failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-100 flex justify-center px-4 py-12">
      <div className="w-full max-w-md">

        <ErrorBanner message={serverError} />

        <h1 className="font-alexandria text-2xl font-semibold mb-2">
          Register Your Restaurant
        </h1>

        <p className="text-neutral-500 mb-8 text-sm">
          Join a community that saves meals, reduces waste, and spreads goodness.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <AuthInput
            placeholder="Restaurant Name"
            value={form.businessName}
            onChange={(e) =>
              setForm({ ...form, businessName: e.target.value })
            }
            error={errors.businessName}
          />

          <AuthInput
            placeholder="Owner Name"
            value={form.ownerName}
            onChange={(e) =>
              setForm({ ...form, ownerName: e.target.value })
            }
            error={errors.ownerName}
          />

          <AuthInput
            placeholder="Vendor Email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            error={errors.email}
          />

          <AuthInput
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
            error={errors.password}
          />

          <AuthInput
            type="password"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={(e) =>
              setForm({ ...form, confirmPassword: e.target.value })
            }
            error={errors.confirmPassword}
          />

          <AuthInput
            placeholder="Restaurant Location"
            value={form.location}
            onChange={(e) =>
              setForm({ ...form, location: e.target.value })
            }
          />

          <AuthInput
            placeholder="Phone Number"
            value={form.phone}
            onChange={(e) =>
              setForm({ ...form, phone: e.target.value })
            }
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-teal-500 text-white py-3 rounded-xl
              font-semibold hover:bg-teal-600 disabled:bg-neutral-400 transition"
          >
            {loading ? "Creating account..." : "Sign up"}
          </button>
        </form>

        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-neutral-300" />
          <span className="text-neutral-500 text-sm">Or</span>
          <div className="flex-1 h-px bg-neutral-300" />
        </div>

        <div className="flex flex-col gap-3">
          <GoogleButton />
          <AppleButton />
        </div>

        <p className="text-center text-sm text-neutral-600 mt-6">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/vendor/login")}
            className="text-teal-500 cursor-pointer font-medium"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}
