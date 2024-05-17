import Sponsored from "@/components/sponsored";
import Link from "next/link";
import React from "react";

export default function PaperSubmission() {
  return (
    <div className="mx-4">
      <div className={"prose my-8"}>
        <h1 className={"heading"}>Paper Submission</h1>
        <p className="text-2xl">
          Click{" "}
          <span>
            {" "}
            <Link
              target="_blank"
              href={
                "https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FICIMMI2023%2FSubmission%2FIndex"
              }
            >
              here
            </Link>
          </span>{" "}
          to submit the paper
        </p>
        <h3>Yet to be Announced</h3>
      </div>
      <hr className="my-8 h-px border-0 bg-gray-200 dark:bg-gray-700" />
      <div className={"prose my-8"}>
        <h2
          className={
            "my-3 text-center text-lg font-bold lg:text-start lg:text-2xl"
          }
        >
          Submission Guidelines:
        </h2>
      </div>
      <p className="w-full py-4">
        {" "}
        To submit a paper for ICIMMI-2023, authors must follow the ACM
        conference proceedings format. The submission template for the
        conference is available at{" "}
        <span className="break-all py-4 text-center text-sm font-bold text-blue-500 underline lg:break-normal lg:text-start">
          <Link
            href="https://authors.acm.org/binaries/content/assets/publications/taps/acm_submission_template.docx"
            className="break-all"
          >
            https://authors.acm.org/binaries/content/assets/publications/taps/acm_submission_template.docx
          </Link>
        </span>{" "}
        for Word users and{" "}
        <span className="text-blue-500 underline">
          <Link
            href={
              "https://portalparts.acm.org/hippo/latex_templates/acmart-primary.zip"
            }
          ></Link>
          https://portalparts.acm.org/hippo/latex_templates/acmart-primary.zip
        </span>{" "}
        for LaTeX users. The maximum length of the paper is six (6) pages.
        Authors must ensure that their research paper is original and has not
        been previously submitted to any other journal or conference. The
        similarity score of the manuscript should not exceed 10%. Manuscripts
        with a similarity score of more than 10% will not be processed.
      </p>
      <br />
      <p className="font-bold">Review Process & Oral Presentation:</p>
      <ul className="prose mx-4 my-4 list-disc">
        <li>
          All papers with a similarity score of less than 10% will undergo a
          double-blind review. The technical committee of the conference will
          review the papers, and the authors will be notified of the paper's
          status, which can be one of the following:
          <ul>
            <li>Accepted for oral presentation</li>
            <li>Accepted with minor corrections for Oral Presentation</li>
            <li>Rejected</li>
          </ul>
        </li>
      </ul>
      <hr className="my-8 h-px border-0 bg-gray-200 dark:bg-gray-700" />
      <h2
        className={
          "my-3 text-center text-lg font-bold lg:text-start lg:text-2xl"
        }
      >
        Downloads:
      </h2>
      <div className="flex flex-col gap-y-3">
        <Link
          href="/acm_submission_template.docx"
          download="/acm_submission_template.docx"
          className="inline-flex w-[20%] items-center rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600"
        >
          <svg
            className="mr-2 h-4 w-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
          </svg>
          <span>Paper Template Doc</span>
        </Link>
        <Link
          href={"/acmart-primary.zip"}
          download={"/acmart-primary.zip"}
          className="inline-flex w-[20%] items-center rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600"
        >
          <svg
            className="mr-2 h-4 w-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
          </svg>
          <span>Paper Template Latex</span>
        </Link>
      </div>
      <Sponsored />
    </div>
    );
}