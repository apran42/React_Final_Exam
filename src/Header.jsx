import React, {useContext, useState} from 'react';
import logo from './resource/logo.png';
import {Link} from "react-router-dom";
import {AuthContext} from "./AuthContext";

const Header = () => {

    const authContext = useContext(AuthContext);

    const handleLogout = () => {
        authContext.logout();
    }

    return (
        <header id='header'>
            <Link to={"/"}>
                <div id='logo'>
                    <img src={logo} id="logo_" alt="logo" />
                    <div>DMU Shop</div>
                </div>
            </Link>
            <div>
                <nav>
                    <ul className='nav-links'>
                        {!authContext.isLogin ? (
                            <>
                            <li className="login"><Link to={"./login"}>로그인</Link></li>
                            <div>|</div>
                            <li className="signup"><a href="#">회원가입</a></li>
                            </>
                        ) : (
                            <>
                                <li className="logout"><Link to={"/"} onClick={handleLogout}>로그아웃</Link></li>
                            <div>|</div>
                                <li className="cart"><Link to={"/cart"}>장바구니</Link></li>
                            </>
                        )
                        }
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
