import React from "react";
import { CreatorsNews } from "./CreatorsNews";

export const CreatorsLayout = () => {
  return (
    <div class="flex">
      <CreatorsNews />
      <div class="absolute right-96 top-60 text-white text-4xl">
        <ul class="mb-4">
          <h3 class="text-slate-400 font-light text-3xl">FILM/PHOTO</h3>
          <li>PIPE OTALORA</li>
          <li>KEFE</li>
          <li>DANI PIEDRAHITA</li>
        </ul>
        <ul class="mb-4">
          <h3 class="text-slate-400 font-light text-3xl">ILLUSTRATION</h3>
          <li>NICOALMA</li>
          <li>DEIMOSTYPE</li>
        </ul>
        <ul class="mb-4">
          <h3 class="text-slate-400 font-light text-3xl">MOTION GRAPHIC</h3>
          <li>CHRISTIAN</li>
          <li>TRUEXLOVE</li>
          <li>PERIPECHI</li>
        </ul>
      </div>
    </div>
  );
};
