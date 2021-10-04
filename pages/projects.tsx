import * as React from "react";
import { NextPage } from "next";
import { Spacer } from "../components/Spacer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { PageHeader } from "../components/PageHeader";
import { motion, Variants } from "framer-motion";
import Head from "next/head";

const ProjectsPage: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Grant Sander - Projects</title>
        <meta
          name="description"
          content="Some of Grant Sander's side projects."
        />
      </Head>
      <PageHeader
        title="Projects"
        subtitle="A sample of some non-work projects I've worked on."
      />
      <Spacer size="sm" />
      <div className="grid gap-6">
        {projects.map((proj) => (
          <div key={proj.title}>
            <div className="font-bold text-gray-800 dark:text-gray-200 text-lg">
              {proj.title}
            </div>
            <div className="text-gray-700 dark:text-gray-300">
              {proj.description}
            </div>
            {proj.link && (
              <div className="flex">
                <motion.a
                  href={proj.link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block flex text-gray-700 dark:text-gray-300 items-center hover:text-primary-700 dark:hover:text-primary-300 transition-color duration-200 mt-1"
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                >
                  <span className="mr-2">Check it out</span>
                  <motion.span variants={ArrowVariants}>
                    <FontAwesomeIcon icon={faArrowRight} className="w-3" />
                  </motion.span>
                </motion.a>
              </div>
            )}
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

const ArrowVariants: Variants = {
  rest: {
    x: 0,
  },
  hover: {
    x: 5,
  },
};

type Project = {
  title: string;
  description: string;
  link?: {
    href: string;
    title: string;
  };
};

const projects: Project[] = [
  {
    title: "React Native TurboStyles",
    description: `TailwindCSS-inspired styling library for React Native.`,
    link: {
      href: "https://turbostyles.gksander.com/",
      title: "View the docs",
    },
  },
  {
    title: "Personal PokeDex",
    description: `A couch-project I put together while exploring Next.js static site generation. Parsed CSVs of Pokemon data to statically-generate a site with hundreds of highly-optimized pages. Used Node tooling to extract vibrant colors to spice up the app's design.`,
    link: {
      href: "https://github.com/gksander/gks-pokedex-next",
      title: "View the source and live site",
    },
  },
  {
    title: "React Dynamic Geometry",
    description: `A React library for creating dynamic geometry boards. This was a "could I do that?" project, and was more for fun than for real-world use. Uses React, TypeScript, Jotai, and MATH.`,
    link: {
      href: "https://github.com/gksander/react-dynamic-geometry",
      title: "View the source with some examples",
    },
  },
  {
    title: "CIE Color Converter",
    description: `A dependency-free JS library to convert between 7 different color spaces. Lots of fun matrix maths.`,
    link: {
      href: "https://github.com/gksander/CIE-ColorConverter",
      title: "View the source",
    },
  },
  {
    title: "GifMaker",
    description: `Browser-based FFMPEG video converter. Handy for turning .mov files into GIFs.`,
    link: {
      href: "https://github.com/gksander/gif-maker",
      title: "View the source and live site",
    },
  },
  {
    title: "React Native Animation Samples",
    description: `An ongoing playground for creating snippets of cool animations in React Native using React Native's built-in Animated API. A fun place for me to explore mobile animation techniques.`,
    link: {
      href: "https://github.com/gksander/react-native-animation-samples",
      title: "View the source",
    },
  },
  {
    title: `LearnJS Playground`,
    description: `A pet project I started and never finished. Uses Gatsby and MDX to create static pages with JS-based learning exercises. Contains fun little interactive editors for tinkering with JS ideas.`,
    link: {
      href: "https://learnjs.gksander.com/",
      title: "View the live site",
    },
  },
];

export default ProjectsPage;
