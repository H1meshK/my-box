import React from 'react'

function About() {
  return (
    <div id='About' className='w-[100%] bg-gradient-to-b from-[#05040A] to-[#131313] '>
          <h1 className='About font-["Rubik"] font-semibold text-white text-[60px] pl-[90px] pb-10'>About</h1>
          <p className='text-zinc-300 text-[20px] pl-[90px] pr-[90px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores velit magnam, praesentium ipsam maxime et amet nobis optio incidunt dolorum mollitia recusandae culpa quam aliquid? Recusandae qui rerum accusantium sed dicta eaque, deleniti ipsam reprehenderit error consequuntur officiis facilis perferendis odit deserunt exercitationem minima officia maiores consectetur! Libero nihil, neque eos odio ab atque necessitatibus sit repellendus, ipsum dolore temporibus, ea tempore alias culpa doloribus. Doloremque vitae molestias quasi error! Totam illo adipisci eos culpa eum natus vel. Vitae labore rem quo, nulla totam, eum minus et, a molestiae odio laboriosam consequatur iste deserunt laudantium ducimus alias. Sunt illo inventore, quibusdam rerum eius quod sequi nobis impedit, ab fugiat molestias.</p>
        <div className='h-[600px] w-[100%] flex justify-center items-center'>
          <div className='absolute left-[25%] w-[320px] h-[320px] rounded-[50%] bg-[url("/images/myimg1.jpeg")] bg-cover'></div>
          <div className='absolute left-[40%] w-[320px] h-[320px] rounded-[50%] '></div>
          <div className='absolute left-[55%] w-[320px] h-[320px] rounded-[50%] '></div>
        </div>
        <p className='text-zinc-300 text-[20px] pl-[90px] pr-[90px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, et excepturi hic odio repellendus facilis itaque vitae distinctio sapiente labore eveniet accusamus praesentium similique ullam explicabo saepe adipisci laboriosam modi quos id beatae maxime nemo! In a ipsa unde aliquam sed repudiandae sunt veniam ea! Fuga veritatis, quis illum quisquam deleniti recusandae odit eligendi architecto ea eveniet aspernatur consequuntur corporis, totam atque adipisci sint quasi quod! Vel reprehenderit, ea, atque cumque nulla similique dolorem adipisci nobis est laborum omnis, dignissimos quaerat veniam quis. Quam, atque. Vel expedita, qui voluptatum repellendus, praesentium placeat fuga aspernatur ullam quasi ducimus sint necessitatibus molestias.</p>
        <p className='text-zinc-300 text-[20px] pt-10 pl-[90px] pr-[90px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum possimus cumque, odio delectus omnis, magni porro corrupti beatae repellendus aut dolorum asperiores in iusto ipsum quod, iure laudantium neque repellat molestias optio? Maiores blanditiis molestiae voluptate ipsa quisquam placeat voluptates! Sapiente quis quidem ipsum rerum modi! Id, odio. Numquam quae quis vero ipsum modi error obcaecati animi qui dolorem quod hic rem ipsam ea autem eaque, consectetur omnis excepturi maiores sapiente! Aspernatur quos et ut id tempora, debitis veniam, expedita voluptatum saepe excepturi quo fugit quis velit magnam necessitatibus minus voluptas maiores cumque tempore dignissimos, facere consequuntur quidem rerum cupiditate.</p>
        <div className='h-[500px] w-[100%] flex justify-between items-center'>
           <div className='cover bg-[#323238] h-[450px] w-[60%] ml-[90px] rounded-[20px] hover:bg-[#7443FF]'>
            <p className='text-white text-[20px] ml-5 mt-5 font-["Jaldi"] font-light hover:ml-7'>Wanna Get In Touch?</p>
            <p className='text-white text-[40px] font-["Inria Sans"] font-semibold ml-5 mt-8'>Have A Project For Me?</p>
            <p className='text-white text-[70px] font-["Inria Sans"] font-semibold ml-5 mt-32'>Or Anything else?</p>
            <div className='rounded-[20px] border-[1px] border-[white] h-[40px] w-[130px] flex justify-center items-center ml-5 text-white text-[35px] hover:bg-[#080808] transition-all ease duration-200 hover:border-[#080808]'><a href="#contact">Contact</a></div>
           </div>
           <div className='bg-[#29292e] h-[450px] w-[40%] ml-3 mr-[90px] rounded-[20px] hover:bg-[#CC0000] '>
           <p className='text-zinc-200 text-[20px] ml-5 mt-5 font-["Jaldi"] font-light'>Things I’m Good At?</p>
           <p className='text-zinc-200 text-[40px] font-["Inria Sans"] font-semibold ml-5 mt-8'>Click here to Explore my Skills.</p>
           <div className='rounded-[20px] border-[1px] border-[white] h-[40px] w-[130px] flex justify-center items-center ml-5 mt-[170px] text-white text-[35px] hover:bg-[#080808] transition-all ease duration-200 hover:border-[#080808]'><a href="#Skills">Skills</a></div>
           </div>
        </div>
        </div>
  )
}

export default About
