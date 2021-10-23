import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA9_U94n-lXogV7Us-AeG7gDwsZ8iH-wVc",
  authDomain: "login-helpimal.firebaseapp.com",
  projectId: "login-helpimal",
  storageBucket: "login-helpimal.appspot.com",
  messagingSenderId: "494977364543",
  appId: "1:494977364543:web:30876d912236fa7c34be8a",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;

export const firestore = fire.firestore();


export const createUserDocument = async (user) => {
    if(!user) return;

    const userRef = firestore.doc(`users/${user.uid}`);

    const snapshot = await userRef.get();

    if (!snapshot.exist) {
        const {email} = user;
        

            try {
                userRef.set({
                    
                    email,
                    createdAt: new Date()
                })

            } catch(error){
                console.log("Error in creating user", error);
            }
    }
}