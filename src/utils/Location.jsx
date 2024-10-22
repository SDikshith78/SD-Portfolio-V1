import ArrowIcon from "./ArrowIcon";
import "./styles.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
const Location = () => {
  return (
    <div >

      <div className="hanger flex justify-center items-center font-neueMontrealmedium font-bold">

        <p className="text-white text-left text-[1.3em]">
          <span>Located </span>
          <span>in the </span>
          <span>INDIA</span>
        </p>

        <svg
          
          viewBox="0 0 300 121"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <title>Combined Shape</title>
          <g
            id="Page-1"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g id="Artboard" transform="translate(0, -366)" fill="#1C1D20">
              <g
                id="Group"
                transform="translate(149.816828, 426.633657) rotate(90) translate(-149.816828, -426.633657) translate(89.816828, 276.816828)"
              >
                <g
                  id="Hanger"
                  transform="translate(60, 149.816828) rotate(-90) translate(-60, -149.816828) translate(-89.816828, 89.816828)"
                >
                  <path
                    d="M239.633657,0 C272.770742,1.0182436e-15 299.633657,26.862915 299.633657,60 C299.633657,93.137085 272.770742,120 239.633657,120 L0,120 L0,0 L239.633657,0 Z M239.633657,18.7755102 C216.866,18.7755102 198.409167,37.232343 198.409167,60 C198.409167,82.767657 216.866,101.22449 239.633657,101.22449 C262.401314,101.22449 280.858147,82.767657 280.858147,60 C280.858147,37.232343 262.401314,18.7755102 239.633657,18.7755102 Z"
                    id="Combined-Shape"
                  />
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
      
      <div >
        <DotLottieReact
          src="/files/location.json"
          loop
          autoplay
          className="absolute h-[13%] w-[13%] top-[43.5%] left-[8%]" 
        />
      </div>
      <div className="flex justify-center mt-8 relative">
        <ArrowIcon />
      </div>

    </div>
  );
};

export default Location;
