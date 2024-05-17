import Sponsored from "@/components/sponsored";
import React from "react";

function Committe() {
  const honaryPateron = [
    {
      name: "Mr. Hari Singh Shekhawat",
      designation: "Director (Infrastructure), Poornima Group, Jaipur",
    },
    {
      name: "Mr. MKM Shah",
      designation: "Director (Admin & Finance), Poornima Group, Jaipur",
    },
  ];
  const honarayChair = [
    {
      name: "Prof Dharm Singh",
      designation: "Namibia University of Science & Tech., Namibia",
    },
    {
      name: "Prof. Marcin Paprzycki",
      designation:
        "System Research Institute Polish Academy of Sciences and IBS PAN, Warsaw, Poland",
    },
    {
      name: "Prof. B.B. Gupta",
      designation:
        "Director, Center for AI & Cyber Security, Asia University, Taichung 413, Taiwan",
    },
    {
      name: "Prof. O. G. Kakde",
      designation: "Director, IIIT Nagpur",
    },
  ];
  const conferenceChair = [
    {
      name: "Dr. Dinesh Goyal",
      designation: "Professor & Director, PIET, Jaipur",
    },
    {
      name: "Dr. Pooja Jain",
      designation: "Professor, IIIT, Nagpur",
    },
  ];
  const conferenceCoChair = [
    {
      name: "Dr. Anil Kumar",
      designation: "Professor & HoD CSE, PIET, Jaipur",
    },
    {
      name: "Prof. (Dr.) Budesh Kanwar",
      designation: "Professor & HoD AI & DS, PIET, Jaipur",
    },
  ];
  const organizingChair = [
    {
      name: "Dr. Uday Pratap Singh",
      designation: "Asso. Prof. & Dy HoD, AI & DS, PIET, Jaipur",
    },
  ];
  const organizingCoChair = [
    {
      name: "Mr. Udit Mamodiya",
      designation: "Assistant Professor, PIET, Jaipur",
    },
    {
      name: "Dr. Bhanu Pratap Singh",
      designation: "Associate Professor, PIET, Jaipur",
    },
  ];
  const technicalProgramChair = [
    {
      name: "Dr. Atul Gunsai",
      designation: "Professor, Saurasthra University, Rajkot",
    },
    {
      name: "Dr. Manoj Kumar",
      designation: "Professor, Saurasthra University, Rajkot",
    },
    {
      name: "Dr. Bhanu Pratap Singh",
      designation: "Associate Professor, PIET, Jaipur",
    },
    {
      name: "Mr. Vivek Saxena",
      designation: "Assistant Professor, PIET, Jaipur",
    },
  ];
  const editorial = [
    {
      name: "Dr. Dinesh Goyal",
      designation: "Professor & Director, PIET, Jaipur",
    },
    {
      name: "Dr. Anil Kumar",
      designation: "Professor & HOD, CSE, PIET, Jaipur",
    },
    {
      name: "Prof. Dharm Singh",
      designation: "Namibia University of Science & Tech., Namibia",
    },
    {
      name: "Prof. Marcin Paprzycki",
      designation:
        "System Research Institute Polish Academy of Sciences and IBS PAN, Warsaw, Poland",
    },
    {
      name: "Dr. Pooja Jain",
      designation: "Professor, IIIT, Nagpur",
    },
    {
      name: "Prof. B.B. Gupta",
      designation:
        "Director, Center for AI & Cyber Security, Asia University, Taichung 413, Taiwan",
    },
    {
      name: "Dr. Uday Pratap Singh",
      designation: "Asso. Prof. & Dy HoD, AI & DS, PIET, Jaipur",
    },
  ];
  const keynoteSpeakers = [
    {
      name: "Prof Dharm Singh",
      designation:
        "Professor & UNESCO Chair Holder Secure on High-performance Computing for Higher Education and Research, Namibia University of Science and Technology",
    },
    {
      name: "Dr. J. C. Bansal",
      designation: "Associate Professor, South Asian University, New Delhi",
    },
    {
      name: "Dr. Harish Sharma",
      designation: "Associate Professor, RTU",
    },
    {
      name: "Dr. Carlos M. Travieso-Gonzalez",
      designation:
        "Signals and Communication Department. University of Las Palmas de Gran Canaria, Spain",
    },
    {
      name: "Dr. Maria Ganzha",
      designation:
        "Associate Professor, Warsaw University of Technology (Warsaw, Poland)",
    },
    {
      name: "Dr. Nasib Singh Gill",
      designation:
        "Professor, Department of Computer Science & Applications, MAHARSHI DAYANAND UNIVERSITY ROHTAK-124001 (HARYANA)",
    },
    {
      name: "Dr. Pooja Jain",
      designation: "Professor, IIIT, Nagpur",
    },
  ];
  const financeCommittee = [
    {
      name: "Dr. Ajay Maurya",
      designation: "Professor, PIET, Jaipur",
    },
    {
      name: "Dr. Shruti Thapar",
      designation: "Associate Professor, PIET, Jaipur",
    },
  ];
  const publicityChair = [
    {
      name: "Dr. Basant Agarwal",
      designation: "IIIT, Kota",
    },
    {
      name: "Dr. Vijandra Singh",
      designation: "Manipal University, Jaipur",
    },
    {
      name: "Dr. Priya Mathur",
      designation: "PIET, Jaipur",
    },
  ];
  const internationalAdvisoryCommittee = [
    {
      name: "Aleksandra Mileva",
      designation: "Goce Delcev University STIP, Macedonia",
    },
    {
      name: "Carlos M. Travieso",
      designation: "University of Las Palmas de Gran Canaria, Spain",
    },
    {
      name: "Armin Aberle",
      designation: "SERIS National University of Singapore, Singapore",
    },
    {
      name: "Sedat Akleylek",
      designation: "Ondokuz Mayis University Samsun, Turkey",
    },
    {
      name: "Sureswaran Ramadass",
      designation: "USM University Penang, Malaysia",
    },
    {
      name: "Youcef Soufi",
      designation: "University of Tabessa, Algeria",
    },
    {
      name: "Lalit Kumar Goel",
      designation: "NTU Nanyang, Singapore",
    },
    {
      name: "Pinnamaneni Bhanu",
      designation: "Kelenn Technology Antony, France",
    },
    {
      name: "Daniele Riboni",
      designation: "University of Cagliari, Italy",
    },
    {
      name: "Wan Young Chung",
      designation: "Pukyong National University Busan, South Korea",
    },
    {
      name: "Dr. Sheng-Lung Peng",
      designation: "Prof., National Dong Hua University, Taiwan",
    },
    {
      name: "Dr. Ahmed Elngar",
      designation: "Assistant Professor, Egypt",
    },
  ];
  const nationalAdvisoryCommittee = [
    {
      name: "Dr. O P Verma",
      designation: "DTU, New Delhi",
    },
    {
      name: "Dr. Rajat Rastogi",
      designation: "Professor, IIT Roorkee",
    },
    {
      name: "Dr. C. Periswamy",
      designation: "MNIT, Jaipur",
    },
    {
      name: "Dr. Ritu Agrawal",
      designation: "MNIT, Jaipur",
    },
    {
      name: "Dr. Paresh Vallabhbhai Virparia",
      designation: "Professor, SPU",
    },
    {
      name: "Dr. Amit Chaturvedi",
      designation: "GEC, Ajmer",
    },
    {
      name: "Dr. Rajesh Kumar",
      designation: "MNIT, Jaipur",
    },
    {
      name: "Dr. Arun Kumar Verma",
      designation: "MNIT, Jaipur",
    },
    {
      name: "Dr. Amit Srivastava",
      designation: "Jaypee University, Greater Noida",
    },
    {
      name: "Prof. Anu Gupta",
      designation: "BITS, Pilani",
    },
    {
      name: "Dr. K. Kalaiselvi",
      designation:
        "Associate Professor, Saveetha College of Liberal Arts and Sciences, Chennai",
    },
    {
      name: "Dr. Brojo Kishore Mishra",
      designation: "GIET University, Gunupur",
    },
    {
      name: "Prof. Roheet Bahtnagar",
      designation: "Manipal University, Jaipur",
    },
    {
      name: "Prof. Uma Shankar Rawat",
      designation: "Manipal University, Jaipur",
    },
    {
      name: "Dr. Vinod Kumar Chaubey",
      designation: "BITS, Pilani",
    },
    {
      name: "Dr. Vinod Madan",
      designation: "Kalasalingam University",
    },
    {
      name: "Dr. Sudha Morwal",
      designation: "Banasthali Vidyapeeth",
    },
    {
      name: "Dr. Sumit Srivastava",
      designation: "Manipal University, Jaipur",
    },
    {
      name: "Dr. Ravinder Agarwal",
      designation: "Thapar University, Patiala",
    },
    {
      name: "Dr. Namita Mittal",
      designation: "MNIT, Jaipur",
    },
    {
      name: "Dr. Trilok Mathur",
      designation: "BITS, Pilani",
    },
    {
      name: "Prof. Sandeep Joshi",
      designation: "Manipal University, Jaipur",
    },
    {
      name: "Dr. Prashant Sahai Saxena",
      designation: "JNU, Jaipur",
    },
    {
      name: "Prof. Uma Shankar Rawat",
      designation: "Manipal University, Jaipur",
    },
    {
      name: "Dr. A.K. Dwevedi",
      designation: "RTU, Kota",
    },
    {
      name: "Dr. Anil K Mathur",
      designation: "RTU, Kota",
    },
    {
      name: "Dr. C.P. Gupta",
      designation: "RTU, Kota",
    },
    {
      name: "Dr. P V Virparia",
      designation: "Sardar Patel University, Anand",
    },
    {
      name: "Dr. Sweta Bhatia",
      designation: "Manav Rachna University, Faridabad",
    },
    {
      name: "Dr. Balamurugan Shanmugam",
      designation: "Director R & D, QUANTS IS & CS, Tamil Nadu",
    },
  ];
  const organizingCommittee = [
    {
      name: "Ms. Jayshree Surolia",
      designation: "PIET, Jaipur",
    },
    {
      name: "Ms. Ashima Tiwari",
      designation: "PIET, Jaipur",
    },
    {
      name: "Dr. Saurabh Raj",
      designation: "PIET, Jaipur",
    },
    {
      name: "Mr. Vivek Saxena",
      designation: "PIET, Jaipur",
    },
    {
      name: "Ms. Bersha Kumari",
      designation: "PIET, Jaipur",
    },
    {
      name: "Ms. Shikha Gautam",
      designation: "PIET, Jaipur",
    },
    {
      name: "Mr. Abhishek Dadhich",
      designation: "PIET, Jaipur",
    },
    {
      name: "Ms. Alka Rani",
      designation: "PIET, Jaipur",
    },
    {
      name: "Ms. Bhawna Kumari",
      designation: "PIET, Jaipur",
    },
    {
      name: "Ms. Smita Bisht",
      designation: "PIET, Jaipur",
    },
    {
      name: "Ms. Astha Joshi",
      designation: "PIET, Jaipur",
    },
    {
      name: "Ms. Shiwangi Sharma",
      designation: "PIET, Jaipur",
    },
    {
      name: "Mr. Punit Kumawat",
      designation: "PIET, Jaipur",
    },
    {
      name: "Ms. Chanchal Tiwari",
      designation: "PIET, Jaipur",
    },
    {
      name: "Mr. Anurag Anand Dubey",
      designation: "PIET, Jaipur",
    },
    {
      name: "Mr. Mohnish Sachdeva",
      designation: "PIET, Jaipur",
    },
    {
      name: "Ms. Shiwangi Khandelwal",
      designation: "PIET, Jaipur",
    },
    {
      name: "Ms. Shefali Khandelwal",
      designation: "PIET, Jaipur",
    },
    {
      name: "Mr. Indra Kishor",
      designation: "PIET, Jaipur",
    },
    {
      name: "Mr. Ephin M.",
      designation: "PIET, Jaipur",
    },
    {
      name: "Ms. Anita Kumari",
      designation: "PIET, Jaipur",
    },
  ];

  return (
    <div className="mx-4">
      <div>
        <div className="my-12">
          <h1 className={"heading my-2 text-sm font-bold lg:text-2xl"}>
            Honorary Patron
          </h1>
          <ul
            role="list"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {honaryPateron.map((item, index) => {
              return (
                <li
                  key={index}
                  className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
                >
                  <div className="flex w-full items-center justify-between space-x-6 p-6">
                    <div className="flex-1 truncate">
                      <div className="flex items-center space-x-3">
                        <h3 className="truncate text-sm font-medium text-gray-900 lg:text-xl">
                          {item.name}
                        </h3>
                      </div>
                      <p className="mt-1 truncate text-sm text-gray-500">
                        {item.designation}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="my-12">
          <h1 className={"heading my-2 text-sm font-bold lg:text-2xl"}>
            Honorary Chair
          </h1>
          <ul
            role="list"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {honarayChair.map((item, index) => {
              return (
                <li
                  key={index}
                  className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
                >
                  <div className="flex w-full items-center justify-between space-x-6 p-6">
                    <div className="flex-1 truncate">
                      <div className="flex items-center space-x-3">
                        <h3 className="truncate text-sm font-medium text-gray-900 lg:text-xl">
                          {item.name}
                        </h3>
                      </div>
                      <p className="mt-1 truncate text-sm text-gray-500">
                        {item.designation}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="my-12">
          <h1 className={"heading my-2 text-sm font-bold lg:text-2xl"}>
            Conference Chair
          </h1>
          <ul
            role="list"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {conferenceChair.map((item, index) => {
              return (
                <li
                  key={index}
                  className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
                >
                  <div className="flex w-full items-center justify-between space-x-6 p-6">
                    <div className="flex-1 truncate">
                      <div className="flex items-center space-x-3">
                        <h3 className="truncate text-sm font-medium text-gray-900 lg:text-xl">
                          {item.name}
                        </h3>
                      </div>
                      <p className="mt-1 truncate text-sm text-gray-500">
                        {item.designation}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="my-12">
          <h1 className={"heading my-2 text-sm font-bold lg:text-2xl"}>
            Conference Co Chair
          </h1>
          <ul
            role="list"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {conferenceCoChair.map((item, index) => {
              return (
                <li
                  key={index}
                  className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
                >
                  <div className="flex w-full items-center justify-between space-x-6 p-6">
                    <div className="flex-1 truncate">
                      <div className="flex items-center space-x-3">
                        <h3 className="truncate text-sm font-medium text-gray-900 lg:text-xl">
                          {item.name}
                        </h3>
                      </div>
                      <p className="mt-1 truncate text-sm text-gray-500">
                        {item.designation}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="my-12">
          <h1 className={"heading my-2 text-sm font-bold lg:text-2xl"}>
            Organizing Chair
          </h1>
          <ul
            role="list"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {organizingChair.map((item, index) => {
              return (
                <li
                  key={index}
                  className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
                >
                  <div className="flex w-full items-center justify-between space-x-6 p-6">
                    <div className="flex-1 truncate">
                      <div className="flex items-center space-x-3">
                        <h3 className="truncate text-sm font-medium text-gray-900 lg:text-xl">
                          {item.name}
                        </h3>
                      </div>
                      <p className="mt-1 truncate text-sm text-gray-500">
                        {item.designation}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="my-12">
          <h1 className={"heading my-2 text-sm font-bold lg:text-2xl"}>
            Organizing Co Chair
          </h1>
          <ul
            role="list"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {organizingCoChair.map((item, index) => {
              return (
                <li
                  key={index}
                  className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
                >
                  <div className="flex w-full items-center justify-between space-x-6 p-6">
                    <div className="flex-1 truncate">
                      <div className="flex items-center space-x-3">
                        <h3 className="truncate text-sm font-medium text-gray-900 lg:text-xl">
                          {item.name}
                        </h3>
                      </div>
                      <p className="mt-1 truncate text-sm text-gray-500">
                        {item.designation}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="my-12">
          <h1 className={"heading my-2 text-sm font-bold lg:text-2xl"}>
            Technical Program Chair
          </h1>
          <ul
            role="list"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {technicalProgramChair.map((item, index) => {
              return (
                <li
                  key={index}
                  className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
                >
                  <div className="flex w-full items-center justify-between space-x-6 p-6">
                    <div className="flex-1 truncate">
                      <div className="flex items-center space-x-3">
                        <h3 className="truncate text-sm font-medium text-gray-900 lg:text-xl">
                          {item.name}
                        </h3>
                      </div>
                      <p className="mt-1 truncate text-sm text-gray-500">
                        {item.designation}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="my-12">
          <h1 className={"heading my-2 text-sm font-bold lg:text-2xl"}>
            Editorial
          </h1>
          <ul
            role="list"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {editorial.map((item, index) => {
              return (
                <li
                  key={index}
                  className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
                >
                  <div className="flex w-full items-center justify-between space-x-6 p-6">
                    <div className="flex-1 truncate">
                      <div className="flex items-center space-x-3">
                        <h3 className="truncate text-sm font-medium text-gray-900 lg:text-xl">
                          {item.name}
                        </h3>
                      </div>
                      <p className="mt-1 truncate text-sm text-gray-500">
                        {item.designation}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="my-12">
          <h1 className={"heading my-2 text-sm font-bold lg:text-2xl"}>
            Keynote Speaker
          </h1>
          <ul
            role="list"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {keynoteSpeakers.map((item, index) => {
              return (
                <li
                  key={index}
                  className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
                >
                  <div className="flex w-full items-center justify-between space-x-6 p-6">
                    <div className="flex-1 truncate">
                      <div className="flex items-center space-x-3">
                        <h3 className="truncate text-sm font-medium text-gray-900 lg:text-xl">
                          {item.name}
                        </h3>
                      </div>
                      <p className="mt-1 truncate text-sm text-gray-500">
                        {item.designation}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="my-12">
          <h1 className={"heading my-2 text-sm font-bold lg:text-2xl"}>
            Finance Committee
          </h1>
          <ul
            role="list"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {financeCommittee.map((item, index) => {
              return (
                <li
                  key={index}
                  className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
                >
                  <div className="flex w-full items-center justify-between space-x-6 p-6">
                    <div className="flex-1 truncate">
                      <div className="flex items-center space-x-3">
                        <h3 className="truncate text-sm font-medium text-gray-900 lg:text-xl">
                          {item.name}
                        </h3>
                      </div>
                      <p className="mt-1 truncate text-sm text-gray-500">
                        {item.designation}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="my-12">
          <h1 className={"heading my-2 text-sm font-bold lg:text-2xl"}>
            Publicity Chair
          </h1>
          <ul
            role="list"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {publicityChair.map((item, index) => {
              return (
                <li
                  key={index}
                  className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
                >
                  <div className="flex w-full items-center justify-between space-x-6 p-6">
                    <div className="flex-1 truncate">
                      <div className="flex items-center space-x-3">
                        <h3 className="truncate text-sm font-medium text-gray-900 lg:text-xl">
                          {item.name}
                        </h3>
                      </div>
                      <p className="mt-1 truncate text-sm text-gray-500">
                        {item.designation}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="my-12">
          <h1 className={"heading my-2 text-sm font-bold lg:text-2xl"}>
            International Advisory Committee
          </h1>
          <ul
            role="list"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {internationalAdvisoryCommittee.map((item, index) => {
              return (
                <li
                  key={index}
                  className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
                >
                  <div className="flex w-full items-center justify-between space-x-6 p-6">
                    <div className="flex-1 truncate">
                      <div className="flex items-center space-x-3">
                        <h3 className="truncate text-sm font-medium text-gray-900 lg:text-xl">
                          {item.name}
                        </h3>
                      </div>
                      <p className="mt-1 truncate text-sm text-gray-500">
                        {item.designation}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="my-12">
          <h1 className={"heading my-2 text-sm font-bold lg:text-2xl"}>
            National Advisory Committee
          </h1>
          <ul
            role="list"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {nationalAdvisoryCommittee.map((item, index) => {
              return (
                <li
                  key={index}
                  className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
                >
                  <div className="flex w-full items-center justify-between space-x-6 p-6">
                    <div className="flex-1 truncate">
                      <div className="flex items-center space-x-3">
                        <h3 className="truncate text-sm font-medium text-gray-900 lg:text-xl">
                          {item.name}
                        </h3>
                      </div>
                      <p className="mt-1 truncate text-sm text-gray-500">
                        {item.designation}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="my-12">
          <h1 className={"heading my-2 text-sm font-bold lg:text-2xl"}>
            Organizing Committee
          </h1>
          <ul
            role="list"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {organizingCommittee.map((item, index) => {
              return (
                <li
                  key={index}
                  className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
                >
                  <div className="flex w-full items-center justify-between space-x-6 p-6">
                    <div className="flex-1 truncate">
                      <div className="flex items-center space-x-3">
                        <h3 className="truncate text-sm font-medium text-gray-900 lg:text-xl">
                          {item.name}
                        </h3>
                      </div>
                      <p className="mt-1 truncate text-sm text-gray-500">
                        {item.designation}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <Sponsored />
    </div>
  );
}

export default Committe;