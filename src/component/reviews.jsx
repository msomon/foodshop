
import { useEffect, useState } from "react";
import Loading from "../Share/Loading";
import Review from "./review";
import useAxiosPublick from "../hooks/useAxiosPublick";
import axios from "axios";

const Reviews = () => {
    const [reviews ,setReviews] = useState([])


   


    axios.get("review.json")
    .then(data => setReviews(data?.data))


    if(!reviews){
        return <Loading></Loading>
    }
    

  
    return (


        <div >
            <h1 className="text-3xl text-primary text-center mb-10 font-bold sm:mt-10 lg:mt-20 z-4 ">Customer Feedback</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-6 w-full md:w-full lg:w-3/5 mx-auto">

            {
          reviews?.map((review)=><Review key={review.id} review ={review}></Review> 
          )}
         
         </div>
        </div>
    );
};

export default Reviews;