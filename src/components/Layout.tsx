import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Outlet />
    </main>
  );
}
