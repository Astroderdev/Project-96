// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDKG_V5s6lKeKGJBY6_wkZCRi8Pzofqo7Y",
      authDomain: "kwitter-db-dcebb.firebaseapp.com",
      databaseURL: "https://kwitter-db-dcebb-default-rtdb.firebaseio.com",
      projectId: "kwitter-db-dcebb",
      storageBucket: "kwitter-db-dcebb.appspot.com",
      messagingSenderId: "398640505954",
      appId: "1:398640505954:web:8d64ca11c43c8e5822dd3b"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
    }
