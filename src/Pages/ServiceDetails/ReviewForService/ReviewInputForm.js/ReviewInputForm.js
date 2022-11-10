import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../../context/AuthContext/AuthProvider";
import { product } from "../../ServiceDetails";

const ReviewInputForm = () => {
    const {user} = useContext(AuthContext)
    // take user data to store
    const data = useLoaderData()
    const handleOnsubmit = (e) => {
        e.preventDefault()
        console.log(data)
        const form = e.target;
        const review = form.review.value;
        const reviewObject = {
            // serviceId : data.data._id,
            userEmail: user.email,
            userImage : user.photoURL,
            userName: user.displayName,
            reviewText: review
        }
        fetch('https://personal-review-server.vercel.app/review/create', {
            method: 'POST',
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(reviewObject)
        })
        .then(res => res.json())
        .then(data => {console.log(data)})
      
        // fetch('http:localhost:5000/review/create', {
        //     method: 'POST',
        //     headers: {
        //       "content-type": 'application/json'
        //     },
        //     body: JSON.stringify(reviewObject)
        //   })
        //   })
        //   .then(res => res.json())
        //   .then(data => {
        //     console.log(data)
        //     if(data.acknowledged){
        //       form.reset()
        //       alert("Order placed successfully")
        //     }
        //   .catch(error => console.log(error))
        // console.log(JSON.stringify(reviewObject))
    }
  return (
    
    <section className="w-full h-[80vh] flex items-center justify-center bg-gray-200">
        <div className=" text-black p-7 w-full container mx-auto">
            <form onSubmit={ handleOnsubmit} className="w-full" action="">
                <textarea className="w-full p-5 outline-none" name="review" id="review" cols="30" rows="10" placeholder="Add your review here" style={{resize: 'none'}}></textarea>
                <input type="submit" value="Add review" className="bg-orange-400 py-2 px-3 text-white hover:text-orange-400 hover:bg-white"/>
            </form>
        </div>
    </section>
  );
};

export default ReviewInputForm;
