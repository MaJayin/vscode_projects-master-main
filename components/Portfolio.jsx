import React from 'react'
import Image from 'next/image'

const Portfolio = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 text-center'>
        <h1 className='font-bold text-2xl p-4'>Work done</h1>
        <div className='grid grid-rows-none md:grid-cols-5 md:p-4 gap-4'>
            <div className='w-full h-full col-span-2 md:col-span-3 row-span-2'>
                <Image 
                src='https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' alt='/'
            
                width='677'
                height='451'
                style={{layout:'responsive'}}
                />
                </div>

                <div className='w-full h-full'>
                <Image src='https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' alt='/'
            
            width='1240'
            height='451'
            style={{layout:'responsive', objectFit:'cover'}}
            />
            </div>
            <div className='w-full h-full'>
                <Image src='https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' alt='/'
            
            width='1240'
            height='451'
            style={{layout:'responsive', objectFit:'cover'}}
            />
            </div>
            <div className='w-full h-full'>
                <Image src='https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' alt='/'
            
            width='1240'
            height='451'
            style={{layout:'responsive', objectFit:'cover'}}
            />
            </div>
            <div className='w-full h-full'>
                <Image src='https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' alt='/'
            
            width='1240'
            height='451'
            style={{layout:'responsive', objectFit:'cover'}}
            />
            </div>
            

            </div>
        </div>    
  )
}

export default Portfolio