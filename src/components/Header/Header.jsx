// import React from 'react'
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
    // const nav = useNavigate();
    return (
        <header className="layout">
            <div className="header_top">
                <p>
                    Prova su pelle l&apos;effetto shaping e metti in risalto le
                    forme, <span className="underline">10% di sconto</span> su
                    25€
                </p>
            </div>
            <div className="header-bottom">
                <div className="header-bottom-content">
                    <section className="flex-col-1 flex">
                        <div className="logo relative">
                            <div className="hamburger-button"></div>
                            <div className="logo-home">
                                <Link to={"/"}>
                                    {" "}
                                    <img src={logo} alt="logo" />
                                </Link>
                            </div>
                        </div>
                        <div className="nav-bar">
                            <ul className="menu">
                                <li>
                                    <Link to={"/donna"}>DONNA</Link>
                                </li>
                                <li>
                                    <Link to={"/uomo"}>UOMO</Link>
                                </li>
                                <li>
                                    <Link to={"/bambini"}>BAMBINI</Link>
                                </li>
                            </ul>
                        </div>
                    </section>
                    <section className="flex-col-2 flex">
                        <div className="search-bar relative">
                            <input
                                type="search"
                                placeholder="Cosa stai cercando?"
                            />
                            <i className="fa fa-search absolute" aria-hidden="true"></i>
                        </div>
                        <div className="icon-bar">
                            <ul>
                                <li className="search-icon">
                                    <Link><i className="fa fa-search" aria-hidden="true"></i></Link>
                                </li>
                                <li>
                                    <Link to={"/user"}><i className="fa fa-user" aria-hidden="true"></i></Link>
                                 </li>
                                <li>
                                    <Link to={"/favorite"}><i className="fa fa-star-o" aria-hidden="true"></i></Link>
                                </li>
                                <li>
                                    <Link to={"/cart"}><i className="fa fa-shopping-bag" aria-hidden="true"></i></Link>
                                </li>  
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
            <div className="nav-bar-menu-mb">
                <ul className="menu-mb">
                    <li>
                        <a href="#">DONNA</a>
                    </li>
                    <li>
                        <a href="#">UOMO</a>
                    </li>
                    <li>
                        <a href="#">BAMBINI</a>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
