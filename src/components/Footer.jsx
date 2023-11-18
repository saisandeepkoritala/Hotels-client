import { BsTelephone } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
const Footer=()=>{
    return (
        <div className="foot">
            <div className="banner">
            <h1>Book a hotel by getting in touch with us</h1>
            <h1> -- </h1>
            <h1>(123) 456 - 7869</h1>
        </div>
        <div className="footer">
            <div>
                <h1>Hotel Rental</h1>
                <h2>We offers a wide range of hotels for all your needs. We have the perfect hotel to meet your needs.</h2>
                <BsTelephone size="30"/><p>(123)- 456 - 7890</p>
                <BiLogoGmail size="30"/><p>Hotelrental@gmail.com</p>
                <h2>Design by seedStudio</h2>
            </div>
            <div>
                <h1>COMPANY</h1>
                <h2>New York</h2>
                <h2>Careers</h2>
                <h2>Mobile</h2>
                <h2>Blog</h2>
                <h2>How we work</h2>
            </div>
            <div>
                <h1>WORKING HOURS</h1>
                <h2>Mon - Fri: 9:00 AM - 9:00 PM</h2>
                <h2>SAT: 9:00 AM - 6:00 PM</h2>
                <h2>SUN: Closed</h2>
            </div>
            <div>
                <h1>SUBSCRIPTION</h1>
                <h2>Subscribe your Email address for latest news & updates.</h2>
                <input placeholder="Enter Email Address"/>
                <button>Submit</button>
            </div>
        </div>
        </div>
    )
}

export default Footer;