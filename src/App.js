import React, {Component} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { AddProducts } from "./components/AddProducts";
import { ProductsContextProvider } from "./global/ProductsContext";
import { Signup } from "./components/Signup";
import { Login } from "./components/Login";


class App extends Component {
    render() {
        return (
            <ProductsContextProvider>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={Home} />
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