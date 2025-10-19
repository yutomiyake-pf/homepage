import { NextPage } from "next";
import { BlogContainer } from "../_features/blog/BlogContainer";

const Page: NextPage = () => {
  return <BlogContainer key={Date.now()} />;
};

export default Page;
