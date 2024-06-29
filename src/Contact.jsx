import React, { useEffect, useState } from 'react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const bottom =
        Math.ceil(window.innerHeight + window.scrollY) >=
        document.documentElement.scrollHeight;
      setIsVisible(bottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style>
        {`
          .contact-container {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            transform: translateY(100%);
            transition: transform 0.5s ease-in-out;
          }
          .contact-container.visible {
            transform: translateY(0);
          }
        `}
      </style>
      <div className={`contact-container ${isVisible ? 'visible' : ''}`}>
        <div className='h-[535px] w-full bg-[#312656] rounded-t-3xl'>
          <div className='flex justify-end pr-8  h-[50px] w-full text-white'>
            <a href="#home">Home</a>
          </div>
          <div id='text1' className='text-white h-[280px] w-[800px] leading-none flex flex-wrap ml-8 mt-20'>
            <p className='tracking-[-0.08em] text-[100px]'>Something</p>
            <p className='tracking-[-0.08em] text-[100px]'>to Ask, Tell or </p>
            <p className='tracking-[-0.08em] text-[100px]'>Discuss with me?</p>
          </div>
          <div className='ml-4 mt-5 flex'>
            <div className='rounded-[20px] border-[1px] border-[white] h-[40px] w-[130px] flex justify-center items-center text-white text-[35px] hover:bg-[#080808] transition-all ease duration-200 hover:border-[#080808] p-3 m-6'>
              <a target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&to=091himesh@gmail.com">Email</a>
            </div>
            <div className='rounded-[20px] border-[1px] border-[white] h-[40px] w-[130px] flex justify-center items-center text-white text-[35px] hover:bg-[#080808] transition-all ease duration-200 hover:border-[#080808] p-3 m-6'>
              <a target="_blank" href="https://github.com/H1meshK">GitHub</a>
            </div>
            <div className='rounded-[20px] border-[1px] border-[white] h-[40px] w-[130px] flex justify-center items-center text-white text-[35px] hover:bg-[#080808] transition-all ease duration-200 hover:border-[#080808] p-3 m-6'>
              <a target='_blank' href="https://www.instagram.com/maybehimesh/">Instagram</a>
            </div>
            <div className='rounded-[20px] border-[1px] border-[white] h-[40px] w-[130px] flex justify-center items-center text-white text-[35px] hover:bg-[#080808] transition-all ease duration-200 hover:border-[#080808] p-3 m-6'>
              <a target='_blank' href="https://www.linkedin.com/in/himesh-kumar-47b8b2285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
