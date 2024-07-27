import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDTEEAU2QIKG04gGZnEzEPw5bhE-c21UMg",
  authDomain: "pdf-chat-demo.firebaseapp.com",
  projectId: "pdf-chat-demo",
  storageBucket: "pdf-chat-demo.appspot.com",
  messagingSenderId: "535255115423",
  appId: "1:535255115423:web:4c03721a067898726164aa",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
