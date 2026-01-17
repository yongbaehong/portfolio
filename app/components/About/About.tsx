'use client';

function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl font-bold text-center text-dark dark:text-white mb-12">
          About Me &amp; And What I Do
        </h2>
        <div className="max-w-4xl mx-auto text-center text-gray-700 dark:text-gray-300 space-y-6">
          <p>
            Hello! I'm a passionate web developer with experience in creating
            dynamic and responsive websites. I specialize in modern web
            technologies and love bringing ideas to life in the digital world.
          </p>
          <p>
            When I'm not coding, I enjoy exploring new technologies, reading, traveling, and being active outdoors. I'm always eager to learn new experiences and take on new challenges.
          </p>
          <p>
            Feel free to reach out if you'd like to collaborate or just want to
            say hi!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About; 