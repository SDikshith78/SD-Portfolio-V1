
import Spline from "@splinetool/react-spline";
import "./style.css"


const Resume = () => {
  return (
    <div className="bg h-screen w-screen flex">
      <div className="flex-1 flex justify-center items-start flex-col pl-10">
          <p className="rainbow-text">
            Explore my  <br /> professional journey
          </p>
        </div>
      <div className=" w-screen  flex justify-center items-center absolute z-10 pl-[21em] pt-25">
        <div className="h-[50px] w-[150px] bg-[#D5F5E6] absolute bottom-3 right-[24.7%]"></div>
        <div className="h-[560px] w-[550px] flex justify-center items-center cursor-pointer">
          <Spline scene="https://prod.spline.design/NXujUFclYpZwK9-Z/scene.splinecode" />
        </div>
      </div>

      
    </div>
  );
};

export default Resume;
