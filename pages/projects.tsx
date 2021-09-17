import * as React from "react";
import { NextPage } from "next";
import { PageWrapper } from "../components/PageWrapper";
import { Spacer } from "../components/Spacer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { PageHeader } from "../components/PageHeader";

const ProjectsPage: NextPage = () => {
  return (
    <PageWrapper>
      <PageHeader
        title="Projects"
        subtitle="A sample of some things I've worked on."
      />
      <Spacer size="sm" />
      <div className="grid gap-6">
        {projects.map((proj) => (
          <div key={proj.title}>
            <div className="font-bold text-gray-800 text-lg">{proj.title}</div>
            <div className="text-gray-700">{proj.description}</div>
            {proj.link && (
              <div className="flex">
                <a
                  href={proj.link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block flex text-gray-700 items-center hover:text-primary-700 transition-color duration-200 mt-1"
                >
                  <span className="mr-2">{proj.link.title}</span>
                  <FontAwesomeIcon icon={faArrowRight} className="w-3" />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </PageWrapper>
  );
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
    title: "ArtisanHD Configurator",
    description: `This is a production app I built for Artisan Colour using full-stack JavaScript (Vue.js on the front, Node.js on the back). Custom product configurator and checkout flow with 2D and 3D product previews.`,
    link: {
      href: "https://secure.artisanhd.com",
      title: "View the live site",
    },
  },
  {
    title: "React Dynamic Geometry",
    description: `A React library for creating dynamic geometry boards. This was a "could I do that?" project, and was more for fun than for real-world use. Uses React, TypeScript, Jotai, and _MATH_.`,
    link: {
      href: "https://github.com/gksander/react-dynamic-geometry",
      title: "View the source with some examples",
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
