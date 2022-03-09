import React from 'react';

export const AddProducts = () => {
    return (
        <div className="container">
            <br/>
            <h2>Dodaj produkt do bazy</h2>
            <hr/>
            <form autoComplete="off" className="form-group">
                <label htmlFor="product-name">Nazwa produktu:</label>
                <br/>
                <input type="text" className="form-control" required />
                <br/>
                <label htmlFor="product-price">Cena produktu:</label>
                <br/>
                <input type="text" className="form-control" required />
                <br/>
                <label htmlFor="product-category">Kategoria produktu:</label>
                <br/>
                <select>
                    <option value="">Wybierz...</option>
                    <option value="Do jedzenia">Do jedzenia</option>
                    <option value="Do picia">Do picia</option>
                    <option value="Artykuły ozdobne">Artykuły ozdobne</option>
                    <option value="Do relaksu">Do relaksu</option>
                    <option value="Warsztaty">Warsztaty</option>
                </select>
                <br/>
                <br/>
                <label htmlFor="product-img">Zdjęcie produktu:</label>
                <br/>
                <input type="file" className="form-control" />
                <br/>
                <button className="btn btn-success btn-md">Dodaj</button>
            </form>
        </div>
    );
}