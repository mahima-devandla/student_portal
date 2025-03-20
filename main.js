
var firebaseConfig = {
    apiKey: "AIzaSyAYc98e9qgSG49kBVzMqgFlBizLPy2jnVo",
    authDomain: "student-4d3e5.firebaseapp.com",
    projectId: "student-4d3e5",
    storageBucket: "student-4d3e5.appspot.com",
    messagingSenderId: "162576211746",
    appId: "1:162576211746:web:91442ab05116c7f731cf7b",
    measurementId: "G-Y1PQ43S123"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  // reference messages collection
  var messagesRef=firebase.database().ref('messages');
  
//
document.getElementById('submitform').addEventListener('submit',submitForm);

function submitForm(e){
      e.preventDefault();

var name=getVal('name');
var email=getVal('email');
saveMessages(name, email);

console.log(name);
console.log(email);
}
function getVal(id){
return document.getElementById(id).value;
}
// to save mess to firebase
function saveMessages(name,email){
    var newmessageRef=messagesRef.push();
    newmessageRef.set({name:name,
    email:email});
}