import * as React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MDXProvider } from "@mdx-js/react";
import { MdxMap } from "../lib/mdxMap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { PageWrapper } from "../components/PageWrapper";
import { useRouter } from "next/router";
import classNames from "classnames";

const App: React.FC<AppProps> = ({ Component, pageProps, router }) => {
  return (
    <React.Fragment>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Sansita+Swashed:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <MDXProvider components={MdxMap}>
        <AppBody>
          <PageWrapper key={router.route}>
            <Component {...pageProps} />
          </PageWrapper>
        </AppBody>
      </MDXProvider>
    </React.Fragment>
  );
};

const AppBody: React.FC = ({ children }) => {
  const router = useRouter();
  const activeRoute = router.route;

  return (
    <div className="dark:bg-gray-700 dark:text-white min-h-screen">
      <div className="p-4 sm:px-24 container max-w-2xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:-mx-20">
          <div className="w-16 h-16 mr-4 bg-gray-200 rounded-full overflow-hidden shadow border">
            <Image
              src={require("../img/headshot-bw.png")}
              alt="Headshot image"
            />
          </div>
          <div className="flex-grow sm:mr-20">
            <Link href="/" passHref>
              <a className="font-bold text-2xl">Grant Sander</a>
            </Link>
            <div className="flex flex-col sm:flex-row justify-between w-full text-sm text-gray-600 dark:text-gray-200">
              <div className="flex-grow">
                {HeaderLinks.map(({ title, href }) => (
                  <Link href={href} passHref key={href}>
                    <a
                      className={classNames(
                        "mr-2 uppercase transition transition-colors duration-150",
                        activeRoute === href
                          ? "text-primary-800 dark:text-primary-200"
                          : ""
                      )}
                    >
                      {title}
                    </a>
                  </Link>
                ))}
              </div>
              <div className="flex">
                {SocialLinks.map(({ href, title, icon }) => (
                  <a
                    href={href}
                    target="blank"
                    key={title}
                    className="flex mr-3 last:mr-0"
                  >
                    <FontAwesomeIcon icon={icon} className="w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Body */}
        <div className="py-6">
          <AnimatePresence exitBeforeEnter initial={false}>
            {children}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

type HeaderLink = { title: string; href: string };
const HeaderLinks: HeaderLink[] = [
  { title: "Projects", href: "/projects" },
  { title: "Snippets", href: "/snippets" },
  { title: "Blog", href: "/blog" },
  { title: "Resume", href: "/resume" },
];

const SocialLinks: { title: string; href: string; icon: any }[] = [
  { title: "GitHub", href: "https://github.com/gksander", icon: faGithub },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/gksander/",
    icon: faLinkedin,
  },
];

export default App;
