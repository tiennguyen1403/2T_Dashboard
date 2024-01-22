import React from "react";
import Link from "next/link";

const Home: React.FC = () => {
  return (
    <div>
      <h1>Hello world</h1>
      <button>
        <Link href="/dashboard">Dashboard</Link>
      </button>
    </div>
  );
};

export default Home;
