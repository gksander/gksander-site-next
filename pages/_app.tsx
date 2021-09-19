import * as React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import Head from "next/head";
import {
  AnimatePresence,
  motion,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { PageWrapper } from "../components/PageWrapper";
import { useRouter } from "next/router";
import classNames from "classnames";

const App: React.FC<AppProps> = ({ Component, pageProps, router }) => {
  return (
    <React.Fragment>
      <Head>
        <title>Grant Sander</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Sansita+Swashed:wght@300;400&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <AppBody>
        <PageWrapper key={router.route}>
          <Component {...pageProps} />
        </PageWrapper>
      </AppBody>
    </React.Fragment>
  );
};

const AppBody: React.FC = ({ children }) => {
  const router = useRouter();
  const activeRoute = router.route;
  const headerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useViewportScroll();
  const barWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  React.useEffect(() => {
    const listener = () => {
      if (window.scrollY > 0) {
        headerRef.current?.classList?.add?.(
          "border-gray-200",
          "dark:border-gray-800"
        );
      } else {
        headerRef.current?.classList?.remove?.(
          "border-gray-200",
          "dark:border-gray-800"
        );
      }
    };
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  return (
    <div className="bg-white dark:bg-gray-700 dark:text-white min-h-screen">
      <div className="px-2 sm:px-24 container max-w-2xl">
        {/* Header */}
        <header
          ref={headerRef}
          className="py-4 z-10 flex flex-col sm:flex-row sm:items-end sticky top-0 bg-white dark:bg-gray-700  border-b border-transparent transition transition-colors duration-300"
        >
          <motion.div
            className="absolute top-0 h-1 bg-gray-200 dark:bg-gray-800 w-full"
            style={{ width: barWidth }}
          />
          <div className="flex justify-center sm:-ml-20 bg-white dark:bg-gray-700">
            <div className="w-12 h-12 sm:w-16 sm:h-16 mr-4 bg-gray-200 rounded-full overflow-hidden shadow border dark:border-gray-600">
              <Image
                src={require("../img/headshot-bw.png")}
                alt="Headshot image"
              />
            </div>
          </div>
          <div className="flex-grow">
            <div className="flex sm:justify-between items-center">
              <Link href="/" passHref>
                <a className="font-bold text-xl sm:text-2xl hover:text-primary-800 dark:hover:text-primary-200 transition transition-colors duration-150">
                  Grant Sander
                </a>
              </Link>
              <div className="flex text-gray-600 dark:text-gray-200 ml-3 sm:ml-0">
                {SocialLinks.map(({ href, title, icon }) => (
                  <a
                    href={href}
                    target="blank"
                    key={title}
                    className="flex mr-3 last:mr-0 hover:text-primary-800 dark:hover:text-primary-200 transition transition-colors duration-150"
                    aria-label={`Link to ${title} social account`}
                  >
                    <FontAwesomeIcon icon={icon} className="w-4" />
                  </a>
                ))}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between w-full text-sm text-gray-600 dark:text-gray-200">
              <div className="flex-grow">
                {HeaderLinks.map(({ title, href }) => (
                  <Link href={href} passHref key={href}>
                    <a
                      className={classNames(
                        "mr-2 sm:mr-3 uppercase transition transition-colors duration-150 hover:text-primary-800 dark:hover:text-primary-200",
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
            </div>
          </div>
        </header>
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
  { title: "Content", href: "/content" },
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
