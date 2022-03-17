import React from "react";
import "./navbar.styles.scss";
import {Link, Outlet} from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";

function Navbar() {
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <CrownLogo className="logo"/>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">
                        Shop
                    </Link>
                    <Link className="nav-link" to="/sign-in">
                        Sign In
                    </Link>
                </div>
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default Navbar;