import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext/AuthProvider";
import ReviewCard from "./ReviewCard";

const ReviewforService = () => {
  const { user } = useContext(AuthContext);
  return (
    <section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
      <div className="container p-6 mx-auto space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold">Partem reprimique an pro</h2>
          <p className="font-serif text-sm dark:text-gray-400">
            Qualisque erroribus usu at, duo te agam soluta mucius.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          <ReviewCard></ReviewCard>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Link to='/addReview' className="bg-orange-400 py-2 px-3 text-white hover:bg-gray-100 hover:text-orange-400">
          {user?.uid?  "Add your review" : "Please login to add review"}
        </Link>
      </div>
    </section>
  );
};

export default ReviewforService;
