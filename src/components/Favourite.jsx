import React from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import {overRideFav} from "../store"
import {ToastContainer,toast} from "react-toastify";
import duck from "../Images/duckbg.png";


const Favourite = () => {

    const dispatch = useDispatch();
    const fav = useSelector((store)=>store.form.fav)

    const handleClick= (id)=>{
        notify()
        const filteredhotels = fav.filter((hotel)=>hotel.hotel_id!==id)
        console.log(filteredhotels)
        dispatch(overRideFav(filteredhotels))
    }

    const notify=()=>{
        // toast.success('Item removed !!', {
        //     position: toast.POSITION.TOP_RIGHT,
        //     autoClose: 3000, // Set the duration in milliseconds
        //     hideProgressBar: false, // Show or hide the progress bar
        //     closeOnClick: true, // Close the toast when clicked
        //     pauseOnHover: true, // Pause the auto close when hovered
        //     draggable: true, // Allow dragging to dismiss the toast
        //     progress: undefined, // Use the default progress bar
        // });
        toast.info("Hotel Removed", {
            progressStyle: { background: "red" },
            theme: 'colored',
            style: { background: "black", color: "red" },
        });
        
    }

        const render = fav.map((hotel)=>{
            const srcimg = hotel?.main_photo_url?.replace("square60", "square300") || '';
            return (
                <div className='fav-in'>
                    <Link key={hotel.hotel_id} className="favhotel" to={`/detail/${hotel.hotel_id}`}>
                        <img src={srcimg} alt="" className="pic"/>
                        <p>{hotel.hotel_name}</p>
                        <p>Review - {hotel.review_score}/10</p>
                        <p>Check in - {hotel.checkin.from}</p>
                        <p>Check out - {hotel.checkout.until}</p>
                        <p>City - {hotel.city}</p>
                    </Link>
                    <div className='remove' onClick={()=>handleClick(hotel.hotel_id)}>Remove</div>
                </div>
        )})
    
    
    return (
    <div className='favv'>
        {render.length > 0 ? render : 
        <div>
            <img src={duck} alt="" className='duck'/>
            <h3>Nothing Saved</h3>
        </div>
        }
        <ToastContainer />
    </div>
    )
}

export default Favourite