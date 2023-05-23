import { collection, getDocs, getFirestore, doc, getDoc, query, where, addDoc } from '@firebase/firestore';
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAOrMpNWXHDy7uUPPqDi25sL9cQGMeFjFI",
    authDomain: "runar-project-fb583.firebaseapp.com",
    projectId: "runar-project-fb583",
    storageBucket: "runar-project-fb583.appspot.com",
    messagingSenderId: "1009424323106",
    appId: "1:1009424323106:web:25b72d7af3398a0325b07b"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

// get Item List 
export async function getItemsFirebase() {
    const productsList = collection(db, 'firebase_products');
    const productListSnap = await getDocs(productsList);
    const documents = productListSnap.docs;
    const productList = documents.map((product) => {
        return {
            id: product.id, ...product.data()
        }
    });
    return productList;
}

export async function getSingleItem(idURL) {
    const docRef = doc(db, "firebase_products", idURL);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return {
            id: docSnap.id, ...docSnap.data()
        }
    } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
    }

}

const docCategory = collection(db, "firebase_products");

export async function getItemsByCategory(categoryItems) {
    const q = query(docCategory, where('category', '==', categoryItems))
    const categorySnap = await getDocs(q);
    const categoryList = categorySnap.docs;
    const categoryData = categoryList.map((doc) => {
        return { id: doc.id, ...doc.data() }
    })
    return categoryData
}

export async function createOrder(order) {
    const collectionOrders = collection(db, 'orders')
    const response = await addDoc(collectionOrders, order);
    return (response.id);
}


