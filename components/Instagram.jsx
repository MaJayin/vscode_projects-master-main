import React from 'react'

import IgImg1 from '../public/IgImg1.jpeg';
import IgImg2 from '../public/IgImg2.jpg';
import IgImg3 from '../public/IgImg3.jpg';
import IgImg4 from '../public/IgImg4.jpg';
import IgImg5 from '../public/IgImg5.jpg';
import InstagramImg from './InstagramImg'

const Instagram = () => {
  return (
    <div className='max-w-[1240px] mx-auto text-center py-24'>
        <p className='text-2xl font-bold'>Follow me on facebook</p>
        <p className='pb-4'>@Business name</p>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grind-cols-6 gap-2 p-4'>
            <InstagramImg socialImg={IgImg1} />
            <InstagramImg socialImg={IgImg2} />
            <InstagramImg socialImg={IgImg3} />
            <InstagramImg socialImg={IgImg4} />
            <InstagramImg socialImg={IgImg5} />

          </div>

    </div>
    
  )
}

export default Instagram