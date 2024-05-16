import {
  RiFacebookBoxFill,
  RiMailFill,
  RiPhoneFill,
  RiTwitterFill,
} from "react-icons/ri";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-red-800 dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6">
        <div className="items-center md:flex  md:justify-between">
          <div className={"h-full"}>
            <Image
              width={300}
              height={200}
              src="/clglogo.png"
              className="mr-3 object-cover"
              alt="Logo"
            />
          </div>
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <div className={"h-8"}>
                <Image
                  width={35}
                  height={35}
                  src="/icac3nlogo.png"
                  className="mr-3 object-cover"
                  alt="Logo"
                />
              </div>
              <span className="self-center whitespace-nowrap text-2xl font-semibold text-white">
                ICIMMI
              </span>
            </Link>
            <p className={"my-4 max-w-xs text-white"}>
              International Conference On Information Management & Machine
              Intelligence (ICIMMI)
            </p>
          </div>
        </div>
        <hr className="my-3 border-red-400 dark:border-gray-700 sm:mx-auto" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="max-w-sm text-sm text-gray-100">
            <Link href="" className="mt-2 py-3 hover:underline">
              Computer Science and Engineering, Poornima Institute of
              Engineering and technology, Jaipur Rajasthan
            </Link>
            .
            <p className="block py-1 text-xs text-white/60">
              Designed by{" "}
              <a
                href={"https://github.com/DiyaMehta60"}
                className={"cursor-pointer hover:underline"}
              >
                Diya Mehta
              </a>
              ,{" "}
              <a
                className={"cursor-pointer hover:underline"}
                href={"https://github.com/codeseker"}
              >
                Ayush Jangid
              </a>{" "}
            </p>
          </span>
          <div
            className={
              "mt-4 flex space-x-6 text-2xl text-white sm:mt-0 sm:justify-center"
            }
          >
            <Link href={"https://twitter.com/icac3n"}>
              <RiTwitterFill
                className={"grow-on-hover cursor-pointer hover:text-sky-400"}
                aria-label={"icac3n twitter"}
              />
            </Link>
            <Link href={"tel:+91-7835878146"}>
              <RiPhoneFill
                className={
                  "grow-on-hover  cursor-pointer hover:text-emerald-500"
                }
                aria-label={"icac3n phone"}
              />
            </Link>
            <Link href={"https://www.facebook.com/IEEE.ICAC3N.21"}>
              <RiFacebookBoxFill
                className={
                  "grow-on-hover  cursor-pointer hover:text-indigo-500"
                }
                aria-label={"icac3n facebook"}
              />
            </Link>
            <Link href={"mailto:vishnu.sharma@galgotiacollege.edu"}>
              <RiMailFill
                className={"grow-on-hover  cursor-pointer hover:text-amber-400"}
                aria-label={"icac3n mail"}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
