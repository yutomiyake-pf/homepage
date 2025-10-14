import { NextPage } from "next";
import { CareerContainer } from "../_features/career/CareerContainer";

const Page: NextPage = () => {
  return <CareerContainer key={Date.now()} />;
};

export default Page;
