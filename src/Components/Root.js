import { Link, Outlet } from "react-router-dom";
function Root(){
    return(
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">React+DRF</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/' className="nav-link active" aria-current="page" href="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/about' className="nav-link active">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/contact' className="nav-link active">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/file_upload' className="nav-link active">FileUpload</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        

        <div>
            <Outlet/>
        </div>
        </>
    )
}
export default Root;