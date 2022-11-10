import React from "react";

const AddService = () => {
  return (
    <div className="flex flex-col container mx-auto p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100">
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Add a service</h1>
      </div>
      <form
        novalidate=""
        action=""
        className="space-y-12 ng-untouched ng-pristine ng-valid"
      >
        <div className="space-y-4">
          <div>
            <label for="serviceNme" className="block mb-2 text-sm">
              Service name
            </label>
            <input
              type="text"
              name="serviceName"
              id="serviceName"
              placeholder="Enter a service name"
              required
              className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
            />
          </div>
          <div>
            <label for="image" className="block mb-2 text-sm">
              Enter a image link
            </label>
            <input
              type="text"
              name="serviceImage"
              id="serviceImage"
              placeholder="Enter a image link"
              required
              className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
            />
          </div>
          <div>
            <label for="description" className="block mb-2 text-sm">
              Enter a service description
            </label>
            <textarea required name="description" className="bg-gray-200 w-full">

            </textarea>
          </div>
          <div>
            <label for="image" className="block mb-2 text-sm">
              Enter some bullet point about your service
            </label>
            <input
              type="text"
              name="bulletPoint"
              placeholder="about your service"
              required
              className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
            />
          </div>
          <div>
            <label for="price" className="block mb-2 text-sm">
              Enter service price
            </label>
            <input
              type="text"
              name="serviceName"
              id="serviceName"
              required
              placeholder="Enter a service name"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
            />
          </div>
        </div>
        <div className="space-y-2">
          <div>
            <button
              type="button"
              className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 bg-orange-400 dark:text-gray-900"
            >
              Add item
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddService;
