'use client';
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Button  } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, CodeXml, Database, Cloud, TableOfContents, MonitorCog, EthernetPort } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export default function Home() {

  return (
    <div className="mx-auto md:max-w-[85rem] min-h-screen flex md:flex-row flex-col items-center justify-center md:gap-20">
      <aside className="flex flex-col items-center justify-center p-6 gap-3 md:w-1/4 text-center">
        
        <div className="profileImage ">
          <img
            src="Lukasz_Kaliszewicz.webp"
            alt="Lukasz Kaliszewicz"
            width={200}
            height={200}
            className="pb-3"
          />
        </div>

        <h1 className="text-3xl font-semibold">Łukasz Kaliszewicz</h1>
        <h2>Początkujący DevOps / IT Administrator</h2>
        <div className="w-42">
          <Separator className="bg-[var(--foreground-dark)]" />
        </div>
        <p>Tutaj będzie krótki tekst o mnie</p>

        <div className="flex flex-col gap-4 my-6">
          <div className="flex flex-col items-center gap-1">

            <Tooltip>
              <TooltipTrigger>
                <Button className="flex flex-row items-center cursor-pointer" variant="ghost" size="sm" aria-label="Kopiuj e-mail" onClick={() => navigator.clipboard.writeText('lukasz.kaliszewicz01@gmail.com')}>
                  <Mail className="" /> lukasz.kaliszewicz01@gmail.com
                </Button>
              </TooltipTrigger>
              <TooltipContent className="text-[black] cursor-pointer" side="right">
                <p onClick={() => navigator.clipboard.writeText('lukasz.kaliszewicz01@gmail.com')}>Copy</p>
              </TooltipContent>
            </Tooltip>
            <Button className="flex flex-row items-center bg-transparent hover:bg-transparent" variant="default" size="sm" aria-label="Kopiuj e-mail">
              <MapPin className="" /> Biaystok / Warszawa
            </Button>

          </div>
          <div className="flex flex-row items-center gap-2 justify-center">
            <Button className="flex flex-row items-center cursor-pointer" variant="ghost" size="sm" aria-label="Github" onClick={() => window.open('', '_blank')}>
              <Github className="" /> Github
            </Button>
            <Button className="flex flex-row items-center cursor-pointer" variant="ghost" size="sm" aria-label="Linkedin" onClick={() => window.open('', '_blank')}>
              <Linkedin className="" /> Linkedin
            </Button>
          </div>
        </div>

      </aside>

      <main className="w-3/4 flex flex-col gap-8">
        
        <div className="tech flex flex-col gap-2">
          <h2 className="text-xl font-semibold">Technologie jakie wykorzystywałem w projektach</h2>
          <Separator className="bg-[var(--foreground-dark)]" />
          <div className="techStac grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-9 ">

            <div className="techGroup flex flex-col gap-3">
              <div className="flex flex-row gap-3 text-slate-400">
                <CodeXml className="w-5"/> Języki programowania
              </div>

              <div className="techs flex flex-row flex-wrap gap-2">
                <Button variant="outline" size="sm">Java Script</Button>
                <Button variant="outline" size="sm">Typescript</Button>
                <Button variant="outline" size="sm">Python</Button>
                <Button variant="outline" size="sm">Bash</Button>
                <Button variant="outline" size="sm">HTML</Button>
                <Button variant="outline" size="sm">CSS</Button>
                <Button variant="outline" size="sm">Tailwind CSS</Button>

              </div>
            </div>

            <div className="techGroup flex flex-col gap-3">
              <div className="flex flex-row gap-3 text-slate-400">
                <Database className="w-5"/> Bazy danych
              </div>

              <div className="techs flex flex-row flex-wrap gap-2">
                <Button variant="outline" size="sm">PostgreSql</Button>
                <Button variant="outline" size="sm">SQLite</Button>
              </div>
            </div>

            <div className="techGroup flex flex-col gap-3">
              <div className="flex flex-row gap-3 text-slate-400">
                <Cloud className="w-5"/> Rozwiązania chmurowe
              </div>

              <div className="techs flex flex-row flex-wrap gap-2 ">
                <Button variant="outline" size="sm">Cloudflare R2 Bucket</Button>
                <Button variant="outline" size="sm">Mikr.us VPS</Button>
                <Button variant="outline" size="sm">Vercel</Button>
                <Button variant="outline" size="sm">OVH</Button>
              </div>
            </div>

            <div className="techGroup flex flex-col gap-3">
              <div className="flex flex-row gap-3 text-slate-400">
                <TableOfContents className="w-5"/> CMS / Headless CMS / Ecommerce
              </div>

              <div className="techs flex flex-row flex-wrap gap-2 ">
                <Button variant="outline" size="sm">Strapi</Button>
                <Button variant="outline" size="sm">Wordpress</Button>
                <Button variant="outline" size="sm">Shoper</Button>
              </div>
            </div>

            <div className="techGroup flex flex-col gap-3">
              <div className="flex flex-row gap-3 text-slate-400">
                <MonitorCog className="w-5"/> Systemy operacyjne
              </div>

              <div className="techs flex flex-row flex-wrap gap-2 ">
                <Button variant="outline" size="sm">Windows</Button>
                <Button variant="outline" size="sm">Ubuntu</Button>
              </div>
            </div>

              <div className="techGroup flex flex-col gap-3">
              <div className="flex flex-row gap-3 text-slate-400">
                <EthernetPort className="w-5"/> Urządzenia sieciowe
              </div>

              <div className="techs flex flex-row flex-wrap gap-2 ">
                <Button variant="outline" size="sm">Switch Cisco</Button>
                <Button variant="outline" size="sm">Router TP-Link</Button>
                <Button variant="outline" size="sm">Ubuntu Server</Button>
              </div>
            </div>

          </div>
        </div>

        <div className="job">
          <h2 className="text-xl font-semibold">Doświadczenie zawodowe</h2>
          <Separator className="bg-[var(--foreground-dark)] my-4" />
          <div className="experience">

          </div>
        </div>


      </main>

    </div>
  );
}
