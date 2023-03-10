import React, { useEffect } from "react";

export const MouseTracker = () => {
  useEffect(() => {
    const tracker = document.querySelector(".tracker");
    document.body.addEventListener("mousemove", (e) => {
      if(!tracker) {
        return
      }
      tracker.style.left = `${e.clientX}px`;
      tracker.style.top = `${e.clientY}px`;
    });
  }, []);

  return (
    <div className="hidden lg:tracker">
      <svg
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="32px"
        height="32px"
        viewBox="0 0 32 32"
        enableBackground="new 0 0 32 32"
        xmlSpace="preserve"
      >
        <polygon opacity="0.8" fill="#A4FFBE" points="2,31 29,31 16,6 15,6 " />
        <g>
          <path
            fill="#BFBFBF"
            d="M15.5,17.5c-4.003,0-8.991-0.668-12.056-3.547c-0.484-0.455-0.966-1.031-1.056-1.712
		c-0.132-0.994,0.88-1.712,1.628-2.147c0.431-0.25,4.209-2.032,4.509-1.513c1.831,3.167,6.643,3.309,9.798,2.655
		c1.402-0.29,2.878-0.889,3.774-2.06c0.322-0.421,0.281-0.712,0.863-0.575c0.729,0.171,1.45,0.385,2.153,0.641
		c1.141,0.415,3.43,1.249,3.509,2.735c0.064,1.193-1.207,2.186-2.087,2.777C23.364,16.89,19.241,17.5,15.5,17.5z"
          />
        </g>
        <g>
          <path
            fill="#ACF0F2"
            d="M15.5,11.5c-1.972,0-4.164-0.287-5.783-1.517C9.252,9.63,8.432,8.937,8.54,8.278
		c0.409-2.506,1.526-3.29,3.679-4.779c3.218-2.227,7.068-0.513,8.812,2.63c0.624,1.125,1.058,0.36,1.335,1.615
		c0.173,0.786,0.034,1.171-0.544,1.771C20.235,11.156,17.663,11.5,15.5,11.5z"
          />
        </g>
        <path
          fill="none"
          stroke="#4D5152"
          strokeLinecap="round"
          strokeMiterlimit="10"
          d="M8.5,8.5c0,0,1-6,7-6s7,6,7,6s-1,3-7,3
	S8.5,8.5,8.5,8.5z"
        />
        <path
          fill="none"
          stroke="#4D5152"
          strokeLinecap="round"
          strokeMiterlimit="10"
          d="M22.5,8.5c0,0,5,1,6,3s-4,6-13,6s-14-4-13-6
	s6-3,6-3"
        />
      </svg>
    </div>
  );
};
