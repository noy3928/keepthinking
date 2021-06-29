import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB0OrYjKKKBnK8nVM2naxnwsC7pu8QPLww",
  authDomain: "my-real-dic.firebaseapp.com",
  projectId: "my-real-dic",
  storageBucket: "my-real-dic.appspot.com",
  messagingSenderId: "214403808493",
  appId: "1:214403808493:web:c559ee7fcb592836cd20e4",
  measurementId: "G-0WCW4GXCY2",
};

firebase.initializeApp(firebaseConfig);

//인스턴스ㅡ 생성
const firestore = firebase.firestore();

export { firestore };
