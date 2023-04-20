import {initializeApp } from "firebase/app"
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { v4 as uuidv4 } from 'uuid'

const firebaseConfig = {
  apiKey: "AIzaSyCIg627DCrf0QJC-mRVoZYg941OBQoBLf0",
  authDomain: "changarrito-d9691.firebaseapp.com",
  projectId: "changarrito-d9691",
  storageBucket: "changarrito-d9691.appspot.com",
  messagingSenderId: "276721098677",
  appId: "1:276721098677:web:f04560dd9d852cc16a03fc",
  measurementId: "G-NG2NY26H8J"
}
let app

// Initialize Firebase
if(!app){
  app = initializeApp(firebaseConfig)
}

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app)


export async function uploadfile(folderName,file, Name) {
  const metadata = {
    contentType: 'image/jpeg'
  }
  // Generate a unique file name with UUID
  const fileName = `${folderName}/${uuidv4()}-${Name}`
  // Create a storage reference from our storage service
  const storageRef = ref(storage,fileName)

  // 'file' comes from the Blob or File API
  try {
    const uploadTask = uploadBytesResumable(storageRef, file, metadata)
    uploadTask.on('state_changed',
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      },
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case 'storage/unauthorized':
            console.error(`Error al subir imagen a Firebase Storage: ${err}`);
            break;
          case 'storage/canceled':
            // User canceled the upload
            console.error(`Error al subir imagen a Firebase Storage: ${err}`);
            url = null
            break;
          case 'storage/unknown':
            console.error(`Error al subir imagen a Firebase Storage: ${err}`);
            url = null
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL)
          return downloadURL
        })
      }
    )
  } catch (error) {
    console.error(`Error al subir imagen a Firebase Storage: ${error}`);
    return null;
  }
}

export async function uploadImageAndGetUrl(folderName,file, Name) {
  try {
    const timestamp = Date.now()
    const newImageRef = ref(getStorage(app), `${folderName}/${timestamp}${Name}`)
    const fileSnapshot = await uploadBytesResumable(newImageRef, file)
    const publicImageUrl = await getDownloadURL(newImageRef)
    return publicImageUrl
  } catch (error) {
    console.error(error.message)
    return null
  }
}