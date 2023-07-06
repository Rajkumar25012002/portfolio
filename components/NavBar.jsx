import React,{useEffect, useState} from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from '../public/assets/rk_logo.jpg'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import {FaLinkedinIn} from 'react-icons/fa'
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useRouter } from "next/router";

const NavBar = () => {
    const [nav,setNav]=useState(false)
    const[shadow,setShadow]=useState(false)
    const[navColor,setNavColor]=useState('#ecf0f3')
    const[linkColor,setLinkColor]=useState('#1f2937')
    const router=useRouter()
    useEffect(()=>{
      if(
        router.asPath==='/HandGesture' ||
        router.asPath==='/Mesh'||
        router.asPath==='/Mpptsolar'
      ){
        setNavColor('transparent')
        setLinkColor('#ecf0f3')
      }
      else{
        setNavColor(" rgb(55 65 81)")
        setLinkColor('rgb(255 255 255)')
      }
    },[router])
    const handleNav=()=>{
        setNav((prev)=>!prev)
    }
    useEffect(() => {
        const handleShadow = () => {
          if (window.scrollY >= 90) {
            setShadow(true);
          } else {
            setShadow(false);
          }
        };
        window.addEventListener('scroll', handleShadow);
      }, []);
  return (
    <div style={{backgroundColor:`${navColor}`}} className={shadow ? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300":"fixed w-full h-20 z-[100]"}>
      <div className="flex justify-between items-center w-full h-full px-2">
        <Image src={Logo} alt="Logo" className="rounded-full" width="74" height="35"></Image>
        <div>
        <ul style={{color: `${linkColor}`}}className=" hidden md:flex">
          <Link href="/">
            <li
              className="ml-10 text sm uppercase
                 hover:border-b"
            >
              Home
            </li>
          </Link>
          <Link href="#about">
            <li
              className="ml-10 text sm uppercase
                 hover:border-b"
            >
              About
            </li>
          </Link>
          <Link href="#skills">
            <li
              className="ml-10 text sm uppercase
                 hover:border-b"
            >
              Skills
            </li>
          </Link>
          <Link href="#projects">
            <li
              className="ml-10 text sm uppercase
                 hover:border-b"
            >
              Projects
            </li>
          </Link>
          {/* <Link href="#Contact">
            <li
              className="ml-10 text sm uppercase
                 hover:border-b"
            >
              Contact
            </li>
          </Link> */}
        </ul>
        <div onClick={handleNav}className="md:hidden">
          <AiOutlineMenu></AiOutlineMenu>
        </div>
      </div>
      </div>
      <div className={nav? " md:hidden fixed left-0 top-0 w-full h-screen bg-black/70":""}>
          <div className={nav? "md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500":"fixed left-[-100%] top-0 p-10 ease-in duration-500"}>
            <div>
              <div className="flex w-full items-center justify-between">
                <Image src={Logo} alt="logo"className="rounded-full" width="80" height="35"></Image>
                <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                  <AiOutlineClose></AiOutlineClose>
                </div>
              </div>
              <div className="border-b border-grey-300 my-4">
                <p className="w-[85%] md:w-[90%] py-4">Hello !!!</p>
              </div>
            </div>
            <div className="py-4 flex flex-col">
                <ul className="uppercase">
                    <Link href='/'>
                        <li onClick={()=>{setNav(false)}} className="py-4 text-sm">Home</li>
                    </Link>
                    <Link href='/#about'>
                        <li onClick={()=>{setNav(false)}} className="py-4 text-sm">About</li>
                    </Link>
                    <Link href='/#skills'>
                        <li onClick={()=>{setNav(false)}} className="py-4 text-sm">Skills</li>
                    </Link>
                    <Link href='/#projects'>
                        <li onClick={()=>{setNav(false)}} className="py-4 text-sm">Projects</li>
                    </Link>
                    {/* <Link href='/#contact'>
                        <li onClick={()=>{setNav(false)}} className="py-4 text-sm">Contact</li>
                    </Link> */}
                </ul>
                <div className="pt-40">
                    <p className="uppercase tracking-widest text-[#5651e5]">Let's Connect</p>
                    <div className="flex items-center justify-between my-4 w-full sm:w-[60%]">
                        <div className="rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                            <FaLinkedinIn></FaLinkedinIn>
                        </div>
                        {/* <div className="rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                            <BsFillPersonLinesFill></BsFillPersonLinesFill>
                        </div> */}
                        <div className="rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                            <AiOutlineMail></AiOutlineMail>
                        </div>
                    </div>
                    
                </div>
            </div>
          </div>
        </div>
    </div>
    
  );
}

export default NavBar
