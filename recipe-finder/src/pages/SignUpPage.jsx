import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const { signup } = useAuth();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await signup(email, password, username);
      navigate("/"); // Redirect to homepage after signup
    } catch (err) {
      setError("Failed to create an account. Please check your details.");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-primary text-center mb-6 mt-30">
        Sign Up
      </h1>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <form onSubmit={handleSignUp}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <button type="submit" className="w-full p-2 bg-primary text-white rounded hover:bg-[#A4B79B] font-bold">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
