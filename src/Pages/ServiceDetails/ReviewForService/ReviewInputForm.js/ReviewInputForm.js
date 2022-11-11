import React from "react";
import toast, { Toaster } from "react-hot-toast";

const ReviewInputForm = ({ userName, photo, userEmail, serviceId, serviceName, reviewDisplay, setReviewDisplay }) => {
  // take user data to store
  const handleOnsubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const review = form.review.value;
    const d = new Date();
    let time = d.getTime();
    const reviewObject = {
      // serviceId : data.data._id,
      userEmail: userEmail,
      userImage: photo,
      userName: userName,
      reviewText: review,
      serviceId,
      serviceName,
      time
    };
    fetch("https://personal-review-server.vercel.app/review/create", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewObject),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.data.acknowledged) {
          setReviewDisplay([ reviewObject,...reviewDisplay])
          toast("Review added successfully");
          form.reset();
        }
      });
  };
  return (
    <section className="w-full h-[80vh] flex items-center justify-center bg-gray-200">
      <div className=" text-black p-7 w-full container mx-auto">
        <form onSubmit={handleOnsubmit} className="w-full" action="">
          <textarea
            className="w-full p-5 outline-none"
            name="review"
            id="review"
            cols="30"
            rows="10"
            placeholder="Add your review here"
            style={{ resize: "none" }}
          ></textarea>
          <input
            type="submit"
            value="Add review"
            className="bg-orange-400 py-2 px-3 text-white hover:text-orange-400 hover:bg-white"
          />
          <Toaster />
        </form>
      </div>
    </section>
  );
};

export default ReviewInputForm;
