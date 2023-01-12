import React from "react";
import { Outlet } from "react-router-dom";
import { CreatorOfMonth } from "./CreatorOfMonth";
import { Header } from "./Header";
import { MessageBar } from "./MessageBar";
import { SideBar } from "./SideBar";

export const FirmesLayout = () => {


  return (
    <div className="h-full">
      <Header />
      <main class="w-screen max-w-full flex flex-col">
        {/* <CreatorOfMonth /> */}
        <SideBar/>
        <Outlet />
      </main>
      <MessageBar />
    </div>
  );
};
