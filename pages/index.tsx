import * as React from "react";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Grant Sander - About Me</title>
        <meta
          name="description"
          content="About Grant Sander and his Software Expertise."
        />
      </Head>
      <div className="grid gap-6">
        {Sections.map((section) => (
          <div key={section.title}>
            <div className="text-lg font-bold md:text-xl text-gray-800 dark:text-gray-200">
              {section.title}.
            </div>
            <div className="text-gray-800 dark:text-gray-200 max-w-xl">
              {section.description}
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

const Sections: { title: string; description: string }[] = [
  {
    title: "I build software",
    description: `I build full-stack web and mobile apps using primarily JavaScript and Python tooling. I have experience building web front-ends using React and Vue.js, mobile apps using React Native, and API backends using both Node.js and Ruby on Rails. I like tinkering with Python on the side.`,
  },
  {
    title: "I lead teams",
    description: `Building large-scale software is a team sport, and I love leading by example. I'm a strong communicator who fully embraces the non-technical side of software development.`,
  },
  {
    title: "I design things",
    description: `Though I'm not trained as a designer, I enjoy thinking about design and user experience. I'm particularly fascinated with graphics/modeling and animation.`,
  },
];

export default Home;
