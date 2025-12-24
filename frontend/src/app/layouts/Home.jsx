import { useAuth } from "../../context/AuthContext";

export default function Home() {
  const { user, logout } = useAuth();

  return (
    <div style={{ padding: 40 }}>
      <h1>Welcome 🎉</h1>
      <p>You are logged in as: {user?.email}</p>

      <button onClick={logout}>
        Logout
      </button>
    </div>
  );
}
