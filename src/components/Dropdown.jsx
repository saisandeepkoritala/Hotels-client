import {useState} from "react";
import {GoChevronDown,GoChevronLeft} from "react-icons/go";

function Dropdown(){
    const options = [
            {
            id: 0,
            query: "Interest rates ",
            content: "Discover our exclusive offers with competitive interest rates for your hotel bookings. Enjoy the best rates in the market and make your stay affordable and memorable.",
            },
            {
            id: 1,
            query: "Stable prices",
            content: "At our hotel, we guarantee price stability, providing you with the best value for your money. Our transparent pricing ensures that you get the best deal without any surprises.",
            },
            {
            id: 2,
            query: "Deposit",
            content: "Reserve your room today with a small deposit of $35. This deposit secures your booking and goes towards ensuring a seamless and enjoyable experience during your stay at our hotel.",
            },
            {
            id: 3,
            query: "Breakfast",
            content: "Indulge in a complimentary breakfast at our hotel. Start your day right with a variety of nutritious options, ensuring you have the energy to explore the city or attend your business meetings.",
            },
        ];
        

    const [show,setshow]=useState(-1);
    
    const handleClick=(index)=>{
        if(index===show){
            setshow(-1);
        }
        else
        {
            setshow(index);
        }
    }


    const renderedarray=options.map((item,index)=>{

        const isexpand = (index===show);
        
        const icons=<div className="icons">{isexpand?<GoChevronDown size="30" onClick={()=>handleClick(index)}/>:
        <GoChevronLeft size="30" onClick={()=>handleClick(index)}/>}</div>

        return(
            <div key={item.id} className="outer">
                <div className="query" onClick={()=>handleClick(index)}>
                    <p>{item.query}</p>
                    {isexpand && <div className="answer">{item.content}</div>}
                </div>
                {icons}
            </div>
        )
    })
    return(
        <>
            {renderedarray}
        </>
    )

}

export default Dropdown;