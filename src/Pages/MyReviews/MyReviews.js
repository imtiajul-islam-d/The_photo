import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext/AuthProvider";
import ReviewCard from "./ReviewCard";
import toast, { Toaster } from "react-hot-toast";

const MyReviews = () => {
  const [info, setInfo] = useState([]);
  const { user, logout } = useContext(AuthContext);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const url = `https://personal-review-server.vercel.app/getMyReview/${user.email}`;
    fetch(url, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("photoGrapher-token")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logout()
            .then(() => {})
            .catch(() => {});
        }
        return res.json();
      })
      .then((data) => {
        setInfo(data.data);
        setLoader(false);
      });
  }, [user.email]);
  const handleDelete = (id) => {
    const confirm = window.confirm(`Are you sure you want to delete this?`);
    if (confirm) {
      const url = `https://personal-review-server.vercel.app/delete/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.data.deletedCount > 0) {
            const updatedinfo = info.filter((items) => items._id !== id);
            setInfo(updatedinfo);
            toast.success("Successfully deleted");
          }
        });
    }
  };
  return (
    <section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100 container mx-auto">
      <div className="container p-6 mx-auto space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold">The reviews that you have given in several services</h2>
        </div>

        {loader && (
          <div className="h-[60vh] flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-black dark:border-violet-400"></div>
          </div>
        )}
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          {!loader &&
            info.map((review) => (
              <ReviewCard
                key={review._id}
                handleDelete={handleDelete}
                review={review}
              ></ReviewCard>
            ))}
        </div>

        <Toaster position="top-center" reverseOrder={false} />

        {!loader && info.length === 0 ? (
          <div className="text-center font-bold text-orange-400">
            No reviews ware added
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default MyReviews;
