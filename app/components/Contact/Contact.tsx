"use client";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

export default function Example() {
  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8" id="contact">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Get in touch
        </h2>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          I'd love to hear from you! Whether you have a question about
          features, trials, pricing, need a demo, or anything else, I am always
          ready to answer all your questions.
        </p>
      </div>
      <form>
        <div className="mx-auto mt-16 max-w-xl sm:mt-20">
          Please Email me at:{" "}
          <a
            href="mailto:yongbae40176@gmail.com"
            className="text-indigo-600 hover:text-indigo-500"
          >
            yongbae40176@gmail.com
          </a>
        </div>
      </form>
    </div>
  );
}
