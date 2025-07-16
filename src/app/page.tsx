'use client';
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Button  } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, CodeXml, Database, Cloud, TableOfContents, MonitorCog, EthernetPort, MonitorSmartphone } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export default function Home() {

  return (
    <div className="mx-auto md:max-w-[85rem] min-h-screen flex md:flex-row flex-col items-center justify-center md:gap-20 py-16">
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

        <div className="education">
          <h2 className="text-xl font-semibold">Wykształcenie i kursy</h2>
          <Separator className="bg-[var(--foreground-dark)] my-4" />
          <div className="educationStack flex flex-col gap-4">

            <div className="educationItem flex flex-row gap-2 justify-between">
              <div>
                <h3 className="text-lg font-semibold">Politechnika Białostocka</h3>
                <p className="text-[var(--text)]">Kierunek: informatyka, Poziom wykształcenia: inżynier</p>
              </div>
              <div>
                <p>10.2021 - 02.2025</p>
              </div>
            </div>

            <div className="educationItem flex flex-row gap-2 justify-between">
              <div>
                <h3 className="text-lg font-semibold">Zespół Szkół Elektrycznych im. prof. Janusza Groszkowskiego w Białymstoku</h3>
                <p>Specjalizacja: Technik Informatyk, kwalifikacja zawodowa EE.08, EE.09</p>
              </div>
              <div>
                <p>09.2017 - 05.2021</p>
              </div>
            </div>

          </div>
        </div>
        
        <div className="tech flex flex-col gap-2">
          <h2 className="text-xl font-semibold">Technologie jakie wykorzystywałem w projektach</h2>
          <Separator className="bg-[var(--foreground-dark)]" />
          <div className="techStack grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-9 ">

            <div className="techGroup flex flex-col gap-3">
              <div className="flex flex-row gap-3 text-slate-400">
                <CodeXml className="w-5"/> Języki programowania i frameworki
              </div>

              <div className="techs flex flex-row flex-wrap gap-2">
                <Button variant="outline" size="sm">Java Script</Button>
                <Button variant="outline" size="sm">Typescript</Button>
                <Button variant="outline" size="sm">Python</Button>
                <Button variant="outline" size="sm">Bash</Button>
                <Button variant="outline" size="sm">HTML</Button>
                <Button variant="outline" size="sm">CSS</Button>
                <Button variant="outline" size="sm">Tailwind CSS</Button>
                <Button variant="outline" size="sm">React</Button>
                <Button variant="outline" size="sm">Next.js</Button>
                <Button variant="outline" size="sm">Nuxt.js</Button>
                <Button variant="outline" size="sm">Vue.js</Button>
                <Button variant="outline" size="sm">Ionic Framework</Button>

              </div>
            </div>

            <div className="techGroup flex flex-col gap-3">
              <div className="flex flex-row gap-3 text-slate-400">
                <EthernetPort className="w-5"/> Urządzenia  i usługi sieciowe
              </div>

              <div className="techs flex flex-row flex-wrap gap-2 ">
                <Button variant="outline" size="sm">Switch Cisco</Button>
                <Button variant="outline" size="sm">Router TP-Link</Button>
                <Button variant="outline" size="sm">QNAP NAS</Button>
                <Button variant="outline" size="sm">NextCloud</Button>
                <Button variant="outline" size="sm">Nginx</Button>
                <Button variant="outline" size="sm">DNS</Button>
                <Button variant="outline" size="sm">DDNS</Button>
                <Button variant="outline" size="sm">DHCP</Button>
                <Button variant="outline" size="sm">VPN</Button>
                <Button variant="outline" size="sm">SSH</Button>
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
                <MonitorCog className="w-5"/> Systemy operacyjne i wirtualizacja
              </div>

              <div className="techs flex flex-row flex-wrap gap-2 ">
                <Button variant="outline" size="sm">Windows</Button>
                <Button variant="outline" size="sm">Ubuntu</Button>
                <Button variant="outline" size="sm">Ubuntu Server</Button>
                <Button variant="outline" size="sm">Proxmox</Button>
              </div>
            </div>

            <div className="techGroup flex flex-col gap-3">
                <div className="flex flex-row gap-3 text-slate-400">
                  <MonitorSmartphone className="w-5"/> Oprogramowanie akcesoryjne
                </div>

                <div className="techs flex flex-row flex-wrap gap-2 ">
                  <Button variant="outline" size="sm">Postman</Button>
                  <Button variant="outline" size="sm">Git</Button>
                  <Button variant="outline" size="sm">GitHub</Button>
                  <Button variant="outline" size="sm">Optimed NXT</Button>
                  <Button variant="outline" size="sm">OpenVPN</Button>

                </div>
            </div>

            

          </div>
        </div>

        <div className="job">
          <h2 className="text-xl font-semibold">Doświadczenie zawodowe</h2>
          <Separator className="bg-[var(--foreground-dark)] my-4" />
          <div className="workStack flex flex-col gap-4">

            <div className="workItem flex flex-row gap-x-10 justify-between">
              <div>
                <h3 className="text-lg font-semibold pb-2">Administrator IT, Front-end Developer REVIT sp. z o.o. Białystok</h3>
                <p>
                  Wsparcie i administracja IT w Centrum Zdrowia Psychicznego, stworzenie i obsługa stron internetowych,
                  wdrażanie rozwiązań i urządzeń informatycznych, współpracowanie z firmami Diagnostyka i Comarch
                  Healthcare, administracja systemem klasy HIS Optimed NXT, tworzenie i wdrażanie procedur, szkolenie
                  pracowników. Udział w regularnych szkoleniach dotyczących cyfryzacji sektora medycznego oraz
                  systemu Optimed NXT
                </p>
              </div>
              <div className="min-w-fit">
                <p>11.2022 - obecnie</p>
              </div>
            </div>

            <div className="workItem flex flex-row gap-10 justify-between">
              <div>
                <h3 className="text-lg font-semibold pb-2">Freelancer - strony, sklepy internetowe, administracja, czynności serwerowe, montaż komputerów.</h3>
                <p>
                  Tworzenie stron i sklepów internetowych w oparciu o Woocommerce, Shoper, Nuxt.js, React, Strapi,
                  Vue.js. Tworzenie aplikacji mobilnych z użyciem Ionic Framework. Wdrażanie rozwiązań Qnap NAS.
                  Tworzenie i utrzymywanie serwera gier na własnym serwerze w ramach Home Lab, wykorzystywanie
                  Proxmox i związanej z nim konteneryzacji i wirtualizacji, obsługa Ubuntu Server. Wykorzystywanie
                  Cloudflare R2 Bucket, serwerów VPS Mikr.us.
                </p>
              </div>
              <div className="min-w-fit">
                <p className="min-w-fit">07.2021 - obecnie</p>
              </div>
            </div>

            <div className="workItem flex flex-row gap-10 justify-between">
              <div>
                <h3 className="text-lg font-semibold pb-2">Front-end developer Centrum Wspinaczkowe FLASH Białystok</h3>
                <p>
                  Praktyki - wytwarzanie aplikacji mobilnej dla klientów oraz pracowników Centrum Wspinaczkowego z
                  wykorzystaniem Nuxt, TypeScript i Ionic Framework.
                </p>
              </div>
              <div className="min-w-fit">
                <p className="min-w-fit">03.2024 - 07.2024</p>
              </div>
            </div>

            <div className="workItem flex flex-row gap-10 ">
              <div>
                <h3 className="text-lg font-semibold pb-2">Front-end Developer Stroniarz.pl Białystok</h3>
                <p className="">
                  Praca poprzedzona miesięcznym stażem, tworzenie, rozwijanie i zarządzanie stronami oraz sklepami
                  internetowymi na platformie Wordpress i PrestaShop. Podstawowa obróbka zdjęć w Photoshop.
                  Działania SEO
                </p>
              </div>
              <div className="min-w-fit">
                <p className="min-w-fit">02.2020 - 02.2021</p>
              </div>
            </div>

          </div>
        </div>


      </main>

    </div>
  );
}
