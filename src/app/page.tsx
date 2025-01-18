import Image from "next/image";
import Navbar from './components/NavBar';
import LandingPage from "./components/LandingPage";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
    <Navbar />
    <LandingPage />
  </main>
  );
}
