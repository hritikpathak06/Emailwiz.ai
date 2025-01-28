import { Button } from "@/components/ui/button";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomePage = async () => {
  const current_user = await currentUser();
  return (
    <div className=" px-10 md:px-28 lg:px-40 xl:px-56 flex flex-col items-center justify-center mt-24">
      <h2 className=" text-center font-extrabold text-2xl md:text-5xl ">
        AI-Powered
        <span className=" text-blue-500 ml-4">Email Templates Generator</span>
      </h2>
      <p className=" text-center mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea tenetur
        recusandae, porro ipsum, libero tempore, impedit odit nostrum corporis
        dolorem eum quo laboriosam totam ab. Consectetur nesciunt provident
        excepturi doloribus?
      </p>
      <div className=" flex items-center gap-5 mt-5">
        <Link href={"/demo"} target="_blank">
          <Button variant={"outline"}>Try Demo</Button>
        </Link>
        <Link href={current_user ? "/dashboard" : "/login"}>
          <Button>Get Started</Button>
        </Link>
      </div>
      <Image
        className=" border mt-12 rounded-md"
        src={"/logo.png"}
        height={800}
        width={800}
        alt="home_page"
      />
    </div>
  );
};

export default HomePage;
