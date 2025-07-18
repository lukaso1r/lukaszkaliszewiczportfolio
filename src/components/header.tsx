// import { ThemeSwitcher } from "@/components/theme-switcher";
import { MainNav } from "./main-nav";
// import { NavigationMenuDemo } from "./NavigationMenuDemo";



export const Header = () => (
  <header className="flex justify-between items-center p-4 border-b-2 ">
    <h1 className="text-xl font-bold">lukaszkaliszewicz.pl</h1>
    <MainNav />
    {/* <NavigationMenuDemo /> */}
    
    {/* <ThemeSwitcher /> */}
  </header>
);
