import React from "react";
import { Button } from "@/components/ui/button";
import { RegisterDialog } from "@/components/register";
import { LoginDialog } from "@/components/login";

const Home = () => {
  return (
    <main className="flex flex-col justify-center items-center h-screen bg-background font-main p-4">
      <div className="lg:w-2/3 w-full flex flex-col gap-8 justify-center items-center">
        <h2 className="text-7xl text-foreground text-center text-balance">
          Welcome to Code Sculptor!
        </h2>
        <div className="flex lg:flex-row flex-col gap-4 w-full items-center justify-center">
          <RegisterDialog />
          <LoginDialog />
        </div>
      </div>
    </main>
  );
};

export default Home;
