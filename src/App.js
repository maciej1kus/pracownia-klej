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
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={() => <Home user={this.state.user} />} />
                        <Route path='/add-products' component={AddProducts} />
                        <Route path='/signup' component={Signup} />
                        <Route path='/login' component={Login} />
                    </Switch>
                </BrowserRouter>
            </ProductsContextProvider>
        );
    }
}

export default App;