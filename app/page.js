
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Project from "@/components/Project";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className=" flex flex-col min-h-screen ">
      <Header/>
      <Hero/>
      <Experience/>
      <Project/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
   
  );
}

