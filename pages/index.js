import Head from "next/head";
import Image from "next/image";
import {FaFacebook} from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs'
import {AiFillYoutube} from 'react-icons/ai'
import {RiMenuFill} from 'react-icons/ri'
import styles from "../styles/Home.module.css";
import Link from "next/link";
import images from "../public/img/mymgs";
import { useState, useEffect } from "react";
import Aos from 'aos'
import 'aos/dist/aos.css';




export default function Home() {
  const [icon, setIcon]=useState(false)

  useEffect(() => {
    Aos.init("1250")
  })
  
  function showicon(){
    setIcon(icon=> icon?false:true)
    console.log(icon)
  }
  return (
    <>
      <div className=" w-screen  ">
        <div className="mybg ">
          <div className="flex flex-col md:flex-row items-center justify-around  max-w-100% pt-5">
            <Image
              className=""
              src={images.logo}
              alt=""
              width={106}
              height={25}
            />  
            <div className="py-5 ">

            <RiMenuFill className="md:hidden  " onClick={()=>showicon()}/>
            </div>
            <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"> 
            

            <ul className={ `${icon?'flex flex-col':'hidden'} md:flex  p-5 md:flex-row items-center mx-2 px-3 text-white `}>
              <li className="px-3 hover:text-blue rounded-md ">
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li className="px-3">
                <Link href="/About">
                  <a>About</a>
                </Link>
              </li>
              <li className="px-3">
                <Link href="/mypages/mobile">
                  <a>Mobile</a>
                </Link>
              </li>
              <li className="px-3">
                <Link href="/mypages/laptop">
                  <a>Laptop</a>
                </Link>
              </li>
              <li className="px-3">
                <Link href="/mypages/tablet">
                  <a>Tablet</a>
                </Link>
              </li>
            </ul>
            </div>
            <button className="blue rounded-full mx-4 p-2 text-white">
              Request demos
            </button>
          </div>
          <div className="flex flex-col  md:flex-row items-center justify-between ml-16">
            <div className="w-full md:w-[50%]  mt-5">
              <h2 className="text-4xl md:text-6xl w-[100%] padding font-bold text-white">
                Tell a Batter Brand Story
              </h2>
              <p data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="w-[80%] padding text-gray-300 ">
                Automate the way you search through hashtags and suggested
                profiles to find results 100x faster Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Nesciunt placeat porro corrupti at
                atque aliquam quod praesentium sunt soluta suscipit recusandae
                dolorem modi necessitatibus quis molestias distinctio,
                aspernatur facere esse..
              </p>
              <button className="blue rounded-full m-4 p-1.5 text-white border ">
                Request Demo &#8594;
              </button>
            </div>
            <div className=" hidden md:block md:overflow-x-hidden md:relative md:w-[628px] md:h-[538px] md:mt-10">
              <div className="absolute top-0 left-20">
                <Image
                  className=" "
                  src={images.card1}
                  alt=""
                  width={189}
                  height={218}
                />
              </div>
              <div className="absolute right-0">
                <Image
                  className=" "
                  src={images.card2}
                  alt=""
                  width={262}
                  height={302}
                />
              </div>
              <div className="absolute left-0 bottom-0">
                <Image
                  className=" "
                  src={images.card3}
                  alt=""
                  width={280}
                  height={300}
                />
              </div>
              <div className="absolute right-0  bottom-20">
                <Image
                  className=" "
                  src={images.card4}
                  alt=""
                  width={253}
                  height={100}
                />
              </div>

              <div className="absolute right-0 pt-15 bottom-0">
                <Image
                  className=" "
                  src={images.card5}
                  alt=""
                  width={253}
                  height={74}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col  text-center mx-autojustify-center mt-10 max-w-screen-xl mx-auto P-5">
          <p className="text-center rounded-lg mt-2 p-2 logoimg inline-block ">
            SOME OF OUR TRUSTED CLIENTS
          </p>
          <div className="p-10">
            <Image
              className=" "
              src={images.logosimg}
              alt=""
              width={1135}
              height={33}
            />
          </div>
        </div>
        <div className=" md:w-[60%]  md:mx-auto ">
          <div className="text-2xl font-bold w-[60%] mx-auto md:text-4xl md:font-bold md:p-3 text-center">
            Solutions for every need
          </div>
          <div className="text-center w-[80%] mx-auto md:textcolor md:w-[70%] md:text-center md:mx-auto ">
            <p>
              Join thousands of marketers and entrepreneurs for a 2-day event at
              the forefront of social commerce.
            </p>
          </div>
        </div>
        <div className=" flex flex-col md:flex-row md:mt-10 md:max-w-screen-lg md:mx-auto">
          <div className="w-full md:w-[60%] md:mt-8">
            <p className=" text-center mt-5 text-xl md:text-blue-300 md:text-left md:text-2xl">INFULANCER</p>
            <h2 className="text-center md:text-left font-bold text-2xl md:text-3xl md:font-bold md:p-2">Influencer marketing</h2>
            <p className="p-5 text-center md:textcolor md:text-left md:p-3">
              
              Create infinite pieces of content with our influencer product.
              Build,streamline,manage large-scale influencer programs Lorem
              ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
              cupiditate totam quas voluptates perspiciatis voluptate, aliquam
              accusamus dolorum ut nam repellat esse maxime voluptatem ipsam et
              eos ex nostrum dignissimos?
            </p>
            <button className="textblue p-3 text-center w-[100%] mx-auto  md:text-blue-500 md:text-left md:p-3">Lern More &#8594;</button>
          </div>
          <div className=" w-[70%] mx-auto md:w-[40%]">
            <Image
              className=" "
              src={images.card6}
              alt=""
              width={451}
              height={492}
            />
          </div>
        </div>
        <div className="flex flex-col w-[100%] mx-auto md:flex-row md:justify-between md:mb-3 md:max-w-screen-lg md:mx-auto">
          <div className="w-[60%] mx-auto md:w-[40%]  md:top-5 md:left-20" >
          <Image
             
              src={images.profile}
              alt=""
              width={292}
              height={283}
            />

          </div>
          <div className="w-[100%] md:w-[48%]">
            <p className="text-xl text-blue-600 text-center md:text-left md:textblue md:text-2xl md:textorange md:p-2">Community</p>
            <h2 className="text-center font-bold text-2xl p-5 md:text-left md:text-3xl md:font-bold md:p-2">Community marketing</h2>
            <p className="text-center p-10 md:textcolor md:p-3 md:text-left">
             
              Bring your relationships to new heights with our community
              product. Discover your biggest enthusiasts
            </p>
            <div className="text-center md:text-left ">

            <button className="textblue p-3">Lern More &#8594;</button>
            </div>
          </div>
        </div>
        <div className=" flex flex-col md:flex-row md:mt-5 md:max-w-screen-lg md:mx-auto">
          <div className="w-[100%] md:w-[50%] md:top-20">
          <p className="text-center text-2xl textorange p-5 md:textblue md:text-2xl md:textorange md:text-left md:p-2">Community</p>
            <h2 className="text-2xl font-bold p-5 text-center md:text-3xl md:font-bold md:p-2 md:text-left">Community marketing</h2>
            <p className="textcolor text-center p-5 md:textcolor md:text-left md:p-3">
             
              Bring your relationships to new heights with our community
              product. Discover your biggest enthusiasts
            </p>
            <div className="text-center md:text-left ">

            <button className="textblue p-3">Lern More &#8594;</button>
            </div>

          </div>
          <div className="w-[70%] mx-auto md:w-[40%]">
          <Image
             
             src={images.card8}
             alt=""
             width={379}
             height={407}
           />
          </div>
        </div>
        <div className="bgblue w-[100%] p-5">
          <div className=" md:w-[70%] mx-auto">
            <p className="text-center text-2xl md:text-3xl md:font-bold md:p-5 text-white md:w-[60%] mx-auto" >Search through more than 11 million social media profiles</p>
            <p className="textcolor md:p-5 md:w-[60%] w-[100%] p-5 text-center mx-auto">Heepsy’s search filters help you find exactly what you’re looking for, and our influencer reports provide you with the metrics</p>
          </div>
          <div className="flex flex-col p-5 md:flex-row md:justify-between md:p-10  md:max-w-screen-lg mx-auto text-white">
            <div className="text-center p-5 ">
              <p className="text-4xl md:text-4xl text-white  ">5809</p>
              <p className=" p-2 ">Satisfied Brands</p>
            </div>
            <div className="text-center p-5">
              <p className="text-4xl text-white ">5809</p>
              <p className="p-2">Satisfied Brands</p>
            </div>
            <div className="text-center p-5">
              <p className="text-4xl text-white ">5809</p>
              <p className="p-2">Satisfied Brands</p>
            </div>
            <div className="text-center p-5">
              <p className="text-4xl text-white ">5809</p>
              <p className="p-2">Satisfied Brands</p>
            </div>
          </div>
        </div>

        <div className=" max-w-screen-xl mx-auto">
        <div className="w-[100%] md:w-[70%] md:mx-auto">
            <p className="text-2xl text-center font-bold  md:text-3xl md:font-bold p-5 md:mx-auto md:w-[50%] " >Solutions for every need</p>
            <p className="w-[90%] textcolor p-10 md:w-[60%] text-center mx-auto">Heepsy’s search filters help you find exactly what you’re looking for, and our influencer reports provide you with the metrics</p>
          </div>
          <div className="  w-[100%] ">
            <div className="flex flex-col w-[100%] justify-center py-10 md:flex-row md:justify-between md:-p0">
            <div className="relative ">
      
            <div className="w-[70%] mx-auto md:w-[100%]">
            <Image
             
             src={images.user1}
             alt=""
             width={360}
             height={300}
           />
           </div>
           <div className=" ">
           <div className="bg-slate-50 absolute bottom-10 left-20 p-3 m:bottom-10 md:left-0 md:w-[60%] md: px-3">
           <p className=" text-sm md:text-xl">Rabel Clothes</p>
           <div className="flex justify-between ">
           <div className="">
           <p className="text-xl md:text-2xl font-bold">6.7 M</p>
         <p className=" text-sm md:text-l textcolor pr-2">FOLLOWER </p>
           </div>
           <div className="">
           <p className="text-xl md:text-2xl font-bold">6.7 M</p>
         <p className="text-sm md:text-l textcolor "> ENGAGEMENT</p>
           </div>
           </div>
           </div>
           <div className="text-center   md:text-left md:my-0">

           <button className="textblue p-3 font-bold">Lern More &#8594;</button>
           </div>

            </div>
          </div>
          <div className="relative">
      
            <div className="w-[70%] mx-auto md:w-[100%]">
            <Image
             
             src={images.user2}
             alt=""
             width={360}
             height={300}
           />
           </div>
           <div className=" ">
           <div className="bg-slate-50 absolute bottom-10 left-20 p-3 m:bottom-10 md:left-0 md:w-[60%] md: px-3">
           <p className="text-sm md:text-xl">Rabel Clothes</p>
           <div className="flex justify-between ">
           <div className="">
           <p className="text-2xl font-bold">6.7 M</p>
         <p className="textcolor">FOLLOWER </p>
           </div>
           <div className="">
           <p className="text-2xl font-bold">6.7 M</p>
         <p className="textcolor"> ENGAGEMENT</p>
           </div>
           </div>
           </div>
           <div className="text-center md:text-left">

           <button className="textblue p-3 font-bold">Lern More &#8594;</button>
           </div>

            </div>
          </div>
          <div className="relative">
      
            <div className="w-[70%] mx-auto md:w-[100%]">
            <Image
             
             src={images.user3}
             alt=""
             width={360}
             height={300}
           />
           </div>
           <div className=" ">
           <div className="bg-slate-50 absolute bottom-10 left-20 p-3 m:bottom-10 md:left-0 md:w-[60%] md: px-3">
           <p className=" text-sm md:text-xl">Rabel Clothes</p>
           <div className="flex justify-between ">
           <div className="">
           <p className="text-xl md:text-2xl font-bold">6.7 M</p>
         <p className=" text-sm md:text-l textcolor pr-2">FOLLOWER </p>
           </div>
           <div className="">
           <p className="text-xl md:text-2xl font-bold">6.7 M</p>
         <p className="text-sm md:text-l textcolor "> ENGAGEMENT</p>
           </div>
           </div>
           </div>
           <div className="text-center  md:text-left md:p-0">

<button className="textblue p-3 font-bold">Lern More &#8594;</button>
</div>

            </div>
          </div>
          
        </div>
        </div>
        </div>
        <div className=" max-w-screen-xl mx-auto">
         <div className="w-full md:w-[50%] mx-auto p-10">
           <p className="text-center text-2xl font-bold p-5">Happy Clients</p>
           <p className="text-center w-full md:w-[80%] mx-auto textcolor p-5">The Marketing Accountability Standards Board (MASB) endorses the definitions, purposes, and constructs of classes</p>
         </div>
        </div>
        <div className=" max-w-screen-lg mx-auto">
          <div className="flex flex-col py-5 md:p-0 md:flex-row md:jsutify-between">
            <div className=" md:w-[50%] md:mt-10 mx-auto">
              <div className="w-[20%] mx-auto md:align-top md:ml-4">
                <Image src={images.logo2} width={64} height={63} />
              </div>
              <p className="textcolor p-10 text-center md:text-left md:p-3">Not weekly or monthly like other sites out there. This ensures that we offer prospective homebuyers and investors with the freshest- hottest deals on the Internet.</p>
              <div className="flex flex-row justify-around md:flex-row md:justify-between">
                <div className="pb-10 md:p-3">
                  <p className="text-xl">Rowhan Smith</p>
                  <p className="textcolor">CEO, Foreclosure</p>
                </div>
                <div className="mt-3">
                  <button className="px-2 bg-slate-500 mr-2" >&#8592; </button>
                  <button className="px-2 bg-slate-500 ml-2"> &#8594;</button>
                </div>
              </div>
            </div>
            <div className=" mx-auto">
            <Image src={images.user4} width={345} height={457} />

            </div>
          </div>

        </div>
        <div className="p-20 drop-shadow-2xl max-w-screen-xl mx-auto">
          <div className="w-[100%] md:w-[60%] mx-auto items-center twobg rounded-lg md:mb-5 md:p-5">
            <p className="text-center text-2xl md:text-3xl font-bold text-white p-4"> Subscribe our newsletter</p>
            <p className="w-full text-center md:w-[65%] mx-auto text-yellow-100 p-6">Join thousands of marketers and entrepreneurs for a 2-day event at the forefront of social commerce.</p>
            <div className="flex justify-center p-5 md:p-5">

            <button className="bg-[#231A36] rounded-full md:w-[25%] mx-auto p-2 text-white">
              Request demos &#8594;	
            </button>
            </div>

          </div>
        </div>
        <div className=" max-w-screen-xl mx-auto">
        <div className="flex  flex-col md:pb-5 md:flex-row items-center justify-around  max-w-100%">
            <div className=" py-5 md:py-0">
            <Image
              className=""
              src={images.logoblack}
              alt=""
              width={106}
              height={25}
            /></div> 
            <ul className="flex items-center mx-2 p-3 ">
              <li className="px-3">
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li className="px-3">
                <Link href="/About">
                  <a>About</a>
                </Link>
              </li>
              <li className="px-3">
                <Link href="/mypages/mobile">
                  <a>Mobile</a>
                </Link>
              </li>
              <li className="px-3">
                <Link href="/mypages/laptop">
                  <a>Laptop</a>
                </Link>
              </li>
              <li className="px-3">
                <Link href="/mypages/tablet">
                  <a>Tablet</a>
                </Link>
              </li>
            </ul>
            <div className="flex py-5 justify-between w-[28%] md:w-[7%]">
              <FaFacebook />
              <AiFillYoutube />
              <BsInstagram />

            </div>
            <div className="">
              Developed by Netixsol
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
