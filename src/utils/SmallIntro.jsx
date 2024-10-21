import React from "react";

function SmallIntro() {
  return (
    <div className="relative flex justify-center items-center h-[200px] w-full z-1000">
      <img 
        src="../../public/files/arrow.svg" 
        alt="arrow" 
        className="h-[100px] w-[100px] absolute top-[4rem] right-[10%]" 
      />
    </div>
  );
}

export default SmallIntro;
