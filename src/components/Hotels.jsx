import { useEffect, useState } from 'react'
import {useDispatch,useSelector} from "react-redux";
import axios from "axios";
import { setHotels } from "../store/index";
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import Input from "./Input";
import { RotatingLines } from 'react-loader-spinner';
import { setFav } from '../store/index';
import {ToastContainer,toast} from "react-toastify";

const Hotels = () => {
    const [isLoading,SetisLoading]=useState(true);

    const dispatch = useDispatch();
    const {searchTerm,data,count,fav} = useSelector((store)=>store.form)

    useEffect(()=>{
        dispatch(setHotels(data))
        SetisLoading(false)
    },[])

    useEffect(()=>{
        axios.post("https://mern-hotels-app.onrender.com/getHotels",{
            searchTerm
        })
        .then((data)=>{dispatch(setHotels(data.data.data.data.result))
        SetisLoading(false)
    })
        .catch((err)=>{console.log("error",err)
        SetisLoading(false)})
    },[count])

    const handleClick = (liked)=>{
        const duplicate = fav.find((hotel)=>hotel.hotel_id===liked.hotel_id)
        if(!duplicate){
            dispatch(setFav(liked))
            notify()
        }
        else{
            console.log("duplicate bro")
            notifyError()
        }
        
    }

    const notifyError=()=>{
        toast.info("Already Saved", {
            progressStyle: { background: "yellow" },
            theme: 'colored',
            style: { background: "black", color: "yellow" },
        });
    }

    const notify=()=>{
        toast.info("Hotel Saved", {
            progressStyle: { background: "green" },
            theme: 'colored',
            style: { background: "black", color: "green" },
        });
    }

    const rendered = data?.map((hotel,i)=>{
        const srcimg = hotel?.main_photo_url?.replace("square60", "square400") || '';
        return (
        <div className='up'>
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
                <p>Review Score - {hotel.review_score_word}</p>
                <p>Check in - {hotel.checkin.from}</p>
                <p>Check out - {hotel.checkout.until}</p>
                <p>City - {hotel.city}</p>
            </Link>
            <div className='fav' onClick={()=>handleClick(hotel)}>Save</div>
        </div>
    )})

    return (
        <div className='searchhotels'>
            <Input />
            <div className='pics'>
            {rendered ||
            <RotatingLines
                    strokeColor="grey"
                    strokeWidth="5"
                    animationDuration="5"
                    width="96"
                    visible={true}
            />}
            </div>
            <ToastContainer />
        </div>
        
    )
}

export default Hotels