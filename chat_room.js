
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
  apiKey: "AIzaSyBT88lohg6S8v1CTr8nB2Fnr7V3hDLmjmw",
  authDomain: "chat-c95a5.firebaseapp.com",
  databaseURL: "https://chat-c95a5-default-rtdb.firebaseio.com",
  projectId: "chat-c95a5",
  storageBucket: "chat-c95a5.appspot.com",
  messagingSenderId: "718917116573",
  appId: "1:718917116573:web:3f2f994c1e62a0f338ea74"
};


  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome"     +user_name +"!";
  function addRoom(){
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "chat_page.html";
  }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name-"+ Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
    document.getElementById("output").innerHTML += row;

    //End code
    });});}
   getData();
   function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location= "chat_page.html"
   }
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name")
    window.location="index.html";
}

