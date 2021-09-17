import * as React from "react";
import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { PageWrapper } from "../../components/PageWrapper";
import { PageHeader } from "../../components/PageHeader";

type PageProps = {
  items: string[];
};

const SnippetsPage: NextPage<PageProps> = ({ items }) => {
  console.log(items);
  return (
    <div>
      <PageHeader title="Snippets" subtitle="Snippets coming soon..." />
      {items.map((l) => (
        <Link key={l} href={l}>
          {l}
        </Link>
      ))}
    </div>
  );
};

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const fs = require("fs/promises");
  const path = require("path");

  const r = /\.mdx?$/;
  const paths = await fs.readdir(path.join(process.cwd(), "pages", "snippets"));
  const mdxPaths = paths
    .filter((p: string) => r.test(p))
    .map((p: string) => `/snippets/${p.replace(r, "")}`);

  console.log(mdxPaths);

  return {
    props: {
      items: mdxPaths,
    },
  };
};

export default SnippetsPage;
