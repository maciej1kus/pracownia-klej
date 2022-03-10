import React, {Component} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { AddProducts } from "./components/AddProducts";
import { ProductsContextProvider } from "./global/ProductsContext";




class App extends Component {
    render() {
        return (
            <ProductsContextProvider>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/add-products' component={AddProducts} />
                    </Switch>
                </BrowserRouter>
            </ProductsContextProvider>
        );
    }
}

export default App;