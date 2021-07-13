import  firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDAVj-PDlicdnVGSukU_xcRjsS9BhG1eAw",
    authDomain: "myproductapp-3d579.firebaseapp.com",
    projectId: "myproductapp-3d579",
    storageBucket: "myproductapp-3d579.appspot.com",
    messagingSenderId: "883863217151",
    appId: "1:883863217151:web:971a6a792f9595150b3dca"
  };

let app

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const db = app.firestore()
const auth = firebase.auth()

export { db, auth }