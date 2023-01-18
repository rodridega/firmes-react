import React from "react";
import { Outlet } from "react-router-dom";
import { CreatorOfMonth } from "../../pages/Home/CreatorOfMonth";
import { Header } from "./Header";
import { MessageBar } from "../../pages/Home/MessageBar";
import { SideBar } from "./SideBar";

export const FirmesLayout = () => {


  return (
    <div className="h-full">
      <Header />
      <main class="w-screen max-w-full flex">
        
        <Outlet />
        <SideBar/>
      </main>
      <MessageBar />
    </div>
  );
};
 