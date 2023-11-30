import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios";
import { RotatingLines } from 'react-loader-spinner';

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
        const nextDate = new Date(currentDate);
        nextDate.setDate(currentDate.getDate() + 1);

        // Format the next date as "YYYY-MM-DD"
        const formattedNextDate = nextDate.toISOString().split('T')[0];

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

    const {city,address,hotel_name,property_highlight_strip,composite_price_breakdown,arrival_date,departure_date,timezone,url}= other;

    let render="";
    let price="";

    if(composite_price_breakdown){
        price = composite_price_breakdown.gross_amount_hotel_currency.value || "";
    }
    else{
        price="Not available";
    }
    
    if(property_highlight_strip){  
        render=property_highlight_strip.map((item)=>{
            return <div key={item.name}>{item.name}</div>
        })
    }

    
    
        return (
            <div className='detail'>    
            {isLoading ? (
                <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="5"
                width="100"
                visible={true}
        />
            ) : (
                <div className='nested'>
                    <div className='nested-images'>
                    {(data?.[Object.keys(data)[0]]?.photos || []).map((img, i) => (
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
                        <div className='link'>Total cost for stay : {price}$</div>
                        <div className='red'><a href={url} target="_blank">Click here to book now</a></div>
                    </div>
                </div>
            )}
            </div>
        );
}

export default Detail





