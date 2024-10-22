import React from "react";
import "./style.css";
import HoverVideoPlayer from "react-hover-video-player";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const ProjectsShowCase = ({ title, video1, video2, img1, img2, p1, p2, gitrepo1, gitrepo2, host1, host2 }) => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center">
      <h1 className="title w-full flex justify-center mb-10 font-neueMontrealbold text-6xl font-bold mt-11">
        {title}
      </h1>

      {/* Container for the SVG and content */}
      <div className="relative mt-[3%] w-[1300px] h-[511px] bottom-5">
        {/* SVG border layout with the background clip effect on the stroke */}

        <svg
          width="1300"
          height="511"
          viewBox="0 0 1300 511"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0"
          style={{
            filter: "drop-shadow(-25px 35px 8px #818080 )",
          }}
        >
          {/* Define the pattern with the background image */}
          <defs>
            <pattern
              id="imagePattern"
              patternUnits="userSpaceOnUse"
              width="1300"
              height="511"
            >
              <image
                href="https://ik.imagekit.io/sheryians/BackEnd%20Donation/maskImage_W7a6T_MXGY.png?updatedAt=1715856788796"
                x="0"
                y="0"
                width="1300"
                height="511"
                preserveAspectRatio="none"
              />
            </pattern>
          </defs>

          {/* Applying the pattern as a stroke */}
          <path
            d="M814 5.0033H69C20.36 7.06362 5.87687 16.4256 5 48.5033V470.003C10.4446 494.464 17.5 506.503 69 506.503H814C841.5 506.503 858.857 505.157 857.5 480.503V420.003C857.5 396.003 899 396.003 899 396.003L1246.5 387.003C1280.93 390.473 1290.8 380.913 1295 347.503V173.003C1292.86 141.98 1289.7 125.834 1246.5 121.003H899C869.405 126.186 856.607 124.579 857.5 93.5033V38.0033C855.478 15.9325 852.354 4.77943 814 5.0033Z"
            stroke="url(#imagePattern)"
            strokeWidth="9"
          />
        </svg>

        {/* Content inside the SVG */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* HoverVideoPlayer */}
          <HoverVideoPlayer
            className="rounded-lg overflow-hidden w-[50%] h-[70%] -left-[18%]"
            videoSrc={video1}
            pausedOverlay={
              <img
                src={img1}
                alt="Pokemon"
                className="rounded-lg"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            }
            videoStyle={{
              borderRadius: "1rem",
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
          />

          {/* Lottie Animation */}
          <DotLottieReact
            src="/files/hideandseek.json"
            loop
            autoplay
            className="absolute top-[66%] right-[35%] w-[200px] h-[200px] z-10"
          />
          <DotLottieReact
            src="/files/watching.json"
            loop
            autoplay
            className="absolute top-[16%] -left-[5%] w-[200px] h-[200px] z-10"
          />
        </div>

        {/* Project info (p tag) */}
        <div className="projectinfo absolute flex flex-col justify-center items-center bg-orange-300 p-5 rounded-lg h-[200px] w-[350px] top-1/2 right-[4%] transform -translate-y-1/2">
          <p className="text-center text-black text-sm font-semibold mb-4">
            {p1}
          </p>
          <div className="  flex justify-center items-center object-cover mt-3">
            <div className="flex gap-8 justify-center items-center object-cover">
              <a href={gitrepo1} target="_blank">
                <img
                  src="/images/githhub_link.png"
                  alt="GitHub Link"
                  className="h-[40px] w-[40px] rounded-md "
                />
              </a>
              <a href={host1} target="_blank">
                <img
                  src="/images/localhost_link.png"
                  alt="Localhost Link"
                  className="h-[40px] w-[40px] rounded-md"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* second border  */}

      <div className="relative mt-[3%] w-[1300px] h-[511px] bottom-7">
        <svg
          width="1300"
          height="512"
          viewBox="0 0 1300 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            filter: "drop-shadow(25px 35px 8px #818080 )",
          }}
        >
          <defs>
            <pattern
              id="imagePatterns"
              patternUnits="userSpaceOnUse"
              width="1300"
              height="511"
            >
              <image
                href="https://i.pinimg.com/564x/d9/54/87/d95487ffab31b9722b12eaf0e5709494.jpg"
                x="0"
                y="0"
                width="1300"
                height="511"
                preserveAspectRatio="none"
              />
            </pattern>
          </defs>
          <path
            d="M485.666 506.281L1230.67 507.274C1279.31 505.279 1293.8 495.936 1294.72 463.859L1295.28 42.3598C1289.87 17.8917 1282.83 5.8432 1231.33 5.77456L486.334 4.78166C458.834 4.74501 441.475 6.06819 442.8 30.7237L442.719 91.2236C442.687 115.224 401.187 115.168 401.187 115.168L53.6753 123.705C19.2527 120.189 9.36816 129.736 5.12271 163.14L4.89014 337.64C6.99174 368.667 10.1281 384.817 53.3208 389.705L400.821 390.168C430.423 385.025 443.219 386.649 442.284 417.723L442.21 473.223C444.203 495.297 447.311 506.454 485.666 506.281Z"
            stroke="url(#imagePatterns)"
            strokeWidth="9"
          />
        </svg>
        {/* Content inside the SVG */}

        <div className="absolute inset-0 flex items-center justify-center">
          {/* HoverVideoPlayer */}

          <HoverVideoPlayer
            className="rounded-lg overflow-hidden w-[50%] h-[70%] -right-[18%]"
            videoSrc={video2}
            pausedOverlay={
              <img
                src={img2}
                alt="Pokemon"
                className="rounded-lg"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            }
            videoStyle={{
              borderRadius: "1rem",
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
          />
          <DotLottieReact
            src="/files/hideandseek.json"
            loop
            autoplay
            className="absolute top-[66%] left-[35%] w-[200px] h-[200px] z-10"
          />
          <DotLottieReact
            src="/files/watching.json"
            loop
            autoplay
            className="absolute top-[16%] -right-[5%] w-[200px] h-[200px] z-10 transform scale-x-[-1]"
          />
        </div>

        {/* Project info (p tag) */}
        <div className="projectinfo absolute flex flex-col justify-center items-center bg-orange-300 p-5 rounded-lg h-[200px] w-[350px] top-1/2 left-[4%] transform -translate-y-1/2">
          <p className="text-center text-black text-sm font-semibold mb-4">
            {p2}
          </p>
          <div className="  flex justify-center items-center object-cover mt-3">
            <div className="flex gap-8 justify-center items-center object-cover">
              <a href={gitrepo2} target="_blank">
                <img
                  src="/images/githhub_link.png"
                  alt="GitHub Link"
                  className="h-[40px] w-[40px] rounded-md "
                />
              </a>
              <a href={host2} target="_blank">
                <img
                  src="/images/localhost_link.png"
                  alt="Localhost Link"
                  className="h-[40px] w-[40px] rounded-md"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsShowCase;
