import React, {Component, createContext} from "react";
import { db } from "../config/Config";
import { collection, query, onSnapshot } from "firebase/firestore";

export const ProductsContext = createContext(undefined);

export class ProductsContextProvider extends Component {

    state = {
        products: []
    }

    componentDidMount() {

        const prevProducts = this.state.products;

        const q = query(collection(db, "Products"));
        onSnapshot(q, (snapshot) => {
            snapshot.docChanges().forEach((change) => {
                if (change.type === 'added') {
                    prevProducts.push({
                        ProductID: change.doc.id,
                        ProductName: change.doc.data().ProductName,
                        ProductPrice: change.doc.data().ProductPrice,
                        ProductImg: change.doc.data().ProductImg
                    })
                }
                this.setState({
                    products: prevProducts
                })
            })
        })

    }

    render() {
        return (
            <ProductsContext.Provider value={{ products: [...this.state.products] }}>
                {this.props.children}
            </ProductsContext.Provider>
        );
    }
}

