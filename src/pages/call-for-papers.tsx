import { StarterLayout } from "layout";
import Head from "next/head";
import React from "react";
import Button from "@/components/button";
import Sponsored from "@/components/sponsored";

const callForPapers = () => {
  return (
    <>
      <Head>
        <title>Call for Papers</title>
      </Head>
      <div className={"prose mx-4 my-8"}>
        <h1 className={"heading"}>Call for Papers</h1>
        <p>
          Prospective authors from academia as well as industry are invited to
          submit their full papers in main conference ICIMMI-2023 which have not
          been yet submitted /published and that illustrate research, surveying
          works, and industrial application in all disciplines of Engineering
          for Intelligence based applications & automation activities,
          especially with the emergence of Data Analytics, AI, Machine Learning
          & Deep Learning or in following broad areas, but not limited to:
        </p>

        <ul>
          <li>Information Management</li>
          <li>Information Security</li>
          <li>Information Processing Techniques</li>
          <li>Information Interpretation</li>
          <li>Big Data Analytics</li>
          <li>Data Analytics</li>
          <li>Automations and Robotics in Construction</li>
          <li>Artificial Intelligence and Soft Computing</li>
          <li>Intelligent Software Methodologies, Tools and Techniques</li>
          <li>Artificial Intelligence and Pattern Recognition</li>
          <li>Multimedia Analytics using Machine Learning</li>
          <li>Soft Computing Techniques in Power Systems</li>
          <li>Intelligent Power Distribution System</li>
          <li>Computer and Intelligent Communication</li>
          <li>Adaptive Wireless Communication</li>
          <li>Wireless Sensor Networks</li>
          <li>Network Security</li>
          <li>Cloud Based Applications for Machine Learning</li>
          <li>Healthcare Automation using ML & DL</li>
          <li>Intelligent Devices</li>
          <li>IoT Based Automation</li>
          <li>Industrial Automation over IoT</li>
          <li>Industrial Automation over Robotics</li>
          <li>Smart Systems</li>
          <li>Smart Society</li>
          <li>Information Security using Machine Learning</li>
          <li>Network Security using Machine Learning</li>
        </ul>
      </div>
      <Sponsored />
    </>
  );
};

export default callForPapers;
