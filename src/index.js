import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSzBmq8KheBXxJiFEDHD9OYkDQ3UvmHkU",
  authDomain: "chat-app-chatroom.firebaseapp.com",
  databaseURL: "https://chat-app-chatroom-default-rtdb.firebaseio.com",
  projectId: "chat-app-chatroom",
  storageBucket: "chat-app-chatroom.appspot.com",
  messagingSenderId: "666736398635",
  appId: "1:666736398635:web:add78aa09ea48df79e356e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
