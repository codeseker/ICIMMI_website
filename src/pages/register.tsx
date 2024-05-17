import Button from "@/components/button";
import Sponsored from "@/components/sponsored";
import Head from "next/head";
import React from "react";

const Register = () => {

    return (
        <>

            <Head>
                <title>Register - ICAC3N - Galgotias College of Engineering and Technology</title>
                <meta name="title" content="Register - ICAC3N - Galgotias College of Engineering" />
                <meta name="description"
                    content="Register - 5th International Conference on Advances in Computing, Communication Control and Networking- ICAC3N" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://icac3n.in/" />
                <meta property="og:title" content="Register - ICAC3N - Galgotias College of Engineering" />
                <meta name="description"
                    content="Register - 5th International Conference on Advances in Computing, Communication Control and Networking- ICAC3N" />
                <meta property="og:image"
                    content="https://icac3n.in/api/og" />


                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://icac3n.in/" />
                <meta property="twitter:title" content="Register - ICAC3N - Galgotias College of Engineering" />
                <meta property="twitter:description"
                    content="Register - 5th International Conference on Advances in Computing, Communication Control and Networking- ICAC3N" />
                <meta property="twitter:image"
                    content="https://icac3n.in/api/og" />
            </Head>
            <div className={"mx-4 my-8 w-full"}>
                <h1 className={"heading font-semibold text-xl mb-12"}>Registration Fees Details
                    For Conference Registration the Author can pay the corresponding fees in the following Bank Account:</h1>
                <div className="prose mb- ">
                    <p>Account Name: POORNIMA INSTITUTE PART ONE</p>
                    <p>Account Number: 50200067728610</p>
                    <p>Bank: HDFC BANK LTD. F-129 RIICO INDUSTRIAL AREA SITAPURA, JAIPUR</p>
                    <p>IFSC Code: HDFC0003873</p>
                    <p>Account Name: POORNIMA INSTITUTE PART ONE</p>
                    <p>SWIFT Code: HDFCINBBXXX</p>
                    
                </div>
                <div >
                    <div className="relative overflow-x-auto container w-[100%] my-16">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-white uppercase bg-red-800 dark:bg-red-700 dark:text-white">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                    Category
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                    On or Before Nov 20, 2023
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                    After Nov 20, 2023
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        Member (ACM/IEEE/FIP)
                                    </th>
                                    <td className="px-6 py-4">INR 6000</td>
                                    <td className="px-6 py-4">INR 6500</td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                       (ACM/IEEE/FIP) With International co- Author
                                    </th>
                                    <td className="px-6 py-4">INR 5000</td>
                                    <td className="px-6 py-4">INR 5500</td>
                                </tr>
                                <tr className="bg-white dark:bg-gray-800">
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        International Author and Member (ACM/IEEE/FIP)
                                    </th>
                                    <td className="px-6 py-4">$150</td>
                                    <td className="px-6 py-4">$180</td>
                                </tr>
                                <tr className="bg-white dark:bg-gray-800">
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        Non-Member (ACM/IEEE/FIP)
                                    </th>
                                    <td className="px-6 py-4">INR 7000</td>
                                    <td className="px-6 py-4">INR 7500</td>
                                </tr>
                                <tr className="bg-white dark:bg-gray-800">
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        Non-Member (ACM/IEEE/FIP) with international co-Author
                                    </th>
                                    <td className="px-6 py-4">INR 6000</td>
                                    <td className="px-6 py-4">INR 6500</td>
                                </tr>
                                <tr className="bg-white dark:bg-gray-800">
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        International Author Non-Member (ACM/IEEE/FIP)
                                    </th>
                                    <td className="px-6 py-4">$200</td>
                                    <td className="px-6 py-4">$250</td>
                                </tr>
                                <tr className="bg-white dark:bg-gray-800">
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        Corporate/Industry Professional
                                    </th>
                                    <td className="px-6 py-4">INR 9000</td>
                                    <td className="px-6 py-4">INR 9500</td>
                                </tr>
                                <tr className="bg-white dark:bg-gray-800">
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                       PG Student
                                    </th>
                                    <td className="px-6 py-4">INR 4000</td>
                                    <td className="px-6 py-4">INR 4500</td>
                                </tr>
                                <tr className="bg-white dark:bg-gray-800">
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        UG Student
                                    </th>
                                    <td className="px-6 py-4">INR 3000</td>
                                    <td className="px-6 py-4">INR 3500</td>
                                </tr>
                                <tr className="bg-white dark:bg-gray-800">
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        Attendee
                                    </th>
                                    <td className="px-6 py-4">INR 1000	</td>
                                    <td className="px-6 py-4">INR 1500	</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <Sponsored/>

                </div>
                {/*<Button link={"https://forms.gle/NR6eA7N2Akp9S51XA"}>Register Now</Button>*/}
                {/* <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700" /> */}
                {/* <h2 className={"heading"}>Registration Fee</h2>
                    <h3>Yet to be Announced</h3> */}
                {/*<div>*/}
                {/*    <img src="images/misc/registration_fee.png" alt=""/>*/}
                {/*    <p>* Including 18% GST</p>*/}
                {/*</div>*/}

                {/* <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"/>
                <h2 className={"heading"}>Camera Ready Format</h2>
                <p>Authors are requested to follow the IEEE conference paper format.</p>
                <div className={"flex flex-col space-y-4"}>
                    <Button link={"/documents/PAPER_ID_ICAC3N23.docx"} >Download Docx File</Button>
                    <Button link={"/documents/PAPER_ID_ICAC3N23.pdf"}>Download PDF File</Button>
                </div>

                <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"/>
                <h2 className={"heading"}>Sample PPT Format</h2>
                <p>
                    Please follow the below format for the presentation. The presentation should be in the PPT format.
                </p>
                <div className={"flex flex-col space-y-4"}>
                    <Button link={"/documents/SamplePPTICAC3N-2023.pptx"}>Download PPTX File</Button>
                </div>


                <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"/>
                <h2 className={"heading"}>Bank Account Details</h2>
                <p>
                    Here are the bank account details for the registration fee payment.
                </p>
                <p><strong>PAYMENT MODE</strong> – NEFT / IMPS / DIRECT DEPOSIT / SWIFT TRANSFER/UPI</p>

                <table className="table-auto">
                    <tbody>
                    <tr>
                        <td>Account Number</td>
                        <td>6420000100006852</td>
                    </tr>
                    <tr>
                        <td>Account Name</td>
                        <td>GALGOTIAS COLLEGE OF ENGINEERING AND TECHNOLOGY</td>
                    </tr>
                    <tr>
                        <td>IFSC Code</td>
                        <td>PUNB0671700
                        </td>
                    </tr>
                    <tr>
                        <td>Swift Code</td>
                        <td>PUNBINBBMSN
                        </td>
                    </tr>
                    <tr>
                        <td>Bank Name</td>
                        <td>PUNJAB NATIONAL BANK
                        </td>
                    </tr>
                    <tr>
                        <td>Account Type</td>
                        <td>Saving</td>
                    </tr>
                    <tr>
                        <td>Bank Address</td>
                        <td>Punjab National Bank, Sector-63 Gautam Buddha Nagar-201301, U.P.</td>
                    </tr>
                    </tbody>
                </table>
                */}
            </div>
        </>
    )

}

export default Register;