import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);  
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); 
    setError(""); 

    try {
      await login(email, password);
      navigate("/"); 
    } catch (err) {
      setError("Failed to log in. Check your credentials.");
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="p-6 mt-20">
      <h1 className="text-3xl font-bold text-primary text-center mb-6">Login</h1>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <form onSubmit={handleLogin}>
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
        <button 
          type="submit" 
          className="w-full p-2 bg-primary text-white rounded font-bold hover:bg-[#A4B79B]" 
          disabled={loading}  // Disable the button when loading
        >
          {loading ? "Loading..." : "Login"} {/* Display loading text */}
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
