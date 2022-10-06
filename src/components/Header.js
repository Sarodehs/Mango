import React from "react";
import { NavLink } from 'react-router-dom'
import './css/Header.css'
class Header extends React.Component {
    render() {
        return (
            <>
                {/* <!-- nav start --> */}
                <nav class="navbar navbar-expand-lg navbar-light ">
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <img src="./image/logo.png" class="navbar-brand" alt="logo" width="200" height="50" />
                        <div class="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <p href="/#"> <NavLink to="/"> HOME</NavLink></p>
                                </li>
                                <li class="nav-item">
                                    <p href="/#"><NavLink to="/About"> ABOUT US </NavLink></p>
                                </li>
                                <li class="nav-item">
                                    <p href="/#"> <NavLink to="/Products"> PRODUCTS</NavLink></p>
                                </li>
                                <li class="nav-item">
                                    <p href="/#"><NavLink to="/Contact"> CONTACT US</NavLink></p>
                                </li>
                            </ul>
                            <form class="d-flex navbar-nav">
                                <li class="nav-item">
                                    <a href="/#"> <i class="fa-solid fa-magnifying-glass"></i></a>
                                </li>
                                <li class="nav-item">
                                    <p href="/#"><NavLink to="/Shopping"> <i class="fa-solid fa-cart-shopping"></i></NavLink></p>
                                </li>
                                <li class="nav-item dropdown" >
                                    <a class=" dropdown-toggle" href="/#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        ACCOUNT
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-end " aria-labelledby="navbarDropdownMenuLink">
                                        <br />
                                        <li><a href="/#" id="navbutt"><button type="button" class=" btn-warning navdropbutt "><NavLink to="/Login"> Login</NavLink></button></a>
                                            <a href="/#" id="navbutt"><button type="button" class="btn-warning navdropbutt"><NavLink to="/Sign"> Create Account</NavLink></button></a></li><br />
                                        <li><p class="dropdown-item"><i class="fa-solid fa-heart navdroptext"></i>Wish List</p></li><hr />
                                        <li><p class="dropdown-item " ><i class="fa-solid fa-circle-user navdroptext"></i> MY Account</p></li><hr />
                                        <li><p class="dropdown-item "><i class="fa-solid fa-folder navdroptext"></i>My Order</p></li>
                                    </ul>
                                </li>
                            </form>
                        </div>
                    </div>
                </nav>

                {/* <!-- nav end -->  */}
            </>
        );
    }
}
export default Header;