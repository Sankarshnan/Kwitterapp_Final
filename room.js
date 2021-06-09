
 


var firebaseConfig = {
    apiKey: "AIzaSyCDmmN702bKmwuqQIx6R2qj9boV8kUsymo",
    authDomain: "kwitter-web-page-58c31.firebaseapp.com",
    databaseURL: "https://kwitter-web-page-58c31-default-rtdb.firebaseio.com",
    projectId: "kwitter-web-page-58c31",
    storageBucket: "kwitter-web-page-58c31.appspot.com",
    messagingSenderId: "47344169659",
    appId: "1:47344169659:web:28f1a479d3a9acc51c2f9e",
    measurementId: "G-5G29DJJH8C"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  document.getElementById("display_name").innerHTML="Welcome to Kwitter, " + user_name + "!";
  
  function addRoom()
  {
        Room_name = document.getElementById("room_name").value
  
        firebase.database().ref("/").child(Room_name).update({
              purpose : "adding room name"
        });
  
        localStorage.setItem("room_name", Room_name)
  
        window.location = "chat.html";;
  }
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
         row = "<div class= 'room_name' id= "+Room_names+" onclick= 'redrictToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
         document.getElementById("output").innerHTML += row;      
        });
      });
  }
  
  getData();
  
  function redrictToRoomName(name)
  {
        console.log(name);
        localStorage.setItem("room_name" , name);
        window.location = "chat.html";
  }
  
  function logout()
  {
      localStorage.removeItem("user_name");
      localStorage.removeItem("password");
      window.location = "index.html"
  }
  