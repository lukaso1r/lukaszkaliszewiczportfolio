import Image from "next/image";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <div className="content-container bg-gray-700" >
          <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-3xl font-bold mb-2">Lukasz Kaliszewicz</h1>
            <p className="text-lg text-gray-600">Web Developer</p>
          </div>
        </div>
      </main>
    </div>
  );
}
