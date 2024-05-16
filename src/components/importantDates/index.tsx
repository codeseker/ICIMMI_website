import React from "react";

interface ImportantDate {
  title: string;
  subtitle: string;
  date: string;
  isImportant: boolean;
  enabled: boolean;
}

const impDateData: ImportantDate[] = [
  {
    title: "Paper Submission Starts",
    date: "Yet to be Announced",
    subtitle: "Paper Submission Starts",

    isImportant: false,
    enabled: true,
  },
  {
    title: "Abstract Submission Deadline",
    date: "Yet to be Announced",
    subtitle: "Abstract Submission Deadline",

    isImportant: true,
    enabled: true,
  },
  {
    title: "Paper Submission Deadline",
    date: "Yet to be Announced",
    subtitle: "Paper Submission Deadline",

    isImportant: true,
    enabled: true,
  },
  {
    title: "Notification of Acceptance",
    subtitle: "(within 4weeks from submission)",
    date: "Yet to be Announced",

    isImportant: false,
    enabled: true,
  },
  {
    title: "Registration",
    date: "Yet to be Announced",
    subtitle: "Registration",

    isImportant: false,
    enabled: true,
  },
  {
    title: "Camera Ready Paper",
    date: "Yet to be Announced",
    subtitle: "Camera Ready Paper",
    isImportant: false,
    enabled: true,
  },
];

export default function ImportantDates() {
  return (
    <div className={"mx-auto w-full"}>
      <div
        className={
          "lg:min-w-lg mt-5 w-full rounded-t-md border-l-4 border-red-600 bg-gray-200 bg-gray-200 p-4 lg:max-w-sm"
        }
      >
        <p className={"text-lg font-semibold"}>Important Dates</p>
      </div>
      <div
        className={
          "w-full overflow-x-auto rounded-b-md bg-gray-100 p-4 scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-400 scrollbar-thumb-rounded-md lg:max-h-80 lg:max-w-sm lg:overflow-y-auto"
        }
      >
        {impDateData.map((item, index) => {
          return (
            <div key={index} className={``}>
              <div
                className={`flex items-start space-x-2 ${
                  item.isImportant ? "-mx-4 -my-5 bg-orange-100 p-4" : ""
                }`}
              >
                <div>
                  <p
                    className={`font-medium ${
                      item.isImportant ? "text-red-800" : ""
                    }`}
                  >
                    {item.title}
                  </p>
                  <p
                    className={`text-sm font-light ${
                      item.isImportant ? "text-red-800" : ""
                    }`}
                  >
                    {item?.subtitle}
                  </p>
                  <p
                    className={`text-sm text-gray-700 ${
                      item.isImportant ? "text-red-800" : ""
                    }`}
                  >
                    {item.date}
                  </p>
                </div>

                {index === 0 && (
                  <div
                    className={
                      "rounded-full bg-blue-800 bg-opacity-20 font-semibold"
                    }
                  >
                    <p className={"px-2 py-0.5 text-xs text-blue-800"}>New</p>
                  </div>
                )}
                {item.isImportant && (
                  <div className={"flex items-center justify-center space-x-2"}>
                    <div
                      className={
                        "mt-1 rounded-full bg-orange-800 bg-opacity-20 font-semibold"
                      }
                    >
                      <p className={"px-2 py-0.5 text-xs text-orange-800"}>
                        Important
                      </p>
                    </div>
                  </div>
                )}
              </div>
              {index !== impDateData.length - 1 && (
                <hr
                  className={`my-5 h-px border-0 bg-gray-200 dark:bg-gray-700 ${
                    item.isImportant && impDateData[index + 1].isImportant
                      ? "bg-red-200"
                      : ""
                  }`}
                />
              )}
            </div>
          );
        })}
        {impDateData.length == 0 && (
          <>
            <h3>No Dates Announced Yet</h3>
          </>
        )}
      </div>
    </div>
  );
}
