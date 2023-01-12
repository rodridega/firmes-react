import React from "react";

export const ChillLayout = () => {
  return (
    <section class="w-full ">
      <div class="w-full h-full flex justify-center items-center	">
        <iframe
          class="w-1/2 h-1/2"
          src="https://www.youtube.com/embed/U6DM6bwbGvk"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  );
};
