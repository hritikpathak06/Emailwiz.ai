import { SignIn } from "@clerk/nextjs";
import React from "react";

const page = () => {
  return (
    <div className=" py-10 flex items-center justify-center">
      <SignIn signUpUrl="/register"/>
    </div>
  );
};

export default page;
