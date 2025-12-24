import { useState } from "react";
import AuthInput from "../components/AuthInput";
import ErrorBanner from "../components/ErrorBanner";
import { GoogleButton, AppleButton } from "../components/SocialButtons";
import { registerCustomer } from "../auth.api";
import { useAuth } from "../../../context/AuthContext";

export default function Register() {
    const { login } = useAuth();

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({});
    const [serverError, setServerError] = useState("");
    const [loading, setLoading] = useState(false);

    const validate = () => {
        let err = {};

        if (!form.name) err.name = "Name is required";
        if (!form.email.includes("@")) err.email = "Invalid email format";
        if (form.password.length < 6) err.password = "Minimum 6 characters";
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

            const res = await registerCustomer(form);

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
        <div className="flex flex-col items-center px-6 py-10 w-full max-w-md mx-auto">
            <ErrorBanner message={serverError} />

            <div className="flex flex-col items-start mb-6">
                <h1 className="font-alexandria font-bold text-displaySmall text-neutral-900">
                    Start Your Sharing Journey
                </h1>

                <p className="text-bodyMedium text-neutral-600 mt-1">
                    Join a community that saves meals, reduces waste, and spreads goodness.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
                <AuthInput
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    error={errors.name}
                />

                <AuthInput
                    placeholder="Enter your email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    error={errors.email}
                />

                <AuthInput
                    type="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
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

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-teal-500 text-white py-3 rounded-xl text-titleMedium font-semibold 
          hover:bg-teal-600 disabled:bg-neutral-400 transition"
                >
                    {loading ? "Creating Account..." : "Sign up"}
                </button>
            </form>

            <div className="w-full text-center text-neutral-500 my-4">Or</div>

            <div className="w-full flex flex-col gap-4 mt-4">
                <GoogleButton />
                <AppleButton />
            </div>

            <p className="text-neutral-600 text-sm mt-6">
                Already have an account?{" "}
                <a href="/login" className="text-teal-500 font-semibold">
                    Login
                </a>
            </p>
        </div>
    );
}
