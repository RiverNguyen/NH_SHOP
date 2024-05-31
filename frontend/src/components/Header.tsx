import { UserButton } from "@clerk/clerk-react";
import { Heart, Search, ShoppingBag, ShoppingCart, User2 } from "lucide-react";
import { Link } from "react-router-dom";
import HeaderTest from "./HeaderTest";
import { Logo } from "./icons";
import { useLocalStorage } from "@/common/hooks/useStorage";

const Header = () => {
    const [user] = useLocalStorage("user", {});
    const userId = user?.user?._id;

    return (
        <header className="header">
            <div className="container">
                <div className="header-inner">
                    <Link to={"/"} className="header__logo">
                        <img src={Logo} alt="" />
                    </Link>

                    <div className="button-mobile">
                        <button>=</button>
                    </div>
                    <nav className="main-menu">
                        {/* <ul className="main-menu__list">
                            <li className="main-menu__item">
                                <Link to={"/"} className="main-menu__link">
                                    Home
                                </Link>
                            </li>
                            <li className="main-menu__item">
                                <Link to={"/shop"} className="main-menu__link">
                                    Shop
                                </Link>
                            </li>
                            <li className="main-menu__item">
                                <a className="main-menu__link">About</a>
                            </li>
                            <li className="main-menu__item">
                                <a className="main-menu__link">Contact</a>
                            </li>
                        </ul> */}
                        <HeaderTest />
                    </nav>
                    <div className="header-items">
                        <div className="header-item-user">
                            <span>
                                <Link to={"/sign-up"}>
                                    <User2 />
                                </Link>
                            </span>
                        </div>
                        <div className="header-item-user">
                            <span>
                                <Search />
                            </span>
                        </div>
                        <div className="header-item-user">
                            <span>
                                <Heart />
                            </span>
                        </div>
                        <div className="header-item-user">
                            <span>
                                <Link to={"/cart"}>
                                    <ShoppingCart />
                                </Link>
                            </span>
                        </div>
                        <div className="header-item-user">
                            <span>
                                <Link to={`/order-list/${userId}`}>
                                    <ShoppingBag />
                                </Link>
                            </span>
                        </div>
                        <div className="header-item-user">
                            <span>
                                <UserButton />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
