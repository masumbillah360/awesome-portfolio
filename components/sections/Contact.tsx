import TitleCard from "../cards/TitleCard";

const Contact = () => {
  return (
    <section className="py-10  sm:py-16 lg:py-24" id="contact">
      <TitleCard
        title="Contact Me"
        subTitle="Feel free to contact with me using any medium. I have shared my all
          social ID links also. If you need anytime you can contact with me.
          Thank you."
        textCenter
      />
      <div className="max-w-5xl mx-auto mt-12 sm:mt-16">
        <div className="grid grid-cols-1 gap-6 px-8 text-center md:px-0 md:grid-cols-3">
          <div className="overflow-hidden bg-primary dark:bg-accent rounded-md">
            <div className="p-6">
              <svg
                className="flex-shrink-0 w-10 h-10 mx-auto text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <div className="text-lg font-medium text-white">
                <p className="mt-6">+880 1783980102</p>
                <p className="mt-1">+880 1949211772</p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden bg-primary dark:bg-accent rounded-md">
            <div className="p-6">
              <svg
                className="flex-shrink-0 w-10 h-10 mx-auto text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <div className="text-lg font-medium text-white">
                <p className="mt-6">masumbillah6584@gmail.com</p>
                <p className="mt-1">dev.billah@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden bg-primary dark:bg-accent rounded-md">
            <div className="p-6">
              <svg
                className="flex-shrink-0 w-10 h-10 mx-auto text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <div className="text-lg font-medium text-white leading-relaxed">
                <p className="mt-6">Mymensingh, Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 overflow-hidden bg-gray-100 dark:bg-accent rounded-xl">
          <div className="px-6 py-12 sm:p-12">
            <h3 className="text-3xl font-semibold text-center">
              Send me a message
            </h3>

            <form action="#" method="POST" className="mt-14">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                <div>
                  <label htmlFor="" className="text-base font-medium">
                    {" "}
                    Your name{" "}
                  </label>
                  <div className="mt-2.5 relative">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Enter your full name"
                      className="block w-full px-4 py-4 placeholder-gray-500 transition-all duration-200 dark:bg-gray-800  border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="" className="text-base font-medium">
                    {" "}
                    Email address{" "}
                  </label>
                  <div className="mt-2.5 relative">
                    <input
                      type="email"
                      name=""
                      id=""
                      placeholder="Enter your full name"
                      className="block w-full px-4 py-4 placeholder-gray-500 transition-all duration-200 dark:bg-gray-800 border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="" className="text-base font-medium">
                    {" "}
                    Phone number{" "}
                  </label>
                  <div className="mt-2.5 relative">
                    <input
                      type="tel"
                      name=""
                      id=""
                      placeholder="Enter your full name"
                      className="block w-full px-4 py-4  placeholder-gray-500 transition-all duration-200 dark:bg-gray-800 border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="" className="text-base font-medium">
                    {" "}
                    Company name{" "}
                  </label>
                  <div className="mt-2.5 relative">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Enter your full name"
                      className="block w-full px-4 py-4 placeholder-gray-500 transition-all duration-200 dark:bg-gray-800 border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="" className="text-base font-medium">
                    {" "}
                    Message{" "}
                  </label>
                  <div className="mt-2.5 relative">
                    <textarea
                      name=""
                      id=""
                      placeholder=""
                      className="block w-full px-4 py-4 placeholder-gray-500 transition-all duration-200 dark:bg-gray-800 border border-gray-200 rounded-md resize-y focus:outline-none focus:border-blue-600 caret-blue-600"
                      rows={4}
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold transition-all duration-200 text-white bg-primary border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
