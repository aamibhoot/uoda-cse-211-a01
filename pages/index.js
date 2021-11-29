import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
// import nookies, { parseCookies, setCookie, destroyCookie } from "nookies";
import { useLocalStorage } from "react-use";

import styles from "../styles/Home.module.css";

import Header from "../components/header";
import { parseCookies } from "../lib/parseCookies";
import FormCard from "../components/formCard";

export default function Home({ initialRememberValue }) {
  const [isOpen, setIsOpen] = useState(true);
  const [click1, setClick1] = useState(false);
  const [click2, setClick2] = useState(false);
  const [click3, setClick3] = useState(false);
  const [cardPos, setCardPos] = useState();
  const [rememberMe, setRememberMe] = useState(() => initialRememberValue);
  useEffect(() => {
    setCardPos(JSON.parse(window.localStorage.getItem("regStep") || 1));
  }, []);

  console.log(cardPos);
  function card() {
    switch (cardPos) {
      case 1:
        return (
          <FormCard step={1}>
            <div className="mb-6 px-10">
              <label
                htmlFor="studentId"
                className="text-md font-medium block mb-2"
              >
                Your Student ID
              </label>
              <input
                type="number"
                id="studentId"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500 block w-full rounded-full p-2.5"
                placeholder="011------"
                required
              />
            </div>
            <div className="mb-6 px-10">
              <label
                htmlFor="studentId"
                className="text-md font-medium block mb-2"
              >
                Your Reg ID
              </label>
              <input
                type="number"
                id="studentId"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500 block w-full rounded-full p-2.5"
                placeholder="20------"
                required
              />
            </div>
          </FormCard>
        );
      case 2:
        return (
          <FormCard step={2}>
            <div className="mb-6 px-10">
              <label htmlFor="email" className="text-md font-medium block mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500 block w-full rounded-full p-2.5"
                placeholder="name@cse.uoda.edu.bd"
                required
              />
            </div>
            <div className="mb-6 px-10">
              <label htmlFor="name" className="text-md font-medium block mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500 block w-full rounded-full p-2.5"
                placeholder="Full Name"
                required
              />
            </div>
          </FormCard>
        );
      case 3:
        return (
          <FormCard step={3}>
            <div className="mb-6 px-10">
              <label htmlFor="dept" className="text-md block mb-2">
                Your Department
              </label>
              <div className="relative inline-flex w-full">
                <svg
                  className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 412 232"
                >
                  <path
                    d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                    fill="#648299"
                    fill-rule="nonzero"
                  />
                </svg>
                <select
                  id="dept"
                  className="border border-gray-300 rounded-full text-gray-600 h-10 w-full pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                >
                  <option>Choose department</option>
                  <option>CSE</option>
                  <option>BBA</option>
                  <option>English</option>
                  <option>Bangla</option>
                  <option>Pharmacy</option>
                  <option>Fine Arts</option>
                  <option>Music</option>
                  <option>Law</option>
                  <option>Bio-Tec</option>
                  <option>CMS</option>
                </select>
              </div>
            </div>
            <div className="mb-6 px-10">
              <label htmlFor="semester" className="text-md block mb-2">
                Your Semester
              </label>
              <div className="relative inline-flex w-full">
                <svg
                  className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 412 232"
                >
                  <path
                    d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                    fill="#648299"
                    fill-rule="nonzero"
                  />
                </svg>
                <select
                  id="semester"
                  className="border border-gray-300 rounded-full text-gray-600 h-10 w-full pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                >
                  <option>Choose semester</option>
                  <option>Semester 1</option>
                  <option>Semester 2</option>
                  <option>Semester 3</option>
                  <option>Semester 4</option>
                  <option>Semester 5</option>
                  <option>Semester 6</option>
                  <option>Semester 7</option>
                  <option>Semester 8</option>
                  <option>Semester 9</option>
                  <option>Semester 10</option>
                  <option>Semester 11</option>
                  <option>Semester 12</option>
                </select>
              </div>
            </div>
          </FormCard>
        );
      case 4:
        return (
          <FormCard step={4}>
            <div className="mb-6 px-10">
              <label
                htmlFor="number"
                className="text-md font-medium block mb-2"
              >
                Your Contact Number
              </label>
              <input
                type="text"
                id="number"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500 block w-full rounded-full p-2.5"
                placeholder="01--- --- ---"
                required
              />
            </div>
            <div className="mb-6 px-10">
              <label htmlFor="blood" className="text-md font-medium block mb-2">
                Your Blood Group
              </label>
              <input
                type="text"
                id="blood"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500 block w-full rounded-full p-2.5"
                placeholder="Blood Group"
                required
              />
            </div>
          </FormCard>
        );
      case 5:
        return (
          <FormCard step={5}>
            <div className="mb-6 px-10">
              <label htmlFor="email" className="text-md font-medium block mb-2">
                Your interests
              </label>
              <div className="mt-2 bg-white rounded-xl px-3 py-2 text-black">
                <div>
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox" checked />
                    <span className="ml-2">Competitive Programming</span>
                  </label>
                </div>
                <div>
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2">Web & App Development</span>
                  </label>
                </div>
                <div>
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2">
                      Cyber Security, Data Analysis & Networking
                    </span>
                  </label>
                </div>
                <div>
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2">Graphic & UI/UX Design</span>
                  </label>
                </div>
                <div>
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2">
                      Sports / Cultural Activities (Song/Dance & others)
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </FormCard>
        );
      case 6:
        return (
          <motion.div
            key={`6`}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{
              type: "spring",
              bounce: 0.25,
              duration: 0.5,
            }}
            className="flex flex-col card w-8/12 h-80 rounded-xl px-6 justify-center items-center align-middle"
          >
            <div className="icon icon--order-success svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="154px"
                height="154px"
              >
                <g fill="none" stroke="#ffffff" strokeWidth={2}>
                  <circle
                    cx={77}
                    cy={77}
                    r={72}
                    style={{
                      strokeDasharray: "480px, 480px",
                      strokeDashoffset: 960,
                    }}
                  />
                  <circle
                    id="colored"
                    fill="#ffffff"
                    cx={77}
                    cy={77}
                    r={72}
                    style={{
                      strokeDasharray: "480px, 480px",
                      strokeDashoffset: 960,
                    }}
                  />
                  <polyline
                    stroke="#22AE73"
                    strokeWidth={10}
                    points="43.5,77.8 63.7,97.9 112.2,49.4 "
                    style={{
                      strokeDasharray: "100px, 100px",
                      strokeDashoffset: 200,
                    }}
                  />
                </g>
              </svg>
            </div>
            <h2 className="text-4xl text-center md:text-4xl text-white festive mt-2">
              Thanks for signing up
            </h2>
            <button
              className="text-xs mt-5 opacity-50 hover:opacity-100 transition-all duration-1000 ease-in-out"
              onClick={() => {
                setCardPos(1);
                localStorage.setItem("regStep", 1);
              }}
            >
              Again?
            </button>
          </motion.div>
        );
    }
  }
  return (
    <>
      <Header />
      <div className={styles.container}>
        <section className="flex justify-center items-center w-full mt-5">
          <AnimatePresence
            initial={false}
            exitBeforeEnter={true}
            onExitComplete={() => null}
          >
            {card()}
          </AnimatePresence>
        </section>

        <section
          className={`${
            cardPos === 6 ? "hidden " : ""
          } flex justify-between items-center w-3/4 mt-5 transition-all duration-1000 ease-in-out`}
        >
          <button
            className={`${
              click1 && "animate-tap"
            } flex justify-center items-center w-40 button-1 transition transform duration-300 ease-in-out hover:scale-110`}
            onClick={() => {
              setCardPos(cardPos - 1);
              setClick1(true);
              localStorage.setItem("regStep", cardPos - 1);
            }}
            onAnimationEnd={() => setClick1(false)}
            disabled={cardPos <= 1 ? true : false}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Previous
          </button>

          <div
            className={`flex content-start items-center w-80 h-1 ${
              cardPos === 5 || cardPos === 6
                ? "bg-gradient-to-r from-blue-400 to-green-500"
                : "glass"
            } p-2 rounded-full transform transition-all duration-1000 ease-in-out`}
          >
            <div
              className={`inline-block ${
                cardPos === 1
                  ? "w-2"
                  : cardPos === 2
                  ? "w-1/4"
                  : cardPos === 3
                  ? "w-2/4"
                  : cardPos === 4
                  ? "w-9/12"
                  : cardPos === 5
                  ? "w-full"
                  : cardPos === 6
                  ? "w-full"
                  : ""
              } h-1 bg-white rounded-full transform transition-all duration-500 ease-in-out`}
            ></div>
          </div>
          {cardPos === 5 ? (
            <button
              className={`${
                click3 ? "animate-tap button-2doom" : "button-2 shake"
              } flex justify-center items-center w-40 transition-all transform duration-300 ease-in-out hover:scale-110`}
              onClick={() => {
                setClick3(true);
                setCardPos(6);
                localStorage.setItem("regStep", 6);
              }}
              onAnimationEnd={() => setClick3(false)}
            >
              Send
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          ) : (
            <button
              className={`${
                click2 && "animate-tap"
              } flex justify-center items-center w-40 button-0 transition transform duration-300 ease-in-out hover:scale-110`}
              onClick={() => {
                setCardPos(cardPos === 4 ? 5 : cardPos + 1);
                setClick2(true);
                let pos = cardPos + 1;
                localStorage.setItem("regStep", pos);
              }}
              onAnimationEnd={() => setClick2(false)}
              disabled={cardPos === 5 ? true : false}
            >
              Next
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}
        </section>
        <small className="text-center text-white text-opacity-60 hover:text-opacity-100 transition duration-300 ease-in-out bottom-0 sticky">
          {" "}
          APON 1002 🐰{" "}
        </small>
      </div>
    </>
  );
}
export async function getInitialProps({ req }) {
  const cookies = parseCookies(req);

  return {
    initialRememberValue: cookies.mykey,
  };
}
