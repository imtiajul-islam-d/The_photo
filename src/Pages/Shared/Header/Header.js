import { Fragment, useContext, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
// import { FaArrowDown } from "react-icons/fa";

import { GiPhotoCamera } from "react-icons/gi";
import { AuthContext } from "../../../context/AuthContext/AuthProvider";

export default function Header() {
  // service onclick menu
  const [toggle, setToggle] = useState(false);
  const { user, logout } = useContext(AuthContext);
  // implement logout
  const handleLogout = () => {
    logout()
      .then(() => {})
      .catch(() => {});
  };
  return (
    <Popover className="relative h-full">
      {/* for large device start */}
      <div className="mx-auto container px-4 xl:px-0 h-full">
        <div className="h-full flex items-center justify-between md:space-x-14">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link
              className="text-4xl flex items-center space-x-2 font-bold text-white"
              to="/"
            >
              <GiPhotoCamera></GiPhotoCamera>
              <span className="text-xl">The Photo</span>
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group
            as="nav"
            className="hidden space-x-6 md:flex text-white"
          >
            <Link
              to="/services"
              onClick={() => setToggle(!toggle)}
              className="text-base font-medium relative cursor-pointer"
            >
              Services
              {/* <span className="flex items-center space-x-2">
                <span>Services</span>{" "}
                <span>
                  <FaArrowDown></FaArrowDown>
                </span>
              </span>
              <ul
                className={`absolute text-black bg-[#FFAD01] min-w-full mt-7 rounded-sm p-4 space-y-3 ${
                  toggle ? "block" : "hidden"
                }`}
              >
                <li>
                  <Link className="bg-white rounded-sm text-orange-500 px-3 py-3 block hover:bg-orange-500 hover:text-white">
                    Wedding
                  </Link>
                </li>
                <li>
                  <Link className="bg-white rounded-sm text-orange-500 px-3 py-3 block hover:bg-orange-500 hover:text-white">
                    FASHION{" "}
                  </Link>
                </li>
                <li>
                  <Link className="bg-white rounded-sm text-orange-500 px-3 py-3 block hover:bg-orange-500 hover:text-white">
                    BIRTHDAY{" "}
                  </Link>
                </li>
                <li>
                  <Link className="bg-white rounded-sm text-orange-500 px-3 py-3 block hover:bg-orange-500 hover:text-white">
                    COMMERCIAL{" "}
                  </Link>
                </li>
                <li>
                  <Link className="bg-white rounded-sm text-orange-500 px-3 py-3 block hover:bg-orange-500 hover:text-white">
                    CORPORATE EVENTS
                  </Link>
                </li>
                <li>
                  <Link className="bg-white rounded-sm text-orange-500 px-3 py-3 block hover:bg-orange-500 hover:text-white">
                    TRAVEL & NATURE
                  </Link>
                </li>
              </ul> */}
            </Link>
            {user ? (
              <>
                <Link to="/myReviews" className="text-base font-medium">
                  My reviews
                </Link>
                <Link to="/addService" className="text-base font-medium">
                  Add service
                </Link>
              </>
            ) : (
              <></>
            )}
          </Popover.Group>
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0 text-white">
            {user ? (
              <>
                <span
                  onClick={handleLogout}
                  className=" bg-white px-4 py-2 font-medium text-yellow-500 shadow-sm hover:bg-[#FFAD01] hover:text-black cursor-pointer rounded-md"
                >
                  Logout
                </span>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="whitespace-nowrap text-base font-medium"
                >
                  Sign in
                </Link>
                <Link
                  to="/signup"
                  className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-white px-4 py-2 text-base font-medium text-yellow-500 shadow-sm hover:bg-[#FFAD01] hover:text-black"
                >
                  Sign up
                </Link>
              </>
            )}
          </div>
        </div>
        {/* for large device end */}
      </div>

      {/* dropdown for small device start */}
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div className="text-4xl flex items-center space-x-2 font-bold text-[#FFAD01]">
                  <GiPhotoCamera></GiPhotoCamera>
                  <span className="text-xl">The Photo</span>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <Link to="/services" className="text-base font-medium text-[#FFAD01]">
                  Services
                </Link>

                {/* <Link
                  href="/"
                  className="text-base font-medium text-[#FFAD01] "
                >
                  FASHION
                </Link>
                <Link
                  href="/"
                  className="text-base font-medium text-[#FFAD01] "
                >
                  FASHION
                </Link>
                <Link
                  href="/"
                  className="text-base font-medium text-[#FFAD01] "
                >
                  FASHION
                </Link>
                <Link
                  href="/"
                  className="text-base font-medium text-[#FFAD01] "
                >
                  FASHION
                </Link>
                <Link
                  href="/"
                  className="text-base font-medium text-[#FFAD01] "
                >
                  FASHION
                </Link> */}
                {user ? (
                  <>
                    <Link
                      to="/myReviews"
                      className="text-base font-medium text-[#FFAD01]"
                    >
                      My reviews
                    </Link>
                    <Link
                      to="/addService"
                      className="text-base font-medium text-[#FFAD01]"
                    >
                      Add service
                    </Link>
                  </>
                ) : (
                  <></>
                )}
              </div>
              <div>
                {user ? (
                  <>
                    <span
                      onClick={handleLogout}
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-[#FFAD01] px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-yello-700"
                    >
                      Logout
                    </span>
                  </>
                ) : (
                  <>
                    <Link
                      to="/signup"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-[#FFAD01] px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-yello-700"
                    >
                      Sign up
                    </Link>
                    <p className="mt-6 text-center text-base font-medium text-gray-500">
                      Existing customer?{" "}
                      <Link
                        to="/login"
                        className="text-[#FFAD01] hover:text-yellow-500"
                      >
                        Sign in
                      </Link>
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
      {/* dropdown for small device end */}
    </Popover>
  );
}
