import axios from "axios";
import { useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
function Edit(props) {
    const location = useLocation();
    const userId = useParams()
    const [username, setUsername] = useState(location.state.uname);
    const [password, setPassword] = useState(location.state.pwd);
    const navigate = useNavigate();
    
    const updateUser = async (e) =>{
        e.preventDefault()
        const response = await axios.put(props.url+`update_user/${userId.id}/`, {user_name: username, password: password});
        navigate("/")
    }
    

    return(
        <div className="container w-50 my-5">
            <form onSubmit={updateUser}>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Username</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="Username"/>
                </div>

                <div className="mb-3">
                    <label for="exampleFormControlInput2" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleFormControlInput2" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/>
                </div>
                <input type="submit" className="btn btn-primary form-control" value="Update"/>
            </form>
        </div>
    )
}

export default Edit;