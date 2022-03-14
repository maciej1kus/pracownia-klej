import React, { useContext, useEffect } from 'react';
import { CartContext } from '../global/CartContext';
import { Navbar } from './Navbar';
import { Icon } from 'react-icons-kit';
import { ic_add } from 'react-icons-kit/md/ic_add';
import { ic_remove } from 'react-icons-kit/md/ic_remove';
import { iosTrashOutline } from 'react-icons-kit/ionicons/iosTrashOutline';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { auth } from '../config/Config';
import { onAuthStateChanged } from "firebase/auth";

export const Cart = ({ user }) => {

    const { shoppingCart, dispatch, totalPrice, totalQty } = useContext(CartContext);

    const history = useHistory();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (!user) {
                history.push('/login');
            }
        })
    })

    return (
        <>
            <Navbar user={user} />
            <>
                {shoppingCart.length !== 0 && <h1>Koszyk</h1>}
                <div className='cart-container'>
                    {
                        shoppingCart.length === 0 && <>
                            <div>
                                <h3>Brak produktów w koszyku</h3>
                            </div>
                            <div>
                                <Link to="/">Powrót do strony głównej</Link>
                            </div>
                        </>
                    }
                    {shoppingCart && shoppingCart.map(cart => (
                        <div className='cart-card' key={cart.ProductID}>

                            <div className='cart-img'>
                                <img src={cart.ProductImg} alt="product" />
                            </div>

                            <div className='cart-name'>{cart.ProductName}</div>

                            <div className='cart-price-orignal'>PLN {cart.ProductPrice.toFixed(2)}</div>

                            <div className='inc' onClick={() => dispatch({ type: 'INC', id: cart.ProductID, cart })}>
                                <Icon icon={ic_add} size={24} />
                            </div>

                            <div className='quantity'>{cart.qty}</div>

                            <div className='dec' onClick={() => dispatch({ type: 'DEC', id: cart.ProductID, cart })}>
                                <Icon icon={ic_remove} size={24} />
                            </div>

                            <div className='cart-price'>
                                PLN {cart.TotalProductPrice.toFixed(2)}
                            </div>

                            <button className='delete-btn' onClick={() => dispatch({ type: 'DELETE', id: cart.ProductID, cart })}>
                                <Icon icon={iosTrashOutline} size={24} />
                            </button>
                        </div>
                    ))
                    }
                    {shoppingCart.length > 0 && <div className='cart-summary'>
                        <div className='cart-summary-heading'>
                            Podsumowanie zamówienia
                        </div>
                        <div className='cart-summary-price'>
                            <span>Do zapłaty:</span>
                            <span>PLN {totalPrice.toFixed(2)}</span>
                        </div>
                        <div className='cart-summary-price'>
                            <span>Liczba produktów:</span>
                            <span>{totalQty}</span>
                        </div>
                        <Link to='cashout' className='cashout-link'>
                            <button className='btn btn-success btn-md' style={{ marginTop: 15 + 'px' }}>
                                Zamówienie
                            </button>
                        </Link>
                    </div>}
                </div>
            </>
        </>
    );
};

