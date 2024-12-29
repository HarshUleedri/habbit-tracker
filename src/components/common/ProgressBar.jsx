import React from "react";

const ProgressBar = (props) => {
  const { progress } = props;
  return (
    <>
      <div className="relative w-full h-3 rounded-full bg-zinc-500">
        <span
          className={` absolute inset-0 rounded-full bg-[#378920] h-3`}
          style={{ width: `${progress}%` }}
        ></span>
      </div>
    </>
  );
};

export default ProgressBar;
