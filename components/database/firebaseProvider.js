// import {
//     getAuth,
//     onAuthStateChanged,
//     createUserWithEmailAndPassword,
//     signInWithEmailAndPassword
//   } from 'firebase/auth';
 
//   import {getFirestore, doc, setDoc,doc, getDoc } from "firebase/firestore";


//   const auth = getAuth();
//   const db = getFirestore(app);
// // Listen for authentication state to change.
// onAuthStateChanged(auth, user => {
//   if (user != null) {
//     console.log('We are authenticated now!');
//   }

//   // Do other things
// });
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });
//   signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });
//   // Add a new document in collection "cities"
//   await setDoc(doc(db, "cities", "LA"), {
//     name: "Los Angeles",
//     state: "CA",
//     country: "USA"
//   });


// const docRef = doc(db, "cities", "SF");
// const docSnap = await getDoc(docRef);

// if (docSnap.exists()) {
//   console.log("Document data:", docSnap.data());
// } else {
//   // doc.data() will be undefined in this case
//   console.log("No such document!");
// }