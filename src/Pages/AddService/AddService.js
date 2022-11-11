import React from "react";
import toast, { Toaster } from 'react-hot-toast';
import useTitle from "../../hooks/useTitle";

const AddService = () => {
    useTitle("The Photo || Add Service")
    const handleOnSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const serviceName = form.serviceName.value;
        const serviceImage = form.serviceImage.value;
        const price = form.price.value;
        const description = form.description.value;
        const bulltetPoint = form.bulletPoint.value;
        const insert = {
            event: serviceName,
            image: serviceImage,
            price: price,
            description: description,
            details: [
                bulltetPoint
            ]
        }
        if(!serviceName || !serviceImage || !price || !description || !bulltetPoint){
            toast('Please provide all the information')
        }else{
            fetch('https://personal-review-server.vercel.app/services/create', {
            method: 'POST',
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(insert)
        })
        .then(res => res.json())
        .then(data => {
            if(data.data.acknowledged){
                toast('Service added successfully.')
                form.reset()
            }
        })
        }
        // /services/create
        // console.log(insert)
        
    }
  return (
    <div className="flex flex-col container mx-auto p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100">
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Add a service</h1>
      </div>
      <form
        onSubmit={handleOnSubmit}
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
              name="price"
              id="price"
              required
              placeholder="Enter a service name"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
            />
          </div>
        </div>
        <div className="space-y-2">
          <div>
            <button
              type="submit"
              className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 bg-orange-400 dark:text-gray-900"
            >
              Add item
            </button>
            <Toaster />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddService;
