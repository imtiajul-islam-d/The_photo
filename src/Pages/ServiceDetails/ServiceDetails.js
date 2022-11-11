import { Link, useLoaderData } from "react-router-dom";
import ReviewforService from "./ReviewForService/ReviewforService";
import ServiceItem from "./ServiceItem";


const ServiceDetails = () => {
  const detailsinfo = useLoaderData();
  const { event, image, details, description, price, _id } = detailsinfo.data;
  console.log(_id);
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container p-6 py-12 mx-auto space-y-24 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-50">
            {event ? event : ""}
          </h2>
        </div>
        <div className="flex flex-col r justify-between items-center">
          <div aria-hidden="true" className="lg:w-2/3">
            {image ? (
              <img
                src={image}
                alt=""
                className="rounded-lg shadow-lg dark:bg-gray-500 w-full"
              />
            ) : (
              ""
            )}
          </div>
          <div className="">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-50 ">
              <p className="mt-5 text-lg dark:text-gray-400 text-justify">
                {description}
              </p>
            </h3>
            <div className="mt-12 space-y-12">
              {details.map((it, ids) => (
                <ServiceItem key={ids} it={it}></ServiceItem>
              ))}
            </div>
          </div>

          <Link className="bg-orange-400 py-2 px-3 rounded-md text-white hover:bg-gray-300 hover:text-orange-400">
            Purchase with ${price}
          </Link>
        </div>
          <ReviewforService name ={event} id={_id}></ReviewforService>
      </div>
    </section>
  );
};

export default ServiceDetails;
