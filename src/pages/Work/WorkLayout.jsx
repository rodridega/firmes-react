import React from "react";
import { WorkGallery, WorkInfo, WorkPreview } from "./index";

export const WorkLayout = () => {
  return (
    <div className=" top-1/4 p-8 bg-firmes-black">
      <WorkPreview />
      <WorkInfo />
      <WorkGallery />
    </div>
  );
};
