# Online shop "Pracownia Klej"
Final project after JavaScript bootcamp in Coders Lab. 

The application is available on the Firebase server: https://pracownia-klej.web.app/

## FEATURES:

* Ability to register/log in to the site. Data of registered users is stored in Firebase Authentication, as well as Cloud Firestore Database.
* The header will update after logging in. The user's name, basket with the number of products and the "Log out" button will be shown.
* Add products form:
  * Validation, 
  * Data saved in Cloud Firestore Database, 
  * Product images will be stored in Firebase Storage.
* All products:
  * Products data retrieved from Cloud Firestore Database,
  * Users can add the products to the cart. After adding the same product a message should appear informing that the product is already in the cart (React Toastify has been used).
* Shopping cart:
  * There is a window with a list of products in the cart, 
  * We can add/subtract products in the cart as well as remove them, 
  * The value of an order updates automatically.

## TECHNOLOGIES AND TOOLS:

* React.js with Hooks, 
* Routing (React Router), 
* React Bootstrap (eg. carousel), 
* React Toastify, 
* Sass, 
* React Context API, 
* Firebase.