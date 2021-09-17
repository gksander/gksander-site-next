import * as React from "react";
import classNames from "classnames";
import { Spacer } from "../components/Spacer";
import { PageWrapper } from "../components/PageWrapper";

// Experience shape
type IExperience = {
  title: string;
  company: string;
  description: string;
  time: string;
};

const experiences: IExperience[] = [
  {
    title: "Sr. Software Engineer",
    company: "Formidable Labs",
    description: `Software consultant, building software and helping others build software better. Focus on front-end web and native mobile using primarily JS tooling.`,
    time: `Mar. 2021 &ndash; Current`,
  },
  {
    title: "Sr. Software Engineer",
    company: "Synapse Studios",
    description: `Full-stack web and mobile. TypeScript, React, React Native, and Node.js.`,
    time: `Jan. 2020 &ndash; Current`,
  },
  {
    title: "Sr. Software Engineer",
    company: "Henri Home",
    description: `Full-stack web and mobile development. React Native, Vue.JS, and Ruby on Rails.`,
    time: `Sept. 2019 &ndash; Jan. 2020`,
  },
  {
    title: `Software Engineer`,
    company: "Artisan Colour",
    description: `Full-stack web development of eCommerce sites and internal tools. Vue.js, NodeJS, and MongoDB.`,
    time: `Aug. 2018 &ndash; Sept. 2019`,
  },
  {
    title: `Software Engineer`,
    company: "COSma Learning",
    description: `Development of custom online math courseware. JavaScript, PHP, and MySQL.`,
    time: `Jan. 2015 &ndash; Aug. 2018`,
  },
  {
    title: `Math Instructor`,
    company: "Arizona State University",
    description: `Taught precalculus and courses for future math teachers, lead many professional development workshops for university instructors. Research and development of math curriculum.`,
    time: `May 2014 &ndash; Jan. 2016`,
  },
];

type EducationItem = {
  title: string;
  institution: string;
  time: string;
  description: string;
};
const educationItems: EducationItem[] = [
  {
    time: "2018",
    title: "M.A - Mathematics",
    institution: "Arizona State University",
    description: `4.0 GPA. Focus on theoretical mathematics, math education, and online curriculum development.`,
  },
  {
    time: "2014",
    title: "B.S. - Mathematics",
    institution: "Arizona State University",
    description: `4.0 GPA. Focus on theoretical and applied mathematics.`,
  },
];

type ToolItem = {
  title: string;
  description: string;
};
const toolItems: ToolItem[] = [
  {
    title: "HTML & CSS",
    description: "JSX, SASS, TailwindCSS",
  },
  {
    title: "JavaScript and TypeScript",
    description: "ES6, modern TS, and beyond.",
  },
  {
    title: "React.js and friends",
    description: "React, Next.js, Redux, MobX, etc.",
  },
  {
    title: "React Native",
    description:
      "Navigation, animation, native development with Swift & Kotlin.",
  },
  {
    title: "Vue.js and friends",
    description: "Vue, Vuex, Nuxt, Vue Router.",
  },
  {
    title: "Node.js",
    description: "Express, Hapi, Strapi.",
  },
  {
    title: "Ruby on Rails",
    description: "PostgreSQL, CanCan, GrapeAPI.",
  },
];

const DetailItem: React.FC<{
  title: string;
  subtitle: string;
  heading: string;
  description: string;
  isPrimary?: boolean;
}> = ({ title, subtitle, heading, description, isPrimary }) => (
  <div>
    <div
      className="text-gray-700  text-sm"
      dangerouslySetInnerHTML={{ __html: heading }}
    />
    <div
      className={classNames(
        "font-bold leading-5",
        isPrimary ? "text-xl text-primary-700" : "text-lg"
      )}
    >
      {title}
    </div>
    <div className={classNames("font-bold mb-2 text-gray-700")}>{subtitle}</div>
    <div className="text-gray-700 leading-snug text-sm">{description}</div>
  </div>
);

const SectionTitle: React.FC = ({ children }) => (
  <div className="font-fancy text-3xl">{children}</div>
);

/**
 * Resume screen
 */
const Resume: React.FC = () => {
  return (
    <PageWrapper>
      <div className="font-fancy text-6xl font-thin text-primary-700 mb-1">
        Resume
      </div>
      <div>A little bit about my professional past, present, and future.</div>
      <Spacer size="sm" />
      {/* Experience */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        <SectionTitle>Experience</SectionTitle>
        <div className="lg:col-span-2 grid gap-4">
          {experiences.map((exp, i) => (
            <DetailItem
              title={exp.company}
              subtitle={exp.title}
              heading={exp.time}
              description={exp.description}
              key={exp.company}
              isPrimary={i === 0}
            />
          ))}
        </div>
      </div>
      <Spacer />
      {/* Education */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        <SectionTitle>Education</SectionTitle>
        <div className="lg:col-span-2 grid gap-4">
          {educationItems.map((line, i) => (
            <DetailItem
              title={line.title}
              subtitle={line.institution}
              heading={line.time}
              description={line.description}
              key={i}
            />
          ))}
        </div>
      </div>
      <Spacer />
      {/* Tools */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        <SectionTitle>Tools</SectionTitle>
        <div className="lg:col-span-2 grid gap-4">
          {toolItems.map((item) => (
            <div key={item.title}>
              <div className="font-bold">{item.title}</div>
              <div className="text-gray-700">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Resume;
