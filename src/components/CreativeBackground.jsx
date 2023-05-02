import React from "react";

const CreativeBackground = ({ children, className }) => {
  return (
    <div className=" ">
      <div className=" inset-0 z-0">
        <svg
          className="h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon fill="#f9fafb" points="0,100 100,0 100,100" />
        </svg>
      </div>
      <div className="relative z-10 flex items-center justify-center h-full">
        {children}
      </div>
    </div>
  );
};

export default CreativeBackground;
