import React, { useEffect, useState } from 'react'
import {useDispatch,useSelector} from "react-redux";
import axios from "axios";
import { setHotels } from "../store/index";
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import Input from "./Input";

const Hotels = () => {
    const [isLoading,SetisLoading]=useState(true);

    const dispatch = useDispatch();
    const {searchTerm,data,count} = useSelector((store)=>store.form)
    console.log(searchTerm,data,count)

    // useEffect(()=>{
    //     dispatch(setHotels(data))
    //     SetisLoading(false)
    // },[])

    useEffect(()=>{
        axios.post("http://localhost:5000/getHotels",{
            searchTerm
        })
        .then((data)=>{dispatch(setHotels(data.data.data.data.result))
        SetisLoading(false)})
        .catch((err)=>{console.log("error",err)
        SetisLoading(false)})
    },[count])

    const rendered = data.map((hotel)=>{
        const srcimg = hotel?.main_photo_url?.replace("square60", "square400") || '';
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
        <div className='searchhotels'>
            <Input />
            <div className='pics'>
            {isLoading?<p></p>:rendered}
            </div>
        </div>
        
    )
}

export default Hotels