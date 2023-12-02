import {useSelector ,useDispatch} from "react-redux";
import {changeSearchTerm} from "../store";
import {useNavigate} from "react-router-dom";
import { setCount } from "../store";
import { CiLocationOn } from "react-icons/ci";
import {useEffect,useRef} from "react";

const Input = () => {

    const refVar = useRef();

    useEffect(()=>{
        refVar.current.focus();
    },[])

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const value = useSelector((store)=>store.form.searchTerm);

    const handleChange=(value)=>{
        dispatch(changeSearchTerm(value))
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        navigate("/hotels");
        dispatch(setCount());
    }
    return (
        <form onSubmit={handleSubmit}>
            <input value={value} onChange={(e)=>handleChange(e.target.value)} placeholder="Enter location/address.." 
            ref={refVar}/>
            <CiLocationOn className="search-icon" size="25"/>
            
        </form>
    )
}

export default Input