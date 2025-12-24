import { useState } from "react";
import AuthInput from "../components/AuthInput";
import ErrorBanner from "../components/ErrorBanner";
import { GoogleButton, AppleButton } from "../components/SocialButtons";
import { loginCustomer } from "../auth.api";
import { useAuth } from "../../../context/AuthContext";

export default function Login() {
    const { login } = useAuth();

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});
    const [serverError, setServerError] = useState("");
    const [loading, setLoading] = useState(false);

    const validate = () => {
        let err = {};
        if (!form.email.includes("@")) err.email = "Invalid email format";
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

            const res = await loginCustomer(form);

            // ✅ save auth state
            login(
                { ...res.customer, role: "customer" },
                res.token
            );

            // ❌ NO manual redirect
            // AppRouter will handle routing based on role
        } catch (err) {
            setServerError(err.response?.data?.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center py-10 w-full max-w-md mx-auto">
            <ErrorBanner message={serverError} />

            <div className="w-full px-6">
                {/* Header */}
                <div className="mb-6">
                    <h1 className="font-alexandria text-displayMedium font-semibold">
                        Good to see you again!
                    </h1>

                    <p className="text-neutral-600 text-sm mt-2 max-w-[260px] leading-snug">
                        Log in to explore meals near you and start sharing.
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <AuthInput
                        placeholder="Enter your email"
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

                    <div className="flex items-center justify-between w-full mt-1">
                        {/* Remember Me */}
                        <label className="flex items-center gap-2 cursor-pointer select-none">
                            <input type="checkbox" className="checkbox-clean" />
                            <span className="text-neutral-700 text-sm">Remember Me</span>
                        </label>

                        {/* Forgot Password */}
                        <a
                            href="/forgot-password"
                            className="text-teal-500 text-sm font-medium hover:underline"
                        >
                            Forgot Password?
                        </a>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-teal-500 text-white py-3 rounded-xl
              text-titleMedium font-semibold
              hover:bg-teal-600 disabled:bg-neutral-400 transition"
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>

                {/* OR Divider */}
                <div className="text-center text-neutral-500 my-6">Or</div>

                {/* Social Buttons */}
                <div className="flex flex-col gap-4">
                    <GoogleButton />
                    <AppleButton />
                </div>

                {/* Footer */}
                <p className="text-neutral-600 text-sm text-center mt-6">
                    Don’t have an account?{" "}
                    <a href="/register" className="text-teal-500 font-semibold">
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    );
}
