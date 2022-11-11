import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext/AuthProvider";
import ReviewCard from "./ReviewCard";
import ReviewInputForm from "./ReviewInputForm.js/ReviewInputForm";

const ReviewforService = ({ id, name }) => {
  const { user } = useContext(AuthContext);
  const [reviewDisplay, setReviewDisplay] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const url = `https://personal-review-server.vercel.app/getReview/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setReviewDisplay(data);
        setLoader(false);
      });
  }, [id]);
  console.log(id, user);
  return (
    <section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
      <div className="container p-6 mx-auto space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold">Let's see, what people say!</h2>
        </div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          {loader ? (
            <h2>Loading</h2>
          ) : (
            reviewDisplay.data.map((review) => <ReviewCard review={review}></ReviewCard>)
          )}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <span className="font-bold text-3xl mb-3 text-center text-red-600">
          {user?.uid ? "" : "Please login to add your review"}
        </span>
        {user?.uid ? (
          <ReviewInputForm
            userName={user.displayName}
            photo={user.photoURL}
            userEmail={user.email}
            serviceId={id}
            serviceName={name}
          ></ReviewInputForm>
        ) : (
          <>
            <Link className="bg-orange-400 py-2 px-3" to="/login">
              Login
            </Link>
          </>
        )}
      </div>
    </section>
  );
};

export default ReviewforService;
