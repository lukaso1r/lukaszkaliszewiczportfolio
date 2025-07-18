'use client';
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Button  } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, CodeXml, Database, Cloud, TableOfContents, MonitorCog, EthernetPort, MonitorSmartphone } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export default function Home() {

  return (
    <div className="mx-auto lg:max-w-[100%]  xl:max-w-[90%] 2xl:max-w-[85rem] min-h-screen flex xl:flex-row flex-col md:items-center xl:items-start justify-center gap-6 md:gap-6 lg:gap-6 xl:gap-20 xl:py-16 md:py-4 lg:py-6">
      <aside className="flex flex-col items-center justify-center p-6 gap-3 w-full xl:w-1/4 text-center">
        <div className="profileImage ">
          <img
            src="Lukasz_Kaliszewicz.webp"
            alt="Lukasz Kaliszewicz"
            width={200}
            height={200}
            className="pb-3"
          />
        </div>
        <div className="profile flex lg:flex-col flex-col gap-3">

          <h1 className="text-3xl font-semibold">Łukasz Kaliszewicz</h1>
          <h2 className="text-base">Początkujący DevOps / IT Administrator</h2>
          <div className="lg:w-42 2xl:w-full w-full">
            <Separator className="bg-[var(--foreground-dark)]" />
          </div>
          <p className="text-base">Tutaj będzie krótki tekst o mnie</p>

          <div className="flex flex-col gap-4 xl:my-6 2xl:my-0">
            <div className="flex flex-col items-center gap-1 mt-3">

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button className="flex flex-row items-center cursor-pointer text-lg" variant="ghost" size="sm" aria-label="Kopiuj e-mail" onClick={() => navigator.clipboard.writeText('lukasz.kaliszewicz01@gmail.com')}>
                    <Mail className="" /> lukasz.kaliszewicz01@gmail.com
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="text-[black] cursor-pointer" side="right">
                  <p onClick={() => navigator.clipboard.writeText('lukasz.kaliszewicz01@gmail.com')}>Copy</p>
                </TooltipContent>
              </Tooltip>
              <Button className="flex flex-row items-center bg-transparent hover:bg-transparent text-base" variant="default" size="sm" aria-label="Kopiuj e-mail">
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
        </div>


      </aside>

      <div className="block xl:hidden w-full">
        <Separator className="bg-[var(--foreground-dark)] xl:mb-6" />
      </div>

      <main className="w-full px-4 md:p-0 md:w-5/6 lg:w-[90%] xl:w-4/5 flex flex-col gap-8">

        <div className="education">
          <h2 className="text-xl font-semibold">Wykształcenie i kursy</h2>
          <Separator className="bg-[var(--foreground-dark)] my-4" />
          <div className="educationStack flex flex-col gap-4">

            <div className="educationItem grid grid-cols-1 xl:flex xl:flex-row gap-2 justify-between">
              <div className="order-last xl:order-1">
                <h3 className="text-lg font-semibold">Politechnika Białostocka</h3>
                <p className="text-[var(--text)]">Kierunek: informatyka, Poziom wykształcenia: inżynier</p>
              </div>
              <div className="-order-1 xl:order-2">
                <p>10.2021 - 02.2025</p>
              </div>
            </div>

            <div className="educationItem grid grid-cols-1 xl:flex xl:flex-row gap-2 justify-between">
              <div className="order-last xl:order-1">
                <h3 className="text-lg font-semibold">Zespół Szkół Elektrycznych im. prof. Janusza Groszkowskiego w Białymstoku</h3>
                <p>Specjalizacja: Technik Informatyk, kwalifikacja zawodowa EE.08, EE.09</p>
              </div>
              <div className="-order-1 xl:order-2">
                <p>09.2017 - 05.2021</p>
              </div>
            </div>

          </div>
        </div>
        
        <div className="tech flex flex-col gap-2">
          <h2 className="text-xl font-semibold">Technologie jakie wykorzystywałem w projektach</h2>
          <Separator className="bg-[var(--foreground-dark)] my-4" />
          <div className="techStack grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-x-9 ">

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
                <Button variant="outline" size="sm">Cisco</Button>
                <Button variant="outline" size="sm">TP-Link</Button>
                <Button variant="outline" size="sm">Mikrotik</Button>
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
                <TableOfContents className="w-5"/> CMS / Headless CMS / Ecommerce / HIS
              </div>

              <div className="techs flex flex-row flex-wrap gap-2 ">
                <Button variant="outline" size="sm">Strapi</Button>
                <Button variant="outline" size="sm">Wordpress</Button>
                <Button variant="outline" size="sm">Shoper</Button>
                <Button variant="outline" size="sm">Optimed NXT</Button>

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
                  <Button variant="outline" size="sm">OpenVPN</Button>

                </div>
            </div>

            

          </div>
        </div>

        <div className="job">
          <h2 className="text-xl font-semibold">Doświadczenie zawodowe</h2>
          <Separator className="bg-[var(--foreground-dark)] my-4" />
          <div className="workStack grid grid-cols-1 md:flex md:flex-col gap-6 md:gap-4">

            <div className="workItem grid grid-cols-1 md:flex md:flex-row gap-y-3 md:gap-y-0 md:gap-x-10  justify-between">
              <div className="order-2 md:order-1">
                <h3 className="text-lg font-semibold pb-2">Administrator IT, Front-end Developer REVIT sp. z o.o. Białystok</h3>
                <p>
                  Wsparcie i administracja IT w Centrum Zdrowia Psychicznego, stworzenie i obsługa stron internetowych,
                  wdrażanie rozwiązań i urządzeń informatycznych, współpracowanie z firmami Diagnostyka i Comarch
                  Healthcare, administracja systemem klasy HIS Optimed NXT, tworzenie i wdrażanie procedur, szkolenie
                  pracowników. Udział w regularnych szkoleniach dotyczących cyfryzacji sektora medycznego oraz
                  systemu Optimed NXT
                </p>
              </div>
              <div className="min-w-fit ">
                <p>11.2022 - obecnie</p>
              </div>
            </div>

            <div className="workItem grid grid-cols-1 md:flex md:flex-row gap-y-3 md:gap-y-0 md:gap-x-10  justify-between">
              <div className="order-2 md:order-1">
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

            <div className="workItem grid grid-cols-1 md:flex md:flex-row gap-y-3 md:gap-y-0 md:gap-x-10  justify-between">
              <div className="order-2 md:order-1">
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

            <div className="workItem grid grid-cols-1 md:flex md:flex-row gap-y-3 md:gap-y-0 md:gap-x-10  justify-between">
              <div className="order-2 md:order-1">
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
