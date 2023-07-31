import Image from "next/image";
import Navbar from "@components/Navbar";
import HomeBody from "@components/HomeBody";
import Particle from "@components/Particle";
import Contact from "@components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-4 my-8 mx-6 md:mx-14">
      <div className="z-10">
        <Navbar />
        <HomeBody />
        <Contact />
      </div>
      <Particle />
    </main>
  );
}
