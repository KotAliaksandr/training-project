import { FIREBASE_CONFIG, databaseURL, authUrl } from "./api-config";
import firebase from "firebase/app";

export const initApiFirebase = () => {
    firebase.initializeApp(FIREBASE_CONFIG);
};

export const createUserAnsver = answerUser => {
    const {resultUser, nameUser} = answerUser;
   fetch(
       `${databaseURL}/ansvers.json`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                resultUser,
                nameUser
            }) 
        }
    )
    .then(response => response.json())
    .then(result => console.log(result)); 
};
