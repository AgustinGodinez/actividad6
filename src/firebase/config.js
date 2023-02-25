import { initializeApp } from "firebase/app";
import {getStorage, ref,uploadBytes } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDj0kJpzaZB4Jm0LZxhL5oMuMCRnyryd-c",
  authDomain: "changarrito-49b21.firebaseapp.com",
  projectId: "changarrito-49b21",
  storageBucket: "changarrito-49b21.appspot.com",
  messagingSenderId: "599267689486",
  appId: "1:599267689486:web:ddc1dfcf61b03c6ec8a85f"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export function uploadfile (file, name){
    const storageRef = ref(storage,`categorias/${name}`)
    uploadBytes(storageRef,file).then(snapshot =>{
        console.log(snapshot);
    })
}