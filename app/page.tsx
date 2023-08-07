import Image from "next/image";
import Navbar from "@components/Navbar";
import HomeBody from "@components/HomeBody";
import Particle from "@components/Particle";
import Contact from "@components/Contact";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col pt-4 pl-4 pr-4 mt-4 mx-6 md:mx-14">
      <div className="z-10">
        <Navbar />
        <HomeBody />
        <Contact />
        <Footer />
      </div>
      <Particle />
    </main>
  );
}
