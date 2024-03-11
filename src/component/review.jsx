
import { Rating } from "@smastrom/react-rating";



const Review = ({review}) => {
 const {customer_name,id,comment,image,rating} = review ; 


 


    return (
        <div  data-aos="flip-right"
        data-aos-duration="1500" >
          
    <div className="card h-[400px] min-w-[200px] max-w-[280px] glass mx-auto bg-white z-1">
    <figure>
    <img src={image} className=" rounded-lg pt-2 mt-3  h-[150px] w-[250px] "  width={100} height={100} alt="customer image"/>
    </figure>
  <div className="card-body">
    <h2 className="card-title">Name:{customer_name}</h2>
    <h2 className="card-title">Rating: <Rating
      style={{ maxWidth: 180 }}
      value={rating}
      readOnly
    />
    
    
    </h2>
    <p>Comment:{comment}</p>
  </div>
</div>
    </div>
    
          
    
    );
};

export default Review;