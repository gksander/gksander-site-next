import * as React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MDXProvider } from "@mdx-js/react";
import { MdxMap } from "../lib/mdxMap";

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
      <AppBody>
        <MDXProvider components={MdxMap}>
          <Component {...pageProps} key={router.route} />
        </MDXProvider>
      </AppBody>
    </React.Fragment>
  );
};

const AppBody: React.FC = ({ children }) => {
  return (
    <div className="p-4 sm:px-24 container max-w-2xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center  sm:-mx-20">
        <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden shadow border">
          <Image src={require("../img/headshot-bw.png")} alt="Headshot image" />
        </div>
        <div className="w-4" />
        <div>
          <Link href="/" passHref>
            <a className="font-bold text-2xl">Grant Sander</a>
          </Link>
          <div>
            {HeaderLinks.map(({ title, href }) => (
              <Link href={href} passHref key={href}>
                <a className="mr-2 text-sm text-gray-600 uppercase">{title}</a>
              </Link>
            ))}
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
  );
};

type HeaderLink = { title: string; href: string };
const HeaderLinks: HeaderLink[] = [
  { title: "Projects", href: "/projects" },
  { title: "Snippets", href: "/snippets" },
  { title: "Blog", href: "/blog" },
];

export default App;
