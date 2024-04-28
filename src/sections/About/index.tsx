import React from "react";


const About = () => {
    return (
        <div className="py-10 bg-white sm:py-16 lg:py-24" id="about">

            <div className="text-center">
                <h1 className="text-4xl text-gray-900 font-bold pb-10">About Me</h1>
                <p className="font-light text-left text-gray-800 sm:text-xl md:px-10 lg:px-64">
                    Hello! I am <span className="font-bold text-3xl">Masum Billah</span>. Experienced with all stages of the
                    development cycle for dynamic web projects. Having an in-depth
                    knowledge including advanced HTML, CSS, TailwindCSS, DaisyUi,
                    Bootstrap, React Bootstrap, JavaScript, Dom Manipulation, ReactJS,
                    ES6, REST API, JSON, Responsive Design, GitHub,
                    Express JS, Node JS, MongoDB.
                </p>
            </div>
            <div className="grid grid-cols-12 gap-7 mt-16 items-center">
                <div className="col-span-12 md:col-span-4 px-2">
                    {/* <img className="w-full" src={aboutImage} alt="thumb" /> */}
                </div>
                <div className="col-span-12 md:col-span-8">
                    <div className="hidden md:block">
                        <h1 className="text-3xl font-extrabold">Masum Billah</h1>
                        <h4 className="text-xl font-bold">Web Developer</h4>
                    </div>
                    <div className="my-5 text-justify md:text-start">
                        <p className="font-light text-gray-800 sm:text-xl mt-3 md:pr-3">
                            I am working with MERN Stack Development. Build some web apps
                            like Learning app, News app, Payment Method Intigrations
                            (Stripe), Expertise with RestAPI, Firebase Authentications,
                            React-Redux, GraphQl etc. Some projects shown the bellow thats
                            my own builded. If you have more interest and any type of
                            queries of me then you can contact with me.
                        </p>
                    </div>
                    <div className="text-center md:text-start">
                        <a
                            className="group relative inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring"
                            // href={resume}
                            download="Resume-Masum_Billah"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span className="absolute inset-y-0 left-0 w-[2px] bg-indigo-600 transition-all group-hover:w-full group-active:bg-indigo-500"></span>

                            <span className="relative text-sm font-bold text-indigo-600 transition-colors group-hover:text-white">
                                Download Resume
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;