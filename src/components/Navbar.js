import React, {useContext} from 'react';
import { Link } from "react-router-dom";
import { Icon } from 'react-icons-kit';
import { cart } from 'react-icons-kit/entypo/cart';
import { useHistory } from 'react-router-dom';
import { auth } from '../config/Config';
import { signOut } from 'firebase/auth';
import { CartContext } from "../global/CartContext";


export const Navbar = ({ user }) => {

    const { totalQty } = useContext(CartContext);

    const history = useHistory();

    const logout = () => {
        signOut(auth).then(() => {
            history.push('/');
        });
    }

    return (
        <div className="navbox">
            <div className="leftside">
                <Link to="/" className="logo">
                    <span className="logo__primary_word">pracownia</span>
                    <span className="logo__secondary__word">klej</span>
                </Link>
            </div>
            {/*Jeśli nie jesteśmy zalogowani*/}
            {!user && <div className="rightside">
                <Link to="signup" className="navlinks">Zarejestruj się</Link>
                <Link to="login" className="navlinks">Zaloguj się</Link>
            </div>}
            {/*Jeśli jesteśmy zalogowani*/}
            {user && <div className="rightside">
                <span><Link to="shop" className="navlinks">{user}</Link></span>
                <span><Link to="cartproducts" className="navlinks"><Icon icon={cart} /></Link></span>
                <span className="no-of-products">{totalQty}</span>
                <button className="logout-btn" onClick={logout}>Wyloguj się</button>
            </div> }
        </div>
    );
}