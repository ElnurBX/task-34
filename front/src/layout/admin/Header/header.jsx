
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className="header__title">Admin</h1>
                    </div>
                    <div className="col-3">
                    <ul className="nav d-flex">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/admin">dashbourd</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/admin/add">add</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/">Home</Link>
                                    </li>
                    </ul>   
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
                                