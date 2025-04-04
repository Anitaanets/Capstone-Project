import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    return <div className="text-center mt-10 text-lg font-semibold">Please log in to view your profile.</div>;
  }

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  // Format the date nicely
  const formatDate = (isoString) => {
    if (!isoString) return "Unknown";
    const date = new Date(isoString);
    return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md text-center mt-30 w-[70%] sm:w-auto">
      <div className="flex flex-col items-center ">
        <img 
          src="https://via.placeholder.com/100" 
          alt="Profile" 
          className="w-24 h-24 rounded-full border-4 border-gray-300 mb-4"
        />
        <h2 className="text-2xl font-bold text-primary mb-2">Hi, {user.username || "User"}</h2>
        <p className="text-gray-600">Member since: {formatDate(user.memberSince)}</p>
      </div>

      <div className="mt-6 flex justify-center gap-4">
        <Link to="/edit-profile" className="px-4 py-2 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600 transition">
          Edit Profile
        </Link>
        <button 
          onClick={handleLogout} 
          className="px-4 py-2 bg-red-500 text-white rounded-md font-semibold hover:bg-red-600 transition"
        >
          Log Out
        </button>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold text-gray-700">Your Saved Recipes</h3>
        <p className="text-gray-500 text-sm">You haven't saved any recipes yet.</p>
      </div>
    </div>
  );
};

export default ProfilePage;
