import Image from "next/image";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <div className="w-7xl max-w-7xl flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full flex-col bg-white dark:bg-black">
        <Header />
        <Hero />
        <About />
        <Skills />
        {/* <Projects /> */}
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
