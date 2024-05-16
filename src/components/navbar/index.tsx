import React, { useEffect, useRef, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { useRouter } from "next/router";
import Link from "next/link";
import * as path from "path";
import Image from "next/image";

const Dropdown = ({
  title,
  dropdown,
}: {
  title: string;
  dropdown: { title: string; link: string }[];
}) => {
  const [dropOpen, setDropOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dropToggle = () => setDropOpen(!dropOpen);

  const { asPath } = useRouter();

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      // @ts-ignore
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <li
      ref={dropdownRef}
      onClick={dropToggle}
      className={"relative w-full cursor-pointer list-none"}
    >
      <span
        className={`${
          title.includes("20")
            ? "grow-on-hover mt-1 rounded bg-red-900 px-3 py-2 text-xs"
            : ""
        } inline-flex items-center text-white`}
      >
        {title.toUpperCase()}
        <AiFillCaretDown className={`ml-1 ${dropOpen ? "rotate-180" : ""}`} />
      </span>
      {dropOpen && (
        <div
          id="dropNav"
          className={`-left-1/2 z-10 mt-3 w-fit w-full divide-y divide-amber-800 rounded bg-amber-100 font-normal shadow-lg md:absolute ${
            title.toLowerCase().includes("archive") ? "md:w-36" : "md:w-52"
          }`}
        >
          <ul className="w-full py-2 text-sm font-semibold text-gray-700">
            {dropdown.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    href={item.link}
                    className="block px-4 py-2 hover:bg-amber-200"
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </li>
  );
};

function Index() {
  const links = [
    {
      title: "Home",
      link: "/",
      enabled: true,
    },
    {
      title: "Call for papers",
      link: "/call-for-papers",
      enabled: true,
    },
    {
      title: "Paper Submission",
      link: "/papersubmission",
      enabled: true,
    },
    {
      title: "Registration",
      link: "/registration",
      enabled: true,
    },
    {
      title: "Committess",
      link: "/committess",
      enabled: true,
    },
    {
      title: "Publications",
      link: "/publications",
      enabled: true,
    },
    {
      title: "Conference Partners",
      link: "/partners",
      enabled: true,
    },
    {
      title: "Special Sessions",
      link: "/specialsession",
      enabled: true,
    },
    {
      title: "Speakers",
      link: "/speakers",
      enabled: true,
    },
    {
      title: "Archive",
      dropdown: [
        {
          title: "ICAC3N - 2023",
          link: "/archive/2023",
        },
        {
          title: "ICAC3N - 2022",
          link: "/archive/2022",
        },
        {
          title: "ICAC3N - 2021",
          link: "/archive/2021",
        },
        {
          title: "ICAC3N - 2020",
          link: "/archive/2020",
        },
        {
          title: "ICAC3N - 2018",
          link: "/archive/2018",
        },
      ],
      enabled: true,
    },
  ];

  const [menuOpen, setMenu] = useState(false);
  const menuToggle = () => {
    setMenu(!menuOpen);
  };

  const router = useRouter();
  const marqueeVariants = {
    animate: {
      x: [0, -1035],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 5,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div data-theme="cmyk">
      <nav className="">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between gap-y-6 p-4">
          <div className={"flex w-full flex-row items-center justify-between"}>
            <Link href="/" className="flex items-center">
              <div className={"h-12"}>
                <Image
                  width={35}
                  height={35}
                  src="/idea_lab.png"
                  className="mr-3 object-cover"
                  alt="Logo"
                />
              </div>
              <span className="mr-3 text-2xl font-semibold tracking-tight text-white">
                ICIMMI
              </span>
            </Link>

            <div className={"flex flex-row items-center justify-normal gap-1"}>
              <span
                onClick={menuToggle}
                className="focus:ring-none order-last inline-flex cursor-pointer items-center rounded-lg p-2 text-sm  text-red-800 focus:outline-none hover:bg-red-700 md:hidden"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="h-8 w-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </div>
          </div>

          {
            <div
              className={`${
                menuOpen ? "w-full md:block lg:w-auto" : "hidden md:block"
              }`}
            >
              <ul className="flex flex-col items-start justify-between gap-3 rounded-lg font-medium md:mt-0 md:flex-row md:items-center md:border-0 md:p-0 md:text-sm lg:gap-5">
                {links.map((link, index) => (
                  <div key={index} className={"w-full md:w-auto"}>
                    {link.enabled && link.link && (
                      <>
                        <li key={index} className={`cursor-pointer text-white`}>
                          <Link href={link.link}>
                            {link.title.toUpperCase()}
                          </Link>
                        </li>
                      </>
                    )}
                    {link.enabled && link.dropdown && (
                      <Dropdown title={link.title} dropdown={link.dropdown} />
                    )}
                  </div>
                ))}
              </ul>
              <div className={"mb-6 mt-8 block md:hidden"}></div>
            </div>
          }
        </div>
      </nav>
    </div>
  );
}

export default Index;
