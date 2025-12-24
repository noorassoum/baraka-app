import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext"; // ✅ ADD THIS
import AuthInput from "../components/AuthInput";
import ErrorBanner from "../components/ErrorBanner";
import { GoogleButton, AppleButton } from "../components/SocialButtons";
import { loginVendor } from "../auth.api";

export default function VendorLogin() {
    const navigate = useNavigate();
    const { login } = useAuth(); // ✅ ADD THIS

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});
    const [serverError, setServerError] = useState("");
    const [loading, setLoading] = useState(false);

    const validate = () => {
        const err = {};
        if (!form.email.includes("@")) err.email = "Invalid email";
        if (!form.password) err.password = "Password is required";
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

            const res = await loginVendor(form);

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
                err.response?.data?.message || "Login failed"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-neutral-100 flex justify-center px-4 py-10">
            <div className="w-full max-w-md">

                <ErrorBanner message={serverError} />

                {/* Header */}
                <div className="mb-8">
                    <h1 className="font-alexandria text-displayMedium font-semibold text-neutral-900">
                        Welcome back!
                    </h1>
                    <p className="text-neutral-600 mt-2">
                        Log in to manage your restaurant and start sharing meals.

                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <AuthInput
                        placeholder="Vendor email"
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

                    <div className="flex justify-between items-center text-sm">
                        <label className="flex items-center gap-2 text-neutral-600">
                            <input type="checkbox" className="accent-teal-500" />
                            Remember Me
                        </label>

                        <span className="text-teal-600 cursor-pointer">
                            Forget Password?
                        </span>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-teal-500 text-white py-3 rounded-xl
              font-semibold hover:bg-teal-600 disabled:bg-neutral-400 transition"
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>

                {/* Divider */}
                <div className="flex items-center gap-3 my-6">
                    <div className="flex-1 h-px bg-neutral-300" />
                    <span className="text-neutral-500 text-sm">Or</span>
                    <div className="flex-1 h-px bg-neutral-300" />
                </div>

                {/* Social login */}
                <div className="flex flex-col gap-3">
                    <GoogleButton />
                    <AppleButton />
                </div>

                {/* Footer */}
                <p className="text-center text-neutral-600 text-sm mt-8">
                    Don’t have an account?{" "}
                    <Link
                        to="/vendor/register"
                        className="text-teal-600 font-semibold"
                    >
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
}
