import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss'; // CSS dosyasını içe aktarın

const Header = () => {
    const [searchVisible, setSearchVisible] = useState(false);

    const searchToggle = () => {
        setSearchVisible(!searchVisible);
    };

    return (
        <header className="main_menu home_menu">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <button className="border-0  navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="menu_icon"><i className="fas fa-bars"></i></span>
                            </button>
                            <Link className="navbar-brand" to="/"> 
                                <img src="https://preview.colorlib.com/theme/aranoz/img/logo.png.webp" alt="logo" /> 
                            </Link>
                            
                            <div className="collapse navbar-collapse main-menu-item justify-content-center" id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" to="/shop" id="navbarDropdown_1" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Shop
                                        </Link>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown_1">
                                            <Link className="dropdown-item" to="/shop">Shop Category</Link>
                                            <Link className="dropdown-item" to="/shop">Product Details</Link>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" to="/pages" id="navbarDropdown_2" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Pages
                                        </Link>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown_2">
                                            <Link className="dropdown-item" to="/login">Login</Link>
                                            <Link className="dropdown-item" to="/tracking">Tracking</Link>
                                            <Link className="dropdown-item" to="/checkout">Product Checkout</Link>
                                            <Link className="dropdown-item" to="/cart">Shopping Cart</Link>
                                            <Link className="dropdown-item" to="/confirmation">Confirmation</Link>
                                            <Link className="dropdown-item" to="/elements">Elements</Link>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" to="/blog" id="navbarDropdown_3" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Blog
                                        </Link>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown_3">
                                            <Link className="dropdown-item" to="/blog">Blog</Link>
                                            <Link className="dropdown-item" to="/single-blog">Single Blog</Link>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/admin">admin</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="hearer_icon d-flex justify-content-between gap-1 ">
                                <Link id="search_1" onClick={searchToggle}><i class="fa-solid fa-magnifying-glass"></i></Link>
                                <Link to="#"><i class="fa-regular fa-heart"></i></Link>
                                <div className="dropdown cart">
                                    <Link className="" to="/" id="navbarDropdown4" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fas fa-cart-plus"></i>
                                    </Link>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown4">
                                        <Link className="dropdown-item" to="/cart">View Cart</Link>
                                        <Link className="dropdown-item" to="/checkout">Checkout</Link>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            {searchVisible && (
                <div className="search_input" id="search_input_box">
                    <div className="container">
                        <form className="d-flex justify-content-between search-inner">
                            <input type="text" className="form-control text-bg-danger" id="search_input" placeholder="Search Here" />
                            <button type="submit" className="btn"></button>
                            <span className="ti-close" onClick={searchToggle} title="Close Search"></span>
                        </form>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;
