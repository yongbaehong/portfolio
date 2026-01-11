import Image from "next/image";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

export default function Home() {
  return (
    <div className="w-7xl max-w-7xl flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full flex-col bg-white dark:bg-black">
        <Header />
        <Hero />
      </main>
    </div>
  );
}
