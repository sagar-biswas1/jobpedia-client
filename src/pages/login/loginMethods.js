import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./login.config";
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export const googleSignIn = () => {
  let provider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      const { displayName, email, photoURL } = result.user;
      let userDetails = {
        name: displayName,
        email: email,
        photo: photoURL,
      };
      return userDetails;
    })
    .catch((error) => {
      const errorMessage = error.message;
      return errorMessage;
    });
};

export const logOut = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      console.log("log out successfully");
    })
    .catch((error) => {
      // An error happened.
    });
};
