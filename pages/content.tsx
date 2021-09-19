import * as React from "react";
import { NextPage } from "next";
import { Spacer } from "../components/Spacer";
import { PageHeader } from "../components/PageHeader";
import Image from "next/image";

const ContentPage: NextPage = () => {
  return (
    <div>
      <PageHeader
        title="Content"
        subtitle="Some content I've created over the years."
      />
      <Spacer size="sm" />
      <ContentListing title="Blog Posts" content={BlogPosts} />
      <Spacer size="sm" />
      {/*<SectionTitle>Conference Presentations</SectionTitle>*/}
      {/*<Spacer size="sm" />*/}
      <ContentListing title="Snippets" content={Snippets} hasPreview />
    </div>
  );
};

const SectionTitle: React.FC = ({ children }) => {
  return (
    <div className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
      {children}
    </div>
  );
};

const ContentListing: React.FC<{
  title: string;
  content: ContentPiece[];
  hasPreview?: boolean;
}> = ({ title, content, hasPreview }) => {
  return (
    <React.Fragment>
      <SectionTitle>{title}</SectionTitle>
      <div className="grid gap-3">
        {content.map((post) => (
          <a
            key={post.href}
            href={post.href}
            target="blank"
            className="group flex items-center"
          >
            <div className="flex-1">
              <div className="font-bold text-gray-800 dark:text-gray-200 group-hover:text-primary-800 dark:group-hover:text-primary-300 transition transition-colors duration-300">
                {post.title}
              </div>
              <div className="text-gray-700 dark:text-gray-300 text-sm">
                {post.description}
              </div>
            </div>
            {hasPreview && post.preview && (
              <div className="w-12 sm:w-16 sm:ml-1 filter sm:grayscale sm:blur-sm group-hover:filter-none transition-all duration-300">
                <Image src={post.preview} alt="Preview of this snippet" />
              </div>
            )}
          </a>
        ))}
      </div>
    </React.Fragment>
  );
};

type ContentPiece = {
  title: string;
  description: string;
  href: string;
  preview?: string;
};

const BlogPosts: ContentPiece[] = [
  {
    title: "From React Web to React Native",
    description: "What to expect when moving from React Web to React Native.",
    href: "https://formidable.com/blog/2021/rn-vs-react/",
  },
  {
    title: "Intro to Reanimated 2",
    description:
      "An introduction to React Native Reanimated V2, with illustrative example.",
    href: "https://formidable.com/blog/2021/reanimated-two/",
  },
  {
    title: "Tilt Carousel with React Native",
    description:
      'Using React Native\'s FlatList component to create a "Tilt Carousel".',
    href: "https://dev.to/gksander/react-native-tilt-carousel-animation-13ep",
  },
  {
    title: "Webp-ing Your Site for Faster Images",
    description: "How to create WebP images and load them in a front-end app.",
    href: "https://dev.to/gksander/webp-ing-your-site-reduce-image-file-size-increase-site-performance-4ho8",
  },
  {
    title: "Keyboard Display with CSS Grid",
    description: "Using CSS grid to create a keyboard display.",
    href: "https://dev.to/gksander/a-keyboard-display-using-css-grid-2k2n",
  },
];

const Snippets: ContentPiece[] = [
  {
    title: '"Following Card" with CSS Variables',
    description:
      "Using event listeners to track cursor position, and then using CSS variables/calculations to make a UI card follow the cursor.",
    href: "https://codesandbox.io/s/react-css-variables-mgtp5?file=/src/styles.css",
    preview: require("../img/following-card.gif"),
  },
  {
    title: "Loading Speedometer with CSS",
    description: "Using SVG and CSS to create a speedometer loading indicator.",
    href: "https://codesandbox.io/s/loading-speedometer-wf0vi",
    preview: require("../img/loading-speedometer.gif"),
  },
  {
    title: "Loading Clock",
    description: "Clock loading indicator with SVG and CSS animations",
    href: "https://codesandbox.io/s/loading-clock-iotgj",
    preview: require("../img/loading-clock.gif"),
  },
];

export default ContentPage;
