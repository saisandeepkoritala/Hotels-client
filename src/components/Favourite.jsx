import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Favourite = () => {

    const fav = useSelector((store)=>store.form.fav)
    const render = fav.map((hotel)=>{
        const srcimg = hotel?.main_photo_url?.replace("square60", "square300") || '';
        return (
        <Link key={hotel.hotel_id} className="favhotel" to={`/detail/${hotel.hotel_id}`}>
            <img src={srcimg} alt="" className="pic"/>
            <p>{hotel.hotel_name}</p>
        </Link>
    )})
    return (
    <div className='favv'>{render}</div>
    )
}

export default Favourite