import * as React from "react";
import { NextPage } from "next";
import { PageWrapper } from "../../components/PageWrapper";
import { PageHeader } from "../../components/PageHeader";

const SnippetsPage: NextPage = () => {
  return (
    <PageWrapper>
      <PageHeader title="Snippets" subtitle="Some snippets...">
        Snippets
      </PageHeader>
    </PageWrapper>
  );
};

export default SnippetsPage;
