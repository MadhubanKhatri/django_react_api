import { useRef, useEffect, useState } from "react";
import axios from "axios";

function FileUpload(props){
    const [files, setFiles] = useState([]);
    useEffect(()=>{
        getFiles();
    },[])
    async function getFiles(){
        const response = await axios.get(props.url+'files/');
        setFiles(response.data)
        console.log(files);
    }
    const inputRef = useRef();
    const handleSubmit = (e)=>{
        e.preventDefault();
        const file = inputRef.current.files[0];
        console.log(file);
        const formData =  new FormData();
        formData.append("user", 16);
        formData.append("fileUpload", file, file.name);

        const response = axios.post(props.url+'files/', formData, {
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        })
    }


    return(
        <div className="container my-5 w-50 text-center">
            <form onSubmit={handleSubmit} className="form-control py-5">
                <input type='file' accept="image/*" ref={inputRef} name='file'/>
                <input type='submit'/>
            </form>
            <table className="table" border={3} cellPadding={3}>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                    </tr>
            {
                
                files.map((file)=>{
                    return (<tr key={file.id}>
                        <td className="col col-4">
                            <img src={"http://127.0.0.1:8000/"+file.fileUpload} width={200} height={200} style={{"display":"flex"}} alt={file.fileUpload}/>
                        </td>
                        <td>{file.fileUpload}</td>
                        
                    </tr>)
                })
                
            }
            </table>
        </div>
    )
}
export default FileUpload;