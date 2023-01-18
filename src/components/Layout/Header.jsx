import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getZodiac } from "../../helpers/getZodiac";

export const Header = () => {
  const [date, setDate] = useState({
    day: null,
    month: null,
    year: null,
    hour: null,
    minutes: null,
  });
  const [zodiac, setZodiac] = useState(null);

  const [coords, setCoords] = useState({
    latitud: null,
    longitud: null,
  });

  const checkTime = (i) => {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  };

  const startTime = () => {
    let today = new Date();

    setDate({
      day: today.getDate(),
      month: today.getMonth(),
      year: today.getFullYear(),
      hour: today.getHours(),
      minutes: checkTime(today.getMinutes()),
    });
  };

  const success = (pos) => {
    let crd = pos.coords;
    setCoords({ latitud: crd.latitude, longitud: crd.longitude });
  };
  const error = (err) => {
    console.warn("ERROR(" + err.code + "): " + err.message);
  };

  const getCoords = () => {
    const geo = navigator.geolocation;
    setCoords(geo.getCurrentPosition(success, error));
  };

  useEffect(() => {
    startTime();
    setInterval(startTime(), 5000);
    getCoords();
  }, []);

  useEffect(() => {
    setZodiac(getZodiac(date.month, date.day));
  }, []);

  return (
    <header class="flex flex-col text-white z-10 w-full p-4 bg-firmes-black">
      <div class="flex flex-col md:flex-row items-center">
        <div class="w-full md:w-96 md:mr-36">
          <Link to={"/"}>
            <img src="/src/assets/logo.png" alt="logo" class="w-full" />
          </Link>
        </div>
        <div class="flex justify-between w-full">
          <h3 class="text-2xl md:text-3xl"> {zodiac} </h3>
          <h3 class="text-2xl md:text-3xl">
            {coords?.latitud}/{coords?.longitud}
          </h3>
          <div className="flex gap-4">
            <h2 class="text-2xl md:text-3xl">
              {" "}
              {date.day}/{date.month + 1}/{date.year}{" "}
            </h2>
            <h2 class="text-2xl md:text-3xl">
              {date.hour}:{date.minutes}
            </h2>

          </div>
        </div>
      </div>
      <div class="flex">
        <h2 class="mx-2 text-2xl">
          {date.hour}:{date.minutes}
        </h2>
        <h2 class="text-2xl">
          {" "}
          {date.day}/{date.month + 1}/{date.year}{" "}
        </h2>
      </div>
    </header>
  );
};
