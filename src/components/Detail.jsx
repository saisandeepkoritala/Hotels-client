import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {Skeleton} from "./Skeleton";
import axios from "axios";

const Detail = () => {
    const hotel_id = useParams();

    const [data,Setdata]=useState([]);
    const [other,Setother]=useState([]);
    const [isLoading,SetisLoading]=useState(true);

    useEffect(()=>{

        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
        const day = currentDate.getDate().toString().padStart(2, '0');

        const formattedDate = `${year}-${month}-${day}`;
        const formattedNextDate = `${year}-${month}-${Number(day)+1}`;

        axios.post("http://localhost:5000/getHotelDetails",{
        arrival:formattedDate,
        departure:formattedNextDate,
        id:hotel_id.id
    })
    .then((data)=>{
        console.log(data)
        Setdata(data.data.Hotel_data.data.rooms)
        Setother(data.data.Hotel_data.data)
        SetisLoading(false);
    })
    .catch((err)=>{
    console.log("error",err)
    SetisLoading(true);
    })
    },[hotel_id])

    const {city,address,hotel_name,property_highlight_strip,composite_price_breakdown,arrival_date,departure_date,timezone}= other;

    let render="";
    let price="";

    if(composite_price_breakdown){
        price = composite_price_breakdown.gross_amount_hotel_currency.value || "";
    }
    
    if(property_highlight_strip){  
        render=property_highlight_strip.map((item)=>{
            return <div key={item.name}>{item.name}</div>
        })
    }
    
        return (
            <div className='detail'>    
            {isLoading ? (
                <Skeleton times="5"/>
            ) : (
                <div className='nested'>
                    <div className='nested-images'>
                        {(Object.values(data)[0]?.photos || []).map((img, i) => (
                            <div key={i}>
                                <img src={img.url_original} alt=""/>
                            </div>
                        ))}
                    </div>
                    <div className='inner-nested'>
                        <div className='nested-stats'>
                            <h2>Hotel Info :</h2>
                            <p>Hotel Name - {hotel_name}</p>
                            <p>City - {city}</p>
                            <p>Address - {address}</p>
                            <p>TimeZone - {timezone}</p>
                        </div>
                        <div className='nested-items'>
                            <h2>Amenities available :</h2>
                            {render}
                        </div>
                    </div>
                    <div className='summary'>
                        <h2>Summary :</h2>
                        <div>Arrival : {arrival_date}</div>
                        <div>Departure : {departure_date}</div>
                        <div>Total cost for stay : {price}$</div>
                    </div>
                {!(Object.values(data)[0]?.photos && Object.values(data)[0].photos.length) && <p>No images Available</p>}
                </div>
            )}
            </div>
        );
}

export default Detail





