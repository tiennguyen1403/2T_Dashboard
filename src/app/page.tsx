import React from "react";
import Link from "next/link";
import RecentProjects from "./components/RecentProjects";

const Home: React.FC = () => {
  return (
    <div className="grid grid-cols-12 grid-rows-1 gap-6">
      <RecentProjects />
    </div>
  );
};

export default Home;
