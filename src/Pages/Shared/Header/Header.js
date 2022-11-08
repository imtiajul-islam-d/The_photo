import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
// for logo

import { GiPhotoCamera } from "react-icons/gi";

export default function Header() {
  return (
    <Popover className="relative h-full">
      {/* for large device start */}
      <div className="mx-auto container px-4 xl:px-0 h-full">
        <div className="h-full flex items-center justify-between md:justify-start md:space-x-14">
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
            <Link to="#" className="text-base font-medium">
              Wedding
            </Link>
            <Link to="#" className="text-base font-medium">
              Fashion
            </Link>
            <Link to="#" className="text-base font-medium">
              Commercial
            </Link>
          </Popover.Group>
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0 text-white">
            <Link to="/" className="whitespace-nowrap text-base font-medium">
              Sign in
            </Link>
            <Link
              to="/"
              className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-white px-4 py-2 text-base font-medium text-yellow-500 shadow-sm hover:bg-yellow-400 hover:text-black"
            >
              Sign up
            </Link>
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
                <div
                  className="text-4xl flex items-center space-x-2 font-bold text-yellow-500">
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
                <Link
                  to="/"
                  className="text-base font-medium text-yellow-500"
                >
                  Pricing
                </Link>

                <Link
                  href="/"
                  className="text-base font-medium text-yellow-500 "
                >
                  Docs
                </Link>
              </div>
              <div>
                <Link
                  to="/"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-yellow-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-yello-700"
                >
                  Sign up
                </Link>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?{" "}
                  <Link
                    to="/"
                    className="text-yellow-600 hover:text-yellow-500"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
      {/* dropdown for small device end */}
    </Popover>
  );
}
