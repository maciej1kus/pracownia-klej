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
    const [successMsg, setSuccessMsg] = useState('');

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
                    setSuccessMsg('Produkt dodany do bazy');
                    setProductName('');
                    setProductPrice(0);
                    setProductCategory('');
                    setProductImg('');
                    setError('');
                    document.getElementById('file').value = '';
                    setTimeout(() => {
                        setSuccessMsg('');
                    },3000)
                }).catch(err => setError(err.message));
            })
        })
    }

    return (
        <div className="container">
            <br/>
            <h2>Dodaj produkt do bazy</h2>
            <hr/>
            {successMsg&&<>
                <div className='success-msg'>{successMsg}</div>
                <br/>
            </>}
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
                <select className="form-control" required
                        onChange={(e) => setProductCategory(e.target.value)} value={productCategory}>
                    <option value="">Wybierz...</option>
                    <option>Do jedzenia</option>
                    <option>Do picia</option>
                    <option>Artykuły ozdobne</option>
                    <option>Do relaksu</option>
                    <option>Warsztaty</option>
                </select>
                <br/>
                <br/>
                <label htmlFor="product-img">Zdjęcie produktu:</label>
                <br/>
                <input type="file" className="form-control" required onChange={productImgHandler} id="file" />
                <br/>
                <button className="btn btn-success btn-md mybtn">Dodaj</button>
            </form>
            {error && <span>{error}</span>}
        </div>
    );
}

