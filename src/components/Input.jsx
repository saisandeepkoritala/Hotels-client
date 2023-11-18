import {useSelector ,useDispatch} from "react-redux";
import {changeSearchTerm} from "../store";
import {useNavigate} from "react-router-dom";
const Input = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const value = useSelector((store)=>store.form.searchTerm);

    const handleChange=(value)=>{
        dispatch(changeSearchTerm(value))
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        navigate("/hotels");
        console.log("hi")
    }
    return (
        <form onSubmit={handleSubmit}>
            <input value={value} onChange={(e)=>handleChange(e.target.value)}/>
        </form>
    )
}

export default Input