import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col items-center min-h-screen justify-center">
      <h2 className="">Login</h2>
      <form className="mt-5 flex flex-col gap-3">
        <Input placeholder="email" required/>
        <Input placeholder="password" type="password" required/>
        <Input placeholder="Confirm password" type="password" required/>
        <Button variant={"default"}>Submit</Button>
      </form>
      <Link href={"/signup"}  className="mt-2 text-sky-500">Create new account</Link>

    </div>
  );
};

export default page;
