import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyCLlDpV5jmbtMOpDYhR-adYknI1XxkE6TU",
	authDomain: "omnibiz-clone.firebaseapp.com",
	projectId: "omnibiz-clone",
	storageBucket: "omnibiz-clone.appspot.com",
	messagingSenderId: "338122054132",
	appId: "1:338122054132:web:8adf1c6e3beb730b2b41a1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export default auth;
