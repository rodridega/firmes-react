import React from "react";

export const WorkInfo = ({ description, client, year, title, type, images, setImagePreviewActive }) => {



  return (
    <div className="max-w-full w-full flex flex-col text-white order-3 md:order-2 my-4">

      <h3 className="text-4xl md:hidden"> {client} </h3>

      <div className="grid grid-cols-2 md:grid-cols-3 my-4 md:my-8 text-white text-sm md:text-3xl">

        <p>CLIENT: {client} </p>
        <p>YEARS: {year} </p>
        <p>TITLE: {title} </p>
        <p>TYPE: {type} </p>
        <p>COUNTRY: COLOMBIA</p>
        <p>FORMAT: 16:9</p>

      </div>

    </div>
  );
};
