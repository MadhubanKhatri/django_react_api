import { Link, Outlet } from "react-router-dom";
function Root(){
    return(
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">React+DRF</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to='/' class="nav-link active" aria-current="page" href="#">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/about' class="nav-link active" href="#">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/contact' class="nav-link active" href="#">Contact</Link>
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