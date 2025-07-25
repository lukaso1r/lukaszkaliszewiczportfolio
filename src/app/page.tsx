'use client';
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Button  } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, CodeXml, Database, Cloud, TableOfContents, MonitorCog, EthernetPort, MonitorSmartphone } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {



  const [copied, setCopied] = useState(false);

  return (
    <div className="mx-auto lg:max-w-[100%]  xl:max-w-[90%] 2xl:max-w-[85rem] min-h-screen flex xl:flex-row flex-col md:items-center xl:items-start justify-center gap-6 md:gap-6 lg:gap-6 xl:gap-14 xl:py-14 md:py-4 lg:py-6">
      <aside className="flex flex-col items-center justify-center p-6 gap-3 w-full xl:w-1/4 text-center">
        <div className="profileImage ">
          <Image
            src="/Lukasz_Kaliszewicz.webp"
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
          {/* <p className="text-base">Tutaj będzie krótki tekst o mnie</p> */}

          <div className="flex flex-col gap-4 xl:my-6 2xl:my-0">
            <div className="flex flex-col items-center gap-1 mt-3">

              <Tooltip>
                <TooltipTrigger asChild>
                  <div
                    className="flex flex-row items-center cursor-pointer text-lg gap-2"
                    onClick={async () => {
                      await navigator.clipboard.writeText('lukasz.kaliszewicz01@gmail.com');
                      setCopied(true);
                      setTimeout(() => setCopied(false), 1500);
                    }}
                  >
                    <Mail className="w-4 h-4" /> lukasz.kaliszewicz01@gmail.com
                  </div>
                </TooltipTrigger>
                <TooltipContent side="right" onClick={async () => {
                      await navigator.clipboard.writeText('lukasz.kaliszewicz01@gmail.com');
                      setCopied(true);
                      setTimeout(() => setCopied(false), 1500);
                    }}>
                  {copied ? "Skopiowano!" : "Kliknij aby skopiować"}
                </TooltipContent>
              </Tooltip>

               {copied && (
                 <p>Skopiowano!</p>
               )}

              <Button className="flex flex-row items-center bg-transparent hover:bg-transparent text-base" variant="default" size="sm" aria-label="Kopiuj e-mail">
                <MapPin className="" /> Białystok / Warszawa
              </Button>

            </div>
            <div className="flex flex-row items-center gap-2 justify-center">
              <Button className="flex flex-row items-center cursor-pointer" variant="ghost" size="sm" aria-label="Github" onClick={() => window.open('https://github.com/lukaso1r', '_blank')}>
                <Github className="" /> Github
              </Button>
              <Button className="flex flex-row items-center cursor-pointer" variant="ghost" size="sm" aria-label="Linkedin" onClick={() => window.open('https://www.linkedin.com/in/%C5%82ukasz-kaliszewicz-70b543318/', '_blank')}>
                <Linkedin className="" /> Linkedin
              </Button>
            </div>
          </div>
        </div>


      </aside>

      <div className="block xl:hidden w-full">
        <Separator className="bg-[var(--foreground-dark)] xl:mb-6" />
      </div>

      <nav className="flex-col gap-4 justify-center xl:flex-col xl:items-start xl:gap-2 xl:w-auto mb-4 xl:sticky xl:top-20 xl:flex hidden">
        <div className="flex flex-col gap-4 items-start ">
          <Button variant="ghost" size="sm" asChild>
            <Link href="#education">Wykształcenie</Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="#technologies">Technologie</Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="#experience">Doświadczenie</Link>
          </Button>
        </div>
      </nav>

      <main className="w-full px-4 md:p-0 md:w-5/6 lg:w-[90%] xl:w-4/5 flex flex-col gap-8">

        <div className="education">
          <h2 id="education" className="scroll-mt-20 text-xl font-semibold">Wykształcenie i kursy</h2>
          <Separator className="bg-[var(--foreground-dark)] my-4 2xl:mt-2" />
          <div className="educationStack flex flex-col gap-4">

            <div className="educationItem grid grid-cols-1 xl:flex xl:flex-row gap-2 justify-between">
              <div className="order-last xl:order-1">
                <h3 className="text-lg font-semibold">Informatyka, Poziom wykształcenia: inżynier</h3>
                <p className="text-[var(--text)]">Politechnika Białostocka</p>
              </div>
              <div className="-order-1 xl:order-2">
                <p>10.2021 - 02.2025</p>
              </div>
            </div>

            <div className="educationItem grid grid-cols-1 xl:flex xl:flex-row gap-2 justify-between">
              <div className="order-last xl:order-1">
                <h3 className="text-lg font-semibold">Technik Informatyk, kwalifikacja zawodowa EE.08, EE.09 </h3>
                <p>Zespół Szkół Elektrycznych im. prof. Janusza Groszkowskiego w Białymstoku, technikum</p>
              </div>
              <div className="-order-1 xl:order-2">
                <p>09.2017 - 05.2021</p>
              </div>
            </div>

            <div className="educationItem grid grid-cols-1 xl:flex xl:flex-row gap-2 justify-between">
              <div className="order-last xl:order-1">
                <h3 className="text-lg font-semibold">Szkoła Admina</h3>
                <p>Organizator: GRUPA ADM Sp. z o.o. ARKADIUSZ SICZEK</p>
              </div>
              <div className="-order-1 xl:order-2">
                <p>07.2025 - w trakcie</p>
              </div>
            </div>

            <div className="educationItem grid grid-cols-1 xl:flex xl:flex-row gap-2 justify-between">
              <div className="order-last xl:order-1">
                <h3 className="text-lg font-semibold">Homelab - Wejdź do IT</h3>
                <p>Organizator: GRUPA ADM Sp. z o.o. ARKADIUSZ SICZEK</p>
              </div>
              <div className="-order-1 xl:order-2">
                <p>07.2025 - w trakcie</p>
              </div>
            </div>

            <div className="educationItem grid grid-cols-1 xl:flex xl:flex-row gap-2 justify-between">
              <div className="order-last xl:order-1">
                <h3 className="text-lg font-semibold">CCNA po polsku - kurs sieci komputerowych (egzamin 200-301)</h3>
                <p>Udemy: Marious Kuriata</p>
              </div>
              <div className="-order-1 xl:order-2">
                <p>07.2025 - w trakcie</p>
              </div>
            </div>

            <div className="educationItem grid grid-cols-1 xl:flex xl:flex-row gap-2 justify-between">
              <div className="order-last xl:order-1">
                <h3 className="text-lg font-semibold">Red Hat System Administration I | RH124</h3>
                <p>Organizator: Politechnika Białostocka</p>
              </div>
              <div className="-order-1 xl:order-2">
                <p>02.2024</p>
              </div>
            </div>

            <div className="educationItem grid grid-cols-1 xl:flex xl:flex-row gap-2 justify-between text-slate-500">
              <div className="order-last xl:order-1">
                <p>Oczekiwanie na wynik rekrutacji - decyzja 31.08.2025</p>
                <h3 className="text-lg font-semibold">Studia Podyplomowe: Inżynieria cyberbezpieczeństwa</h3>
                <p>Politechnika Warszawska Wydział Elektroniki i Technik Informacyjnych</p>
              </div>
              <div className="-order-1 xl:order-2">
                <p>10.2025</p>
              </div>
            </div>

          </div>
        </div>
        
        <div className="tech flex flex-col gap-0">
          <h2 id="technologies" className="scroll-mt-20 text-xl font-semibold">Technologie jakie wykorzystywałem w projektach</h2>
          <Separator className="bg-[var(--foreground-dark)] my-4 2xl:mt-2" />
          <div className="techStack grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-x-9 ">

            <div className="techGroup flex flex-col gap-3">
              <div className="flex flex-row gap-3 text-slate-400">
                <CodeXml className="w-5"/> Języki programowania i frameworki
              </div>

              <div className="techs flex flex-row flex-wrap gap-2">
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/projekty?tech=javaScript`}>Java Script</Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/projekty?tech=typescript`}>Typescript</Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/projekty?tech=python`}>Python</Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/projekty?tech=bash`}>Bash</Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/projekty?tech=html`}>HTML</Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/projekty?tech=css`}>CSS</Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/projekty?tech=tailwindCss`}>Tailwind CSS</Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/projekty?tech=react`}>React</Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/projekty?tech=nextJs`}>Next.js</Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/projekty?tech=nuxtJs`}>Nuxt.js</Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/projekty?tech=vueJs`}>Vue.js</Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/projekty?tech=ionicFramework`}>Ionic Framework</Link>
                </Button>
                

              </div>
            </div>

            <div className="techGroup flex flex-col gap-3">
              <div className="flex flex-row gap-3 text-slate-400">
                <EthernetPort className="w-5"/> Urządzenia  i usługi sieciowe
              </div>

                <div className="techs flex flex-row flex-wrap gap-2 ">
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/projekty?tech=cisco`}>Cisco</Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/projekty?tech=tpLink`}>TP-Link</Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/projekty?tech=mikrotik`}>Mikrotik</Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/projekty?tech=qnapNas`}>QNAP NAS</Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/projekty?tech=nextCloud`}>NextCloud</Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/projekty?tech=nginx`}>Nginx</Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/projekty?tech=dns`}>DNS</Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/projekty?tech=ddns`}>DDNS</Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/projekty?tech=dhcp`}>DHCP</Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/projekty?tech=vpn`}>VPN</Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/projekty?tech=ssh`}>SSH</Link>
                </Button>
                </div>
              </div>

              <div className="techGroup flex flex-col gap-3">
                <div className="flex flex-row gap-3 text-slate-400">
                <Database className="w-5"/> Bazy danych
                </div>

                <div className="techs flex flex-row flex-wrap gap-2">
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/projekty?tech=postgreSql`}>PostgreSql</Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/projekty?tech=sqlite`}>SQLite</Link>
                </Button>
                </div>
              </div>

              <div className="techGroup flex flex-col gap-3">
                <div className="flex flex-row gap-3 text-slate-400">
                <Cloud className="w-5"/> Rozwiązania chmurowe
                </div>

                <div className="techs flex flex-row flex-wrap gap-2 ">
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/projekty?tech=cloudflareR2Bucket`}>Cloudflare R2 Bucket</Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/projekty?tech=mikrusVps`}>Mikr.us VPS</Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/projekty?tech=vercel`}>Vercel</Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/projekty?tech=ovh`}>OVH</Link>
                </Button>
                </div>
              </div>

              <div className="techGroup flex flex-col gap-3">
                <div className="flex flex-row gap-3 text-slate-400">
                <TableOfContents className="w-5"/> CMS / Headless CMS / Ecommerce / HIS
                </div>

                <div className="techs flex flex-row flex-wrap gap-2 ">
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/projekty?tech=strapi`}>Strapi</Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/projekty?tech=wordpress`}>Wordpress</Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/projekty?tech=shoper`}>Shoper</Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/projekty?tech=optimedNxt`}>Optimed NXT</Link>
                </Button>
                </div>
              </div>

              <div className="techGroup flex flex-col gap-3">
                <div className="flex flex-row gap-3 text-slate-400">
                <MonitorCog className="w-5"/> Systemy operacyjne i wirtualizacja
                </div>

                <div className="techs flex flex-row flex-wrap gap-2 ">
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/projekty?tech=windows`}>Windows</Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/projekty?tech=ubuntu`}>Ubuntu</Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/projekty?tech=ubuntuServer`}>Ubuntu Server</Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/projekty?tech=proxmox`}>Proxmox</Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/projekty?tech=docker`}>Docker</Link>
                </Button>
                </div>
              </div>

              <div className="techGroup flex flex-col gap-3">
                <div className="flex flex-row gap-3 text-slate-400">
                  <MonitorSmartphone className="w-5"/> Oprogramowanie akcesoryjne
                </div>

                <div className="techs flex flex-row flex-wrap gap-2 ">
                  <Button variant="outline" size="sm" asChild>
                  <Link href={`/projekty?tech=postman`}>Postman</Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                  <Link href={`/projekty?tech=git`}>Git</Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                  <Link href={`/projekty?tech=github`}>GitHub</Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                  <Link href={`/projekty?tech=openVpn`}>OpenVPN</Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/projekty?tech=ultraViewer`}>UltraViewer</Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/projekty?tech=rustDesk`}>RustDesk</Link>
                  </Button>
                </div>
            </div>

            

          </div>
        </div>

        <div className="job">
          <h2 id="experience" className="scroll-mt-20 text-xl font-semibold">Doświadczenie zawodowe</h2>
          <Separator className="bg-[var(--foreground-dark)] my-4 2xl:mt-2" />
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
