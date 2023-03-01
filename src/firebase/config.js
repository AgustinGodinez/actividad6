import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'
import { v4 } from "uuid";

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

export async function uploadfile(file, name) {
  let id = v4()
  const storageRef = ref(storage, `categorias/${id}${name}`)
  await uploadBytes(storageRef, file)
  const url = await getDownloadURL(storageRef)
  return url
}