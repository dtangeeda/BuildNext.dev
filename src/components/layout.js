import React from "react";
import PropTypes from "prop-types";
import NavBar from "../components/navigation";
import { StaticQuery, graphql } from "gatsby";
import DevheroImg from "../images/software-dev.svg";

function Layout({ children }) {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title,
              github,
              blog
            }
          }
        }
      `}
      render={data => (
        <body>

            {children}

            <NavBar/>
            {/* Hero */}
            <>
            {/* This example requires Tailwind CSS v2.0+ */}
            <div className="relative bg-white overflow-hidden">
              <div className="max-w-7xl mx-auto flex flex-wrap sm:mx-auto lg:flex-nowrap">
                <div className="relative sm:mx-auto z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                  <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                  </div>
                  {/*
              Mobile menu, show/hide based on menu open state.

              Entering: "duration-150 ease-out"
                From: "opacity-0 scale-95"
                To: "opacity-100 scale-100"
              Leaving: "duration-100 ease-in"
                From: "opacity-100 scale-100"
                To: "opacity-0 scale-95"
            */}

      <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Here to enrich your </span>
            <span className="block text-indigo-600 xl:inline">software projects</span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            BuildNext is a Software Development Studio that delivers results at speed.
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                Get started
              </a>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                Design steps
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
    <div className="flex lg:inset-y-0 lg:right-0 sm:mx-auto mx-auto w-3/4 sm:w-2/3 md:w-2/3 md:h-2/3 lg:right-0 lg:w-2/3">
    <img className="w-full object-cover lg:w-full lg:h-full" src={DevheroImg} alt />
  </div>
  </div>

</div>
</>

        </body>
      )}
    />
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
