import { More } from "iconsax-react";
import React from "react";
import { Button } from "@nextui-org/react";

const RecentProjects = () => {
  return (
    <div className="bg-white shadow-1 rounded-xl px-5 py-6 col-span-8">
      <div className="flex items-center justify-between">
        <p className="body-large-bold">Recent Projects</p>
        <Button isIconOnly variant="light" radius="full">
          <More size="24" />
        </Button>
      </div>
    </div>
  );
};

export default RecentProjects;
