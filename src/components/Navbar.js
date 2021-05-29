import React from 'react';
import construction_site from '../assets/Picture5.jpg';

const Navbar = () => {
    return (
        <header>
            <div className="container-fluid p-0">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#"> <i className="fas fa-building fa-2x mx-3"></i>Ultra Construction (pvt) Ltd.</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto ">
                        <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>

                        <li className="nav-item">
                        <a className="nav-link" href="#">About Us</a>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Category
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Company</a>
                                <a className="dropdown-item" href="#">Employee</a>
                                <a className="dropdown-item" href="#">Supplier</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Customer</a>
                            </div>
                        </li>
                    </ul>

                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>

            <div className="container text-center">
                <div className="row">
                    <div className="col-md-7 col-sm-12">
                        <h3 className="p-3">Make your Contract easily with us...</h3>
                        <h1>Ultra Construction (pvt) Ltd.</h1>
                        <h2>“You can dream, create, design, and build the most wonderful place in the world. But it requires people to make the dream a reality.”
                            – Walt Disney
                        </h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat suscipit quos ratione doloribus recusandae blanditiis animi sit illo nostrum similique, ut quisquam minima cumque rerum est corrupti deserunt. Distinctio, maiores.</p>
                        <button className="btn btn-dark bg-info px-5 py-2">SIGN IN</button>
                        <button className="btn btn-dark bg-info px-5 py-2">LOG IN</button><br/>
                        <p className="sign_log_in ">If you already have an account, LOG IN</p>
                        <p className="sign_log_in ">You don't have Account, SIGN IN</p>
                    </div>
                    <div className="col-md-5 col-sm-12">
                        <img src={construction_site} alt="Contruction_Site" />

                        <h3>This is a project</h3>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Navbar
