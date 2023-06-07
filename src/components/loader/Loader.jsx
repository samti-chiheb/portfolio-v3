import React from "react";
import "./index.css";

function Loader() {
  return (
    <div className="svg-container">
      <svg
        id="logo2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 46.29 31.98"
        width="46.290000915527344"
        height="31.979999542236328"
      >
        <g id="logo">
          <path
            className="cls-1 svg-elem-1"
            d="m23.14,2.01l-11.07,7.86L1,2.01v28s18.52-13.58,44.29,0V1.98l-10.42,7.66-11.73-7.63Z"
          ></path>
          <polyline
            className="cls-1 svg-elem-2"
            points="12.07 9.87 23.14 18.31 23.14 17.91 23.14 2.01 23.14 18.29"
          ></polyline>
          <line
            className="cls-1 svg-elem-3"
            x1="1"
            y1="17.31"
            x2="11.47"
            y2="24.95"
          ></line>
          <line
            className="cls-1 svg-elem-4"
            x1="34.87"
            y1="9.64"
            x2="44.92"
            y2="17.06"
          ></line>
        </g>
      </svg>
    </div>
  );
}

export default Loader;
