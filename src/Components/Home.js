import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home(props){
    useEffect(()=>{
        getData();
    },[])
    
    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    // Fetching the data from DRF API
    async function getData(){
        const response = await axios.get(props.url);
        setUsers(response.data);
    }

    // Posting the data to DRF API
    async function handleSubmit(e){
        e.preventDefault();
        let data = {
            user_name: username,
            password: password
        }
        await axios.post(props.url+'create_user/', data, {
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        });
        getData();
    }

    //Delete a specific user
    const deleteUser=(user_id)=>{
      axios.delete(props.url+`delete_user/${user_id}/`, {id:user_id})
      .then(()=>getData())
      .catch((err)=>console.log(err))

    }
    return(
        
        <div className="container w-50 my-5">
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Username</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="Username"/>
            </div>

            <div className="mb-3">
                <label htmlFor="exampleFormControlInput2" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleFormControlInput2" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/>
            </div>
            <input type="submit" className="btn btn-primary form-control" value="ADD"/>
            </form>
        
            <br/>
            <table className="table text-center" border={1} cellPadding={5}>
                <tbody>
                <tr>
                    <th>Id</th>
                    <th>Username</th>
                    <th>Password</th>
                    <th>Operation</th>
                </tr>

                {
                    users.map((user=>{
                        return(
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.user_name}</td>
                                <td>{user.password}</td>
                                <td>
                                    <Link className="btn btn-sm btn-primary mx-3" to={`/edit/${user.id}`} state={{uname: user.user_name, pwd: user.password}}>Edit</Link>
                                    <button className="btn btn-sm btn-danger" onClick={()=>deleteUser(user.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    }))
                }
                </tbody>
            </table>
            </div>
    )
}
export default Home;