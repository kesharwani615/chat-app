import { useEffect, useState } from "react";
import './App.css'
import { getDatabase } from "firebase/database";
import { ref, push, set,onChildAdded } from "firebase/database";


function App() {
const [name,setName]=useState(null);
const [message,setMessage]=useState([]);
const [chat,setChat]=useState();

const db = getDatabase();
const chatRef = ref(db, 'chat');

useEffect(()=>{
  onChildAdded(chatRef, (data) => {
  console.table(data.val());
  setMessage(message=>[...message,data.val()]);
  });
},[])

const handleName=()=>{
// Create a new post reference with an auto-generated id
const db = getDatabase();
const chatRef = ref(db, 'chat');
const newchatRef = push(chatRef);
set(newchatRef, {
  user:name,message:chat
});

  // const temp=[...message];
  // temp.push({user:name,message:chat});
  // setMessage(temp);
  setChat('')
}

function handleSetName(e){
  const temp=e.trim();
  temp!==''?setName(e):alert('please enter name!');
}
  return (
    <div className="App">
     {name===null?
     <>
     <h1>Please Enter your name:</h1>
     <input type="text" value={name} onBlur={(e)=>handleSetName((e.target.value))}/>
     </>   
     :<div>
     <h1>Name:{name}</h1>
     {message.map((msg,index)=>{
      return(
      <div key={index} className={`chat-container ${msg.user===name?'me':''}`}>
      <p className="chat-box">
      <strong>{msg.user}:</strong>
      <span>{msg.message}</span>  
      </p> 
      </div>
      )
    })
  }

  <div className="btm">
    <input type="text" value={chat} onInput={(e)=>setChat(e.target.value)} placeholder="Please enter your message!"/>
    <button className="button" onClick={handleName}>Send</button>
    </div>
  </div>}
    </div>
  );
}

export default App;
