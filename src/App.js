import React, {Component} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { AddProducts } from "./components/AddProducts";
import { ProductsContextProvider } from "./global/ProductsContext";
import { Signup } from "./components/Signup";
import { Login } from "./components/Login";
import { auth, db } from "./config/Config";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { CartContextProvider } from "./global/CartContext";
import { Cart } from "./components/Cart";
import { Cashout } from "./components/Cashout";
import { NotFound } from "./components/NotFound";


class App extends Component {

    state = {
        user: null
    }

    componentDidMount() {
        // getting user info for navigation bar
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const docRef = doc(db, "SignedUsersData", `${user.uid}`);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    this.setState({
                        user: docSnap.data().Name
                    })
                }
            } else {
                this.setState({
                    user: null
                })
            }
        })
    }

    render() {
        return (
            <ProductsContextProvider>
                <CartContextProvider>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path='/' component={() => <Home user={this.state.user} />} />
                            <Route path='/add-products' component={AddProducts} />
                            <Route path='/signup' component={Signup} />
                            <Route path='/login' component={Login} />
                            <Route path="/cartproducts" component={() => <Cart user={this.state.user} />} />
                            <Route path='/cashout' component={Cashout} />
                            <Route component={NotFound} />
                        </Switch>
                    </BrowserRouter>
                </CartContextProvider>
            </ProductsContextProvider>
        );
    }
}

export default App;