import type { NextPage } from "next";
import Image from "next/image";
import { PageWrapper } from "../components/PageWrapper";

const Home: NextPage = () => {
  return (
    <PageWrapper>
      <div>Yo what it do</div>
    </PageWrapper>
  );
};

Home.displayName = "Home";

export default Home;
