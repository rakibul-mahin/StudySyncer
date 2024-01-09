import React from "react";

const Tags = ({ text }) => {
  return (
    <span>
      <span className='text-green-500'>#</span>
      <span className='font-bold '>{text}</span>
    </span>
  );
};

export default Tags;
