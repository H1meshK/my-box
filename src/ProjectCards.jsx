import React, { useState } from 'react';

const ProjectCards = ({ title, description, hoverColor, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    backgroundColor: isHovered ? hoverColor : 'rgba(19,19,19,0.3)',
    borderColor: isHovered ? hoverColor : 'rgba(233,233,233,0.3)',
    transition: 'all 0.2s ease',
  };

  return (
    <div
      className='h-[250px] w-[220px] rounded-2xl m-6 flex flex-col border-[1px]'
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a 
        href={link} 
        className="flex flex-col h-full w-full rounded-2xl"
        style={{
          textDecoration: 'none',
        }}
      >
        <p className='h-[13%] font-["Josefin Sans"] font-semibold text-[25px] flex justify-center text-white'>
          {title}
        </p>
        <p className='h-[87%] font-["Josefin Sans"] text-[15px] text-[#aaaaaa] p-2'>
          {description}
        </p>
      </a>
    </div>
  );
};

export default ProjectCards;
