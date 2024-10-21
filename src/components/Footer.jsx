import Spline from "@splinetool/react-spline";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useState } from "react";

const Footer = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  return (
    <footer className="relative w-full h-[400px] lg:h-[500px] ">
      {/* Spline 3D Scene */}
      <div className="absolute inset-0 ">
        <Spline scene="https://prod.spline.design/nRdniTFGhk8JDJLI/scene.splinecode" />
      </div>

      {/* Footer content */}
      <div className="relative z-10 h-full flex flex-col justify-end p-6 lg:p-8 text-center text-gray-200 font-neueMontrealmedium">
        <p className="mb-24 text-center text-5xl title2">
          Thank you for visiting! Until next time.
        </p>
        <p className="text-sm lg:text-base text-yellow-300">
          © All Rights Reserved.
        </p>

        <small className="flex items-center justify-center mt-2 text-2xl font-medium font-neueMontrealmedium text-yellow-300">
          Made with
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            className="mx-2"
          >
            <path
              fill="#988e9f"
              d="M5.719 14.75c-0.236 0-0.474-0.083-0.664-0.252l-5.060-4.498 5.341-4.748c0.412-0.365 1.044-0.33 1.411 0.083s0.33 1.045-0.083 1.412l-3.659 3.253 3.378 3.002c0.413 0.367 0.45 0.999 0.083 1.412-0.197 0.223-0.472 0.336-0.747 0.336zM14.664 14.748l5.341-4.748-5.060-4.498c-0.413-0.367-1.045-0.33-1.411 0.083s-0.33 1.045 0.083 1.412l3.378 3.003-3.659 3.252c-0.413 0.367-0.45 0.999-0.083 1.412 0.197 0.223 0.472 0.336 0.747 0.336 0.236 0 0.474-0.083 0.664-0.252zM9.986 16.165l2-12c0.091-0.545-0.277-1.060-0.822-1.151-0.547-0.092-1.061 0.277-1.15 0.822l-2 12c-0.091 0.545 0.277 1.060 0.822 1.151 0.056 0.009 0.11 0.013 0.165 0.013 0.48 0 0.904-0.347 0.985-0.835z"
            ></path>
          </svg>
          by Sai Dikshith.
        </small>

        <div
          className="absolute h-[7%] w-[11%] right-0 bottom-5 z-50 opacity-1 rounded-full bg-black cursor-grabbing"
          onMouseEnter={() => setShowAnimation(true)}
          onMouseLeave={() => setShowAnimation(false)}
        >
          <p>Keep Smiling</p>

          {showAnimation && (
            <div className="h-[200px] w-[200px] absolute bottom-[50px] right-3 ">
              <DotLottieReact
                src="../../public/files/smile.json"
                loop
                autoplay
              />
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
