import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import Hero from "./components/UserCard";
import Navbar from "./components/Navbar";
import About from "./components/About";

export default async function Home() {
  const session = await getServerSession(options);

  return (
    <>
      {session ? (
        <div>
          <Navbar user={session?.user} />
          <Hero user={session?.user} pagetype={"Home"} />
          <About user={session?.user} pagetype={"Home"} />
        </div>
      ) : (
        <div>
          <Navbar user={null} />
          <Hero
            user={{ name: null, email: null, image: null }}
            pagetype={"Home"}
          />
          <About user={null} pagetype={"Home"} />
        </div>
      )}
    </>
  );
}
