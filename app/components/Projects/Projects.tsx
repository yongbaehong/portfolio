export default function Projects() {
  return (
    <section
      id="projects"
      className="py-12 bg-white dark:bg-gray-800 transition-colors duration-500"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white text-center">
          Projects
        </h2>
        <div className="max-w-4xl mx-auto text-center text-gray-700 dark:text-gray-300 space-y-6">
          <p>
            Here are some of the projects I've worked on recently. Each project
            showcases my skills and dedication to creating high-quality web
            applications.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {/* Project 1 */}
          <div className="bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
            <img
              src="/project1-thumbnail.png"
              alt="Project 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                Project One
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                A brief description of Project One, highlighting its features
                and technologies used.
              </p>
              <a
                href="#"
                className="text-blue-500 hover:underline"
              >
                View Project
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
            <img
              src="/project2-thumbnail.png"
              alt="Project 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                Project Two
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                A brief description of Project Two, highlighting its features
                and technologies used.
              </p>
              <a
                href="#"
                className="text-blue-500 hover:underline"
              >
                View Project
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
            <img
              src="/project3-thumbnail.png"
              alt="Project 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                Project Three
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                A brief description of Project Three, highlighting its features
                and technologies used.
              </p>
              <a
                href="#"
                className="text-blue-500 hover:underline"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}             