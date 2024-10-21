import React from "react";

function MouseAnimation(props) {
  function mouseEntered() {
    props.setImageScroll(props.translate);
    props.onMouseEnter(); // Call onMouseEnter from props
  }

  function mouseLeft() {
    props.onMouseLeave(); // Call onMouseLeave from props
  }

  return (
    <div>
      <div
        onMouseEnter={mouseEntered}
        onMouseLeave={mouseLeft} // Call mouseLeft when leaving
        className="border-t-2 border-b-2 relative w-4/5 mx-auto text-8xl px-5 py-7 flex items-center justify-center"
      >
        <div className="absolute h-full w-full z-20"></div>
        <h1>{props.h1}</h1>
      </div>
    </div>
  );
}

export default MouseAnimation;
