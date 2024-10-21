import { Tilt } from "react-tilt";
import IconCloudDemo from "./ui/IconCloudDemo";

const Skills = () => {
  const techImg = [
    { img: "/images/html.png", title: "Html" },
    { img: "/images/css3.png", title: "Css" },
    { img: "/images/javascript.png", title: "JavaScript" },
    { img: "/images/react.png", title: "React" },
    { img: "/images/figma.png", title: "Figma" },
    { img: "/images/tailwind.png", title: "Tailwind" },
    { img: "/images/java.png", title: "Java" },
  ];

  const otherImg = [
    { img: "/public/images/adobe-after-effects.png", title: "After Effects" },
    { img: "/public/images/adobe-premier.png", title: "Premier Pro" },
    { img: "/public/images/adobe-photoshop.png", title: "PhotoShop" },
    { img: "/public/images/blender.png", title: "Blender" },
  ];

  return (
    <div className="relative h-screen  ">
      {/* Background IconCloudDemo */}
      <h1 className="title2 text-6xl font-bold absolute mt-[50px] left-[45%]  text-center">
        Skills
      </h1>

      {/* <div className="absolute inset-0 z-[10] flex justify-center items-center">
        <IconCloudDemo />
      </div> */}
      <div className="absolute top-[14%] left-[33%]  ">
        <IconCloudDemo />
      </div>

      {/* Content */}

      <div className="relative z-10 flex flex-col items-center justify-center h-full ">
        <h1 className="text-4xl font-bold absolute left-[13%] top-[18%]">
          Tech Skills
        </h1>
        <h1 className="text-4xl font-bold absolute right-[13%] top-[18%]">
          Other Skills
        </h1>

        <div className="grid grid-cols-3 gap-[15px] p-4  absolute left-[7%] top-[25%] ">
          {techImg.map((image, index) => (
            <Tilt key={index} options={{ scale: 1.05 }}>
              <div className="w-25 h-25 flex p-2 items-center justify-center rounded-[15px] bg-[#ffffff] shadow-[ -11px_-11px_21px_#a6a6a6,11px_11px_21px_#ffffff]">
                <img
                  src={image.img}
                  alt={image.title}
                  className="w-20 h-20 object-contain"
                />

                <div className="tooltip-container absolute inset-0 flex justify-center items-center">
                  <div className="tooltip-content">{image.title}</div>
                </div>
              </div>
            </Tilt>
          ))}
        </div>

        {/* Other Skills images  */}
        <div className="grid grid-cols-3 gap-[15px] p-4  absolute right-[7%] top-[25%] ">
          {otherImg.map((image, index) => (
            <Tilt key={index} options={{ scale: 1.05 }}>
              <div className="w-25 h-25 flex p-2 items-center justify-center rounded-[15px] bg-[#ffffff] shadow-[ -11px_-11px_21px_#a6a6a6,11px_11px_21px_#ffffff]">
                <img
                  src={image.img}
                  alt={image.title}
                  className="w-20 h-20 object-contain"
                />
                <div className="tooltip-container absolute inset-0 flex justify-center items-center">
                  <div className="tooltip-content">{image.title}</div>
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
