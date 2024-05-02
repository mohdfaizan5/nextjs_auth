"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";

const page = () => {
  // console.log(process.env)
  return (
    <div className="flex flex-col items-center min-h-screen justify-center">
      <h2 className="">Signup</h2>
      <form className="mt-5 flex flex-col gap-3">
        <Input placeholder="email" required/>
        <Input placeholder="password" type="password" required/>
        <Button>Submit</Button>
      </form>
      <Link href={"/login"} className="mt-2 text-sky-500">Already have an account</Link>
    </div>
  );
};

export default page;
