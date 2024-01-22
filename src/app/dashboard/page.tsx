import React from "react";
import Link from "next/link";

const Dashboard: React.FC = () => {
  return (
    <div>
      <p>Dashboard</p>
      <button>
        <Link href="/">Back to home</Link>
      </button>
    </div>
  );
};

export default Dashboard;
