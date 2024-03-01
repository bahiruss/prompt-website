'use client'
import Feed from "@components/Feed";
import { useSession } from "next-auth/react";

const Home = () => {
    const { data: session } = useSession();

  return(
  <section className="w-full flex-center flex-col">
    <h1 className="head_text text-center">
      Discover & Share
      <br className="max-md:hidden" />
      <span className="orange_gradient text-center"> AI-Powered Comments</span>
    </h1>
    <p className="text-center">
      Promptopia is an open-source AI Commenting tool for modern world to
      discover, create and share creative Comments
    </p>

    {session?.user ? <Feed /> : <div></div> }
  </section>
);
}

export default Home;
