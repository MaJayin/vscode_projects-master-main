import Image from 'next/image'
import Head from 'next/head'
import Hero from '../components/Hero'
import {SliderData} from '../components/SliderData'
import Slider from '../components/Slider'
import Instagram from '../components/Instagram'


export default function Home() {
  return (
     <div>
    <Head>
     <title>Photography app</title>
     <meta name='description' content='Genterated by create next app'/>
     <link rel='icon' href='/favicon.ico' />
    </Head>
    <Hero heading='Welding work' message='I do welding and other accotiated work' />

    <Slider slides={SliderData} />
    <Instagram />


     </div>
   
  )
}
