import pic1 from "../Images/prologis.png"
import pic2 from "../Images/realty.png"
import pic3 from "../Images/tower.png"
import pic4 from "../Images/equinix.png"
import { useEffect } from "react";
import axios from "axios";
import {useDispatch,useSelector} from "react-redux";
import { setHotels } from "../store/index";

const HomeHotels = () => {

  const dispatch = useDispatch();
  const fetched= useSelector((store)=>store.form.data)
  console.log(fetched)

  useEffect(()=>{
    axios.get("http://localhost:5000/getData")
    .then((res)=>dispatch(setHotels(res.data.data.hotels)))
    .catch((err)=>console.log("error",err))
  },[])
  
  return (
    <div className='homehotels'>
      <div className="sponsers">
        <img src={pic1} alt="" />
        <img src={pic2} alt="" />
        <img src={pic3} alt="" />
        <img src={pic4} alt="" />
      </div>
      <div>
        <p>Best Choices</p>
        <p>Popular Residencies</p>
      </div>
      <div>
        {}
      </div>
    </div>
  )
}

export default HomeHotels