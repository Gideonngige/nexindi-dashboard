// Pages/Signin.js
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { API_URL } from "../Env/Env";
import Swal from "sweetalert2";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(`${API_URL}/signin/`, {
        email,
        password,
      });

      if (response.data.shopkeeper.role !== "admin") {
        Swal.fire({
          icon: "error",
          title: "Access Denied",
          text: "Only admins can log in.",
        });
        setLoading(false);
        return;
      }

      localStorage.setItem("token", response.data.access_token);
      localStorage.setItem("user", JSON.stringify(response.data.shopkeeper));

      navigate("/dashboard");

    } catch (err) {
      alert(err);
      Swal.fire(
        "Error",
        err.response?.data?.message || "Login failed. Try again.",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 px-4">

      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8">

        {/* Brand */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-700">
            NEXINDI TECH
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Admin Dashboard Login
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Email */}
          <div>
            <label className="text-sm text-gray-600 font-medium">
              Email Address
            </label>

            <div className="relative mt-1">
              <Mail
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-gray-600 font-medium">
              Password
            </label>

            <div className="relative mt-1">
              <Lock
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />

              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
                className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />

              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-blue-600"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </span>
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-700 text-white py-2.5 rounded-lg font-semibold hover:bg-blue-800 transition flex justify-center items-center gap-2 disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>

        </form>

        {/* Footer */}
        <div className="text-center mt-8 text-sm text-gray-500">
          © {new Date().getFullYear()} VinCab
        </div>

      </div>

      <div className="absolute bottom-3 text-white text-xs">
        Version 1.0.0
      </div>

    </div>
  );
};

export default Signin;