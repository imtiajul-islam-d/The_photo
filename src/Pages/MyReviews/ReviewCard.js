import React, { useState } from "react";
import { FaRegEdit, FaArchive } from "react-icons/fa";
import Modal from "./Modal";

const ReviewCard = ({ review, handleDelete }) => {
  const [cardButton, setCardButton] = useState(false)
  // const [modalButton, setModalButton] = useState(true)
  const { reviewText, _id, userName, userImage, userEmail, serviceName } =
    review;

    const handleUpdate= (e) => {
      e.preventDefault()
      setCardButton(!cardButton)
      console.log(e.target.updatedReview.value);
    }
  return (
    <div className="container bg-orange-400 text-white flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
      <div className="flex p-4">
        <div className=" w-full items-center">
          <div className="text-center mb-3 text-2xl font-bold text-white">
            {serviceName}
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              src={userImage}
              alt=""
              className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
            />
            <div>
              <h4 className="font-bold">{userName}</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 space-y-2 text-sm dark:text-gray-400">
        <p>{reviewText}</p>
        <div className="flex items-center space-x-4 mt-2 cursor-pointer">
          <span className="p-2 bg-white text-black" onClick={() => setCardButton(!cardButton)}>
            <FaRegEdit></FaRegEdit>
          </span>
          <span className="p-2 bg-white text-black" onClick={() => handleDelete(_id)}>
            <FaArchive></FaArchive>
          </span>
        </div>
      </div>
      {
        cardButton && <Modal cardButton={cardButton} setCardButton={setCardButton} handleUpdate={handleUpdate} serviceName={serviceName}></Modal>
      }
      
    </div>
  );
};

export default ReviewCard;
