import {useSelector ,useDispatch} from "react-redux";
import {changeSearchTerm} from "../store";
import {useNavigate} from "react-router-dom";
import { setCount } from "../store";
const Input = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const value = useSelector((store)=>store.form.searchTerm);

    const handleChange=(value)=>{
        console.log("hi")
        dispatch(changeSearchTerm(value))
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        navigate("/hotels");
        dispatch(setCount());
    }
    return (
        <form onSubmit={handleSubmit}>
            <input value={value} onChange={(e)=>handleChange(e.target.value)}/>
        </form>
    )
}

export default Input