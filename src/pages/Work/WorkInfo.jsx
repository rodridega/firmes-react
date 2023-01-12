import React from "react";

export const WorkInfo = () => {
  return (
    <section className="flex flex-col">
      <div className="flex justify-between items-center my-8">
        <div>
          <p className="text-white">CLIENT: MERESEF</p>
          <p className="text-white">YEARS: 2020</p>
        </div>
        <div>
          <p className="text-white">TITLE: SOLITO</p>
          <p className="text-white">TYPE: MUSIC VIDEO</p>
        </div>
        <div>
          <p className="text-white">COUNTRY: COLOMBIA</p>
          <p className="text-white">FORMAT: 16:9</p>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="w-2/6">
          <p className="text-sm text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            sollicitudin quam tristique dignissim convallis. Ut vitae malesuada
            eros. Quisque rhoncus lacus tristique finibus sollicitudin. Integer
            dapibus purus et turpis malesuada imperdiet. Sed pellentesque nunc a
            dapibus mattis. Nam sit amet ante at nisl vulputate iaculis. Vivamus
            pretium, felis a suscipit vehicula, tellus eros efficitur dolor, eu
            suscipit dolor metus dapibus ex. Quisque vel massa lacinia, iaculis
            nulla nec, feugiat ex. Sed ex sapien, dictum at euismod ut,
            tincidunt id urna. Sed sit amet sem lobortis nulla.
          </p>
        </div>
        <div className="flex justify-evenly items-center w-4/6">
          <div className="mx-2">
            <img src="https://via.placeholder.com/350x300" alt="" />
          </div>
          <div className="mx-2">
            <img src="https://via.placeholder.com/350x300" alt="" />
          </div>
          <div className="mx-2">
            <img src="https://via.placeholder.com/350x300" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
