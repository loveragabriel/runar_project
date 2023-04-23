import { collection, getDocs, getFirestore, doc, getDoc, query, where, addDoc } from '@firebase/firestore';
import { initializeApp } from "firebase/app"; 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHQXMW4X9kUbW7pr5Jony8MexOlYTmxDo",
  authDomain: "runar-7b15f.firebaseapp.com",
  projectId: "runar-7b15f",
  storageBucket: "runar-7b15f.appspot.com",
  messagingSenderId: "1045711106270",
  appId: "1:1045711106270:web:7de53334bc39fe1fc0524f"
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

export async function getSingleItem(idURL){
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
    const q = query(docCategory, where ('category', '==' ,categoryItems) )
    const categorySnap = await getDocs(q);
    const categoryList = categorySnap.docs;
    const categoryData = categoryList.map((doc)=>{
        return{id: doc.id, ...doc.data()}
    })
   return categoryData
  }

  export async function createOrder(order){
    const collectionOrders = collection(db, 'orders')
    const response =  await  addDoc(collectionOrders, order); 
    return (response.id);
  }


// const querySnapshot = await getDocs(q);
// querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   console.log(doc.id, " => ", doc.data());
// });