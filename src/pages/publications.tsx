import Sponsored from "@/components/sponsored";
import React from "react";

function Publications() {
  return (
    <div>
      <section className="bg-white antialiased dark:bg-gray-900 ">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
              Schedule
            </h2>
            <div className="mt-4">
              <a
                href="#"
                title=""
                className="inline-flex items-center text-lg font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Learn more about our agenda
                <svg
                  aria-hidden="true"
                  className="ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="mx-auto mt-8 flow-root max-w-3xl sm:mt-12 lg:mt-16">
            <div className="-my-4 divide-y divide-gray-200 dark:divide-gray-700">
              <div className="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:gap-6">
                <p className="w-32 shrink-0 text-lg font-normal text-gray-500 dark:text-gray-400 sm:text-right">
                  Sept 15, 2024
                </p>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  <a href="#" className="hover:underline">
                    Full Paper Submission Date
                  </a>
                </h3>
              </div>
              <div className="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:gap-6">
                <p className="w-32 shrink-0 text-lg font-normal text-gray-500 dark:text-gray-400 sm:text-right">
                  Nov 10, 2024
                </p>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  <a href="#" className="hover:underline">
                    Extended Date
                  </a>
                </h3>
              </div>
              <div className="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:gap-6">
                <p className="w-32 shrink-0 text-lg font-normal text-gray-500 dark:text-gray-400 sm:text-right">
                  Nov 15, 2024
                </p>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  <a href="#" className="hover:underline">
                    Notification of Acceptance
                  </a>
                </h3>
              </div>
              <div className="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:gap-6">
                <p className="w-32 shrink-0 text-lg font-normal text-gray-500 dark:text-gray-400 sm:text-right">
                  Nov 20, 2024
                </p>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  <a href="#" className="hover:underline">
                    Revised Paper Submission
                  </a>
                </h3>
              </div>
              <div className="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:gap-6">
                <p className="w-32 shrink-0 text-lg font-normal text-gray-500 dark:text-gray-400 sm:text-right">
                  Nov 20, 2024
                </p>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  <a href="#" className="hover:underline">
                    Early Bird Registration
                  </a>
                </h3>
              </div>
              <div className="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:gap-6">
                <p className="w-32 shrink-0 text-lg font-normal text-gray-500 dark:text-gray-400 sm:text-right">
                  Nov 30, 2024
                </p>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  <a href="#" className="hover:underline">
                    Late Registration
                  </a>
                </h3>
              </div>
              <div className="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:gap-6">
                <p className="w-32 shrink-0 text-lg font-normal text-gray-500 dark:text-gray-400 sm:text-right">
                  Dec 14-16, 2024 (New)
                </p>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  <a href="#" className="hover:underline">
                    Conference Dates
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="my-4 border-b border-gray-300"></div>
      <p>
        Selected, Registered and post conference papers will be published in the
        proceedings of ICIMMI 2023 in Scopus Indexed ACM International
        Conference Procedings .
      </p>
      <p>
        Selected, Extended Versions of the Conference papers may be considered
        for the following Journal. Extended papers must have at least 70% of new
        contents in the extended manuscripts for consideration for following
        Journal.
      </p>
      <ul className="prose mx-4 my-12 list-disc">
        <li>Journal of Discrete Mathematical Sciences and Cryptography</li>
        <li>
          Communications in Computer and Information Science (ISSN 1865-0929)
        </li>
        <li>Journal of Interdisciplinary Mathematics</li>
      </ul>
      <Sponsored />
    </div>
  );
}

export default Publications;
