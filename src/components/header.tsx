// import { ThemeSwitcher } from "@/components/theme-switcher";
import { MainNav } from "./main-nav";
import Link from "next/link";



export const Header = () => (
  <header className=" top-0 background flex justify-between items-center p-4 border-b-2 bg-[#181a20]/80 transition-all duration-500 ease-in-out
        sticky shadow-lg backdrop-blur-md">
    <Link href="/" className="flex items-center">
      <h1 className="text-xl font-bold">lukaszkaliszewicz.pl</h1>
    </Link>
    <MainNav />
    
    {/* <ThemeSwitcher /> */}
  </header>
);
