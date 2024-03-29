import React from 'react';
import { FaRegDotCircle } from 'react-icons/fa';

export default function Dot({ icon }: { icon?: any }) {
  const Icon = icon || <FaRegDotCircle />;
  return (
    <span className="absolute flex items-center justify-center size-6 rounded-full -left-[13px] -top-[0.5px] hidden ">
      {React.cloneElement(Icon, {
        className:
          'h-4 w-4 text-gray-300/80 duration-300 transition-all group-hover:text-[#8bc34a] group-hover:scale-105'
      })}
    </span>
  );
}
