"use client";

import { ModeToggle } from "@/components/theme-toggle";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const sectionIds: { [key: string]: string } = {
  home: "home",
  about: "about",
  skill: "skill",
  projects: "projects",
  faq: "faq",
  contact: "contact",
};

const navLinks = [
  { section: "home", text: "Home" },
  { section: "about", text: "About" },
  { section: "skill", text: "Skill" },
  { section: "projects", text: "Projects" },
  { section: "faq", text: "FAQ" },
  { section: "contact", text: "Contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  function getInitialActiveSection() {
    return pathname === "/blog" ? "blogs" : "home";
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
      setActiveSection(pathname === "/blog" ? "blogs" : "home");
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("popstate", handleLocationChange);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = expanded ? "hidden" : "unset";
  }, [expanded]);

  const getNavLinkClass = (sectionName: string) =>
    activeSection === sectionName ? "text-indigo-500" : "";

  return (
    <header className="px-4 lg:px-24 py-4 lg:py-4 bg-white dark:bg-black shadow-md !z-[9999] sticky top-0">
      <div className="mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0 z-20">
            <Link
              href="/"
              className="text-primary font-bold hidden md:flex gap-3 items-center"
            >
              Masum Billah
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              className=""
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
                  pathname === "/"
                    ? `#${sectionIds[link.section]}`
                    : `/#${sectionIds[link.section]}`
                }
                key={link.section}
              >
                <div
                  className={`${getNavLinkClass(
                    link.section
                  )} nav-links font-semibold`}
                >
                  {link.text}
                </div>
              </a>
            ))}
            <ModeToggle />
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
                <h4 className="font-semibold">{link.text}</h4>
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
