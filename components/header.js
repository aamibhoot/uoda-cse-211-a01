import React from "react";

function Header() {
  return (
    <>
      <div className="flex justify-center items-center w-full">
        <div className="shadow-xl text-center">
          <h2 className="text-4xl md:text-4xl text-white festive">
            Welcome to
          </h2>
          <div className="flex text-left justify-center items-center w-full">
            <img src="./logo.png" className="h-20" />
            <h1 className="text-5xl font-bold md:text-5xl ml-2">
              University Of Development<br></br>Alternative{" "}
              <sup className="text-sm font-light">
                Department of Computer Scinece & Enginnering
              </sup>
            </h1>
          </div>
          <div className="glass2 border-1 border-white rounded-full m-2 w-full px-20 py-2">
            <h1 className="text-4xl font-extrabold text-white bg-clip-text bg-gradient-to-t from-blue-500 to-green-300">
              Signup for Computer Club Today<i>!</i>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
