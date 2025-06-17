// src/components/Dashboard.jsx
const Dashboard = ({ user }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold">Welcome, {user.email}</h2>
      <p className="mt-2">Your dashboard will show your progress, favorites, and subscription status.</p>
    </div>
  );
};

export default Dashboard;