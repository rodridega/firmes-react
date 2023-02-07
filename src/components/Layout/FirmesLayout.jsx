import React from "react";
import { Outlet } from "react-router-dom";
import { Header,SideBar,HeaderMobile } from "./index";

export const FirmesLayout = () => {


  return (
    <div className="h-full">
      
        <Header />
        <HeaderMobile />
      <main className="w-screen max-w-full flex justify-center items-center px-4">
        <Outlet />
        <SideBar />
      </main>
      {/* <MessageBar /> */}
    </div>
  );
};
