import Image from "next/image";
import Link from "next/link";
import ProfileImage from "../../public/images/Masum-Billah.jpg";
import IconLink from "../shared/social-icon";

const Hero = () => {
  return (
    <section id="home">
      <div className="flex flex-col-reverse md:flex-row overflow-hidden min-h-screen w-full">
        <div className="flex flex-col items-center md:text-start text-center md:items-start justify-evenly w-full">
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-5xl text-primary dark:text-primary-foreground">
              Masum Billah
            </h1>
            <h4 className="font-semibold text-3xl text-secondary">
              Web Developer
            </h4>
            <p className="font-light text-xl mt-2">
              Diploma In Computer Science & Technology
            </p>
          </div>

          {/* Experience */}
          <div className="">
            <h3 className="text-xl font-semibold text-accent dark:text-accent-foreground">
              Ex- MERN Developer
            </h3>
            <p className="font-light">10 Jan 2023 - 10 Apr 2024</p>
            <Link
              href="https://www.peacockindia.in"
              target="_blank"
              className="text-2xl font-bold mt-1 text-[#EF4D93] underline"
            >
              Peacock India, India
            </Link>
          </div>

          {/* Resume & Contact Button */}
          <div className="mt-5 flex gap-3">
            <div className="text-center md:text-start text-white hover:text-black">
              <a
                className="group relative inline-block overflow-hidden border bg-primary  border-primary px-8 py-3 focus:outline-none focus:ring"
                href="#Contact"
              >
                <span className="absolute inset-y-0 right-0 w-[0px] bg-white dark:bg-secondary-foreground transition-all group-hover:w-full group-active:bg-white"></span>

                <span className="relative text-sm font-bold   transition-colors ">
                  Download Resume
                </span>
              </a>
            </div>
            <div className="text-center md:text-start">
              <a
                className="group relative inline-block overflow-hidden border border-primary px-8 py-3 focus:outline-none focus:ring"
                href={"#contact"}
                rel="noreferrer"
              >
                <span className="absolute inset-y-0 left-0 w-[2px] bg-primary transition-all group-hover:w-full group-active:bg-primary"></span>

                <span className="relative text-sm font-bold transition-colors group-hover:text-primary-foreground">
                  Contact Me
                </span>
              </a>
            </div>
          </div>

          {/* Icon Links */}
          <div className="">
            <IconLink />
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="w-full rounded-lg">
            <Image
              src={ProfileImage}
              alt="Profile Image"
              className="h-full w-full rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
