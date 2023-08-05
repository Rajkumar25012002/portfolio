import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/assets/rk_logo.jpg";
import {
  AiOutlineClose,
  AiFillExperiment,
  AiOutlineMail,
  AiOutlineMenu,
  AiFillHome,
} from "react-icons/ai";
import { FaLinkedinIn, FaProjectDiagram } from "react-icons/fa";
import { BsFillPersonLinesFill, BsFillInfoCircleFill } from "react-icons/bs";
import { useRouter } from "next/router";
import { FcAbout } from "react-icons/fc";
import { GiSkills } from "react-icons/gi";
import { IoSchoolSharp } from "react-icons/io5";
import { GrUserExpert, GrProjects } from "react-icons/gr";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navColor, setNavColor] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();
  useEffect(() => {
    if (
      router.asPath === "/HandGesture" ||
      router.asPath === "/Mesh" ||
      router.asPath === "/Mpptsolar"
    ) {
      setNavColor("transparent");
      setLinkColor("#ecf0f3");
    } else {
      setNavColor("");
      setLinkColor("rgb(255 255 255)");
    }
  }, [router]);
  const handleNav = () => {
    setNav((prev) => !prev);
  };
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);
  return (
    <div
      className={
        shadow
          ? " bg-[rgba(16,15,15,0.8)] fixed w-full h-20 l z-[100] ease-in-out duration-700"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-end md:justify-center items-center w-full h-full px-2">
        {/* <Image src={Logo} alt="Logo" className="rounded-full" width="74" height="35"></Image> */}
        <div>
          <ul className=" hidden md:flex">
            <Link href="/">
              <li className="text-sky-700 ml-10 text sm uppercase font-bold  hover:text-purple-700">
                Home
              </li>
            </Link>
            <Link href="#about">
              <li
                className="text-sky-700 ml-10 text sm uppercase font-bold
                 hover:text-purple-700"
              >
                About
              </li>
            </Link>
            <Link href="#skills">
              <li
                className="text-sky-700 ml-10 text sm uppercase font-bold
                 hover:text-purple-700"
              >
                Skills
              </li>
            </Link>
            <Link href="#about">
              <li
                className="text-sky-700 ml-10 text sm uppercase font-bold
                 hover:text-purple-700"
              >
                Education
              </li>
            </Link>
            <Link href="#about">
              <li
                className="text-sky-700 ml-10 text sm uppercase font-bold
                  hover:text-purple-700"
              >
                Experience
              </li>
            </Link>
            <Link href="#projects">
              <li
                className="text-sky-700 ml-10 text sm uppercase font-bold
                 hover:text-purple-700"
              >
                Projects
              </li>
            </Link>
            {/* <Link href="#Contact">
            <li
              className="text-sky-700 ml-10 text sm uppercase font-bold
                 hover:text-purple-700"
            >
              Contact
            </li>
          </Link> */}
          </ul>
          <div
            onClick={handleNav}
            className="md:hidden text-sky-700 hover:text-purple-700"
          >
            <AiOutlineMenu></AiOutlineMenu>
          </div>
        </div>
      </div>
      <div
        className={
          nav ? " md:hidden fixed left-0 top-0 w-full h-screen bg-black/90" : ""
        }
      >
        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-[5%] sm:w-[5%] md:w-[5%] max-h-max-content rounded-xl bg-[rgb(11,11,11)] p-6 ease-in duration-600"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-600"
          }
        >
          {/* <div>
            <div className="flex w-full items-center justify-between">
              <Image src={Logo} alt="logo"className="rounded-full" width="80" height="35"></Image>
              <div
                onClick={handleNav}
                className="rounded-full bg-sky-800 p-3 cursor-pointer"
              >
                <AiOutlineClose></AiOutlineClose>
              </div>
            </div>
          </div> */}
          <div className="py-2">
            <ul className="uppercase flex flex-col  items-center">
              <Link href="/">
                <li
                  onClick={() => {
                    setNav((prev) => !prev);
                  }}
                  className="py-1 text-1xl my-4 rounded-full h-6 bg-red-700 hover:bg-red-500"
                >
                  <AiOutlineClose />
                </li>
              </Link>
              <Link href="/">
                <li
                  onClick={() => {
                    setNav(false);
                  }}
                  className="py-3 text-2xl hover:text-purple-700 text-sky-700 "
                >
                  <AiFillHome />
                </li>
              </Link>
              <Link href="/#about">
                <li
                  onClick={() => {
                    setNav(false);
                  }}
                  className="py-3 text-2xl hover:text-purple-700 text-sky-700 "
                >
                  <BsFillInfoCircleFill />
                </li>
              </Link>
              <Link href="/#skills">
                <li
                  onClick={() => {
                    setNav(false);
                  }}
                  className="py-3 text-2xl hover:text-purple-700 text-sky-700 "
                >
                  <GiSkills />
                </li>
              </Link>
              <Link href="/#education">
                <li
                  onClick={() => {
                    setNav(false);
                  }}
                  className="py-3 text-2xl hover:text-purple-700 text-sky-700 "
                >
                  <IoSchoolSharp />
                </li>
              </Link>
              <Link href="/#experience">
                <li
                  onClick={() => {
                    setNav(false);
                  }}
                  className="py-3 text-2xl hover:text-purple-700 text-sky-700 "
                >
                  <AiFillExperiment />
                </li>
              </Link>
              <Link href="/#projects">
                <li
                  onClick={() => {
                    setNav(false);
                  }}
                  className="py-3 text-2xl hover:text-purple-700 text-sky-700 "
                >
                  <FaProjectDiagram />
                </li>
              </Link>
              {/* <Link href='/#contact'>
                        <li onClick={()=>{setNav(false)}} className="py-4 text-sm">Contact</li>
                    </Link> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
