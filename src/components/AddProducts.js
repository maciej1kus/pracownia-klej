import React, { useState } from "react";
import { storage, db } from "../config/Config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";

export const AddProducts = () => {

    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState(0);
    const [productCategory, setProductCategory] = useState('');
    const [productImg, setProductImg] = useState(null);
    const [error, setError] = useState('');

    const types = ['image/png', 'image/jpeg']; //akceptowane rozszerzenia obrazów

    //product image handler
    const productImgHandler = (e) => {
        let selectedFile = e.target.files[0];
        if (selectedFile && types.includes(selectedFile.type)) {
            setProductImg(selectedFile);
            setError('');
        }
        else {
            setProductImg(null);
            setError('Załącz obrazek o odpowiednim rozszerzeniu (.png lub .jpeg)')
        }
    }

    // event dotyczący dodawania produktów do bazy
    const addProduct = (e) => {
        e.preventDefault();

        // dodawanie zdjęcia produktu do Firebase Storage
        const storageRef = ref(storage, `/product-images/${productImg.name}`);
        const uploadTask = uploadBytesResumable(storageRef, productImg);

        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload ukończony w ' + progress + '%');
            }, err => {
                setError(err.message)
            }, () => {
            // wygenerowanie adresu url obrazka i dodanie obiektu do bazy wraz z linkiem do obrazka
            getDownloadURL(uploadTask.snapshot.ref).then( async url => {
                console.log('Zdjęcie dostępne tutaj: ', url);
                await addDoc(collection(db, "Products"), {
                    ProductName: productName,
                    ProductPrice: Number(productPrice),
                    ProductCategory: productCategory,
                    ProductImg: url
                }).then(() => {
                    setProductName('');
                    setProductPrice(0);
                    setProductCategory('');
                    setProductImg('');
                    setError('');
                    document.getElementById('file').value = '';
                }).catch(err => setError(err.message));
            })
        })
    }

    return (
        <div className="container">
            <br/>
            <h2>Dodaj produkt do bazy</h2>
            <hr/>
            <form autoComplete="off" className="form-group" onSubmit={addProduct}>
                <label htmlFor="product-name">Nazwa produktu:</label>
                <br/>
                <input type="text" className="form-control" required
                       onChange={(e) => setProductName(e.target.value)} value={productName} />
                <br/>
                <label htmlFor="product-price">Cena produktu:</label>
                <br/>
                <input
                    type="number" className="form-control" required
                    onChange={(e) => setProductPrice(e.target.value)} value={productPrice} />
                <br/>
                <label htmlFor="product-category">Kategoria produktu:</label>
                <br/>
                <select onChange={(e) => setProductCategory(e.target.value)} value={productCategory}>
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
                <input type="file" className="form-control" onChange={productImgHandler} id="file" />
                <br/>
                <button className="btn btn-success btn-md mybtn">Dodaj</button>
            </form>
            {error && <span>{error}</span>}
        </div>
    );
}

