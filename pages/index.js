import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import NavBar from "@/components/NavBar";
import Main from "@/components/Main";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio | Rajkumar</title>
        <meta name="description" content="Generated for portfolio website" />
      </Head>
      <NavBar></NavBar>
      <Main></Main>
      <About></About>
      <Skills></Skills>
      {/* <Education></Education>
      <Experience></Experience> */}
      <Projects></Projects>
      {/* <Contact></Contact> */}
    </div>
  );
}
