import Image from "next/image";
export default function Hero() {
  return (
    <section className="w-full bg-gray-100 dark:bg-gray-900 sm:pt-5 lg:py-20">
      <div className="container mx-auto px-6 py-6 text-center grid lg:grid-cols-2 sm:grid-cols-1 gap-4 max-h-full">
        {/* Left side of hero  */}
        <div className="sm:col-span-full lg:col-span-1 ">
          <h1 className="font-light font-sans text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Hello I'm{" "}
            <span className="text-sky-reflection italic font-semibold font-serif">
              Yongbae
            </span>
          </h1>
          <p className="text-2xl font-semibold tracking-tighter">
            Professional Freelancer &amp; Web Developer
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 px-12">
            I am a passionate freelance web developer. Feel free to explore my
            projects and get in touch!
          </p>
          <a
            href="#portfolio"
            className="inline-block bg-honey-bronze text-white px-6 py-3 rounded-full hover:bg-honey-bronze/80 transition"
          >
            View My Work
          </a>
        </div>
        {/* Right side of hero */}
        <div className="sm:col-span-full lg:col-span-1 flex justify-center items-center">
          <Image
            src="./hero-image-01.png"
            alt="Hero Image"
            width={300}
            height={300}
            className="mx-auto rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
}
