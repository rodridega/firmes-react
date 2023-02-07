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
    <header className="hidden lg:flex flex-col text-white z-10 w-full p-4 bg-firmes-black">
      <nav>
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-96 md:mr-36">
            <Link to={"/"}>
              <img src="/src/assets/logo.png" alt="logo" className="w-full" />
            </Link>
          </div>
          <div className="flex justify-between w-full">
            <div className="flex ">
              <div className="w-8 flex justify-center items-center">
                <img src="/src/assets/Ellipse 1.png" />
              </div>
              <div className="w-8 flex justify-center items-center">
                <img src="/src/assets/Subtract.png" />
              </div>
              <div className="w-8 flex justify-center items-center">
                <img src="/src/assets/Ellipse 2.png" />
              </div>
              
              <h3 className="text-2xl mx-4 md:text-3xl "> {zodiac?.sign} </h3>
              <div className="w-8 flex justify-center items-center">
                <img src={zodiac?.img} />
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl">
              {/* {coords?.latitud}/{coords?.longitud} */}
              N4°37'56.656''/W74°4'33.145''
            </h3>
            <div className="flex gap-4">
              <h2 className="text-2xl md:text-3xl">
                {" "}
                {date.day}/{date.month + 1}/{date.year}{" "}
              </h2>
              <h2 className="text-2xl md:text-3xl">
                {date.hour}:{date.minutes}
              </h2>

            </div>
          </div>
        </div>
        {/* <div className="flex">
          <h2 className="mx-2 text-2xl">
            {date.hour}:{date.minutes}
          </h2>
          <h2 className="text-2xl">
            {" "}
            {date.day}/{date.month + 1}/{date.year}{" "}
          </h2>
        </div> */}
      </nav>
    </header>
  );
};
