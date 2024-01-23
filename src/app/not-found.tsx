"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@nextui-org/react";

const NotFound = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <img src="not-found.png" width={900} />
      <Link href="/">
        <Button className="bg-primary-600">
          <span className="body-large-bold text-white">Back to Home</span>
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
