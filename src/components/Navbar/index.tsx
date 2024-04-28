"use client";


// ** import core package
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

// ** import third party package
import { Menu, X } from "react-feather";



const sectionIds: { [key: string]: string } = {
  home: "home",
  about: "about",
  projects: "projects",
  activity: "activity",
  services: "services",
  faq: "faq",
  contact: "contact",
};


const navLinks = [
  { section: "home", text: "Home" },
  { section: "about", text: "About" },
  { section: "projects", text: "Projects" },
  { section: "activity", text: "Activity" },
  { section: "services", text: "Services" },
  { section: "faq", text: "FAQ" },
  { section: "contact", text: "Contact" },
];


const Navbar = () => {
  const location = usePathname();


  function getInitialActiveSection() {
    return location === "/blog" ? "blogs" : "home";
  }


  const [expanded, setExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState(getInitialActiveSection());


  const handleScroll = () => {
    const targetHeight = window.innerHeight / 2;
    for (const [section, id] of Object.entries(sectionIds)) {
      const sectionElement = document?.getElementById(id);
      const rect = sectionElement?.getBoundingClientRect();
      if (
        rect?.top &&
        rect?.top <= targetHeight &&
        rect?.bottom &&
        rect?.bottom >= targetHeight
      ) {
        setActiveSection(section);
        break;
      }
    }
  };


  useEffect(() => {
    const handleLocationChange = () => {
      setActiveSection(location === "/blog" ? "blogs" : "home");
    };


    window.addEventListener("scroll", handleScroll);
    window.addEventListener("popstate", handleLocationChange);


    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, [location]);


  useEffect(() => {
    document.body.style.overflow = expanded ? "hidden" : "unset";
  }, [expanded]);


  const getNavLinkClass = (sectionName: string) =>
    activeSection === sectionName ? "text-red-500" : "text-black";


  return (
    <header className="px-4 lg:px-24 py-4 lg:py-4 bg-white shadow-md !z-[9999] sticky top-0">
      <div className="mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0 z-20">
            <Link href="/" className="text-primary flex gap-3 items-center">
              Logo
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              className="text-black"
              type="button"
              onClick={() => setExpanded((prevExpanded) => !prevExpanded)}
              aria-expanded={expanded}
            >
              <span
                style={{ display: expanded ? "none" : "block" }}
                aria-hidden="true"
              >
                <Menu className="text-accent" />
              </span>


              <span
                style={{ display: expanded ? "block" : "none" }}
                aria-hidden="true"
              >
                <X className="text-accent" />
              </span>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-8 xl:gap-10 lg:items-center lg:justify-center">
            {navLinks.map((link) => (
              <a
                href={
                  location === "/"
                    ? `#${sectionIds[link.section]}`
                    : `/#${sectionIds[link.section]}`
                }
                key={link.section}
              >
                <div className={`${getNavLinkClass(link.section)} nav-links`}>
                  {link.text}
                </div>
              </a>
            ))}
          </div>
        </div>


        {/*  Mobile nav */}
        <nav
          className={`absolute ${
            expanded ? "flex lg:hidden " : "hidden"
          }  left-0 w-full  max-lg:h-[calc(100dvh-45px)] !z-[9999999] !bg-white overflow-x-hidden   flex-col `}
        >
          <div className="px-5 py-6 flex-grow">
            {navLinks.map((link) => (
              <Link
                onClick={() => setExpanded(false)}
                className="block text-[20px] font-semibold mt-4 md:mt-10"
                href={`#${sectionIds[link.section]}`}
                key={link.section}
              >
                <h1 className="text-primaryBlack">{link.text}</h1>
              </Link>
            ))}
          </div>


          <div className="shadow-t  grid grid-cols-2  gap-4 p-6">
            <Link
              href="#"
              title=""
              className="font-medium text-accent text-[20px]  px-5
              py-3  w-full   hover:text-opacity-50 "
            >
              Profile
            </Link>


            <Link
              href="#"
              title=""
              className="
                        inline-flex
                        items-center
                        justify-center
                        px-5
                        py-3
                        text-[20px]
                        font-semibold
                        text-white
                        bg-gradient
                        rounded-xl
                        w-full
                    "
              role="button"
            >
              Sign up
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};


export default Navbar;


