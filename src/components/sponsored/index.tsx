import React from "react";

function Sponsored() {
  return (
    <div className="mb-8 w-full overflow-hidden">
      <h2
        className={
          "mb-10 text-center text-lg font-bold lg:text-center lg:text-2xl"
        }
      >
        Technically Co-Sponsored by
      </h2>
      <div className="flex flex-wrap justify-around">
        <div className="my-4 flex-shrink-0 justify-center px-4 sm:my-0">
          <div className="flex justify-center">
            <img
              className="h-48 w-48 rounded-full object-cover"
              src="/iste.jpg"
              alt="First image"
            />
          </div>
          <p className="my-4">Indian Society for Technical Education</p>
        </div>
        <div className="my-4 flex-shrink-0 justify-center px-4 sm:my-0">
          <div className="flex justify-center">
            <img
              className="h-48 w-48 rounded-full object-cover"
              src="/csi.jpg"
              alt="First image"
            />
          </div>
          <p className="my-4">Indian Society for Technical Education</p>
        </div>
        <div className="my-4 flex-shrink-0 justify-center px-4 sm:my-0">
          <div className="flex justify-center">
            <img
              className="h-48 w-48 rounded-full object-cover"
              src="/iie.jpg"
              alt="First image"
            />
          </div>
          <p className="my-4">Indian Society for Technical Education</p>
        </div>
      </div>
    </div>
  );
}

export default Sponsored;
