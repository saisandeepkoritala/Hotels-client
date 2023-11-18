import pic1 from "../Images/prologis.png"
import pic2 from "../Images/realty.png"
import pic3 from "../Images/tower.png"
import pic4 from "../Images/equinix.png"
import { useEffect,useState } from "react";
import axios from "axios";
import {useDispatch} from "react-redux";
import { setHotels } from "../store/index";
import {Link} from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const HomeHotels = () => {

  const [hotels,Sethotels]=useState([]);
  const [isLoading,SetisLoading]=useState(true);

  useEffect(()=>{
    axios.get("https://mern-hotels-app.onrender.com/getData")
    .then((res)=>{dispatch(setHotels(res.data.data.hotels))
    Sethotels(res.data.data.hotels)
    SetisLoading(false)})
    .catch((err)=>{console.log("error",err)
    SetisLoading(false)})
  },[])

  const dispatch = useDispatch();


  const rendered = hotels.map((hotel)=>{
    const srcimg = hotel?.main_photo_url?.replace("square60", "square200") || '';
    return (
    <Link key={hotel.hotel_id} className="hotel" to={`/detail/${hotel.hotel_id}`}>
        <img src={srcimg} alt="" className="pic"/>
        <p>{hotel.hotel_name}</p>
        <ReactStars
                count={5}
                size={24}
                value={!isNaN(Math.round(hotel.review_score / 2)) ? Math.round(hotel.review_score / 2) : 0}
                activeColor="#ffd700"
                edit={false}
              />

        <p>Review - {hotel.review_score}/10</p>
    </Link>
  )})
  
  return (
    <div className='homehotels'>
      <div className="sponsers">
        <img src={pic1} alt="" />
        <img src={pic2} alt="" />
        <img src={pic3} alt="" />
        <img src={pic4} alt="" />
      </div>
      <div className="holder">
        <h2>Best Choices</h2>
        <h3>Popular Residencies</h3>
      </div>
      <div className="hotels">
        {isLoading?<p>Loading bro ....</p>:rendered}
      </div>
    </div>
  )
}

export default HomeHotels