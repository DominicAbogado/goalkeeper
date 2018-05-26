$(document).ready(function() {
  //Initializing Firebase

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDlXFcyJFtHAFEEPeOi784ynHZDZygZSmU",
    authDomain: "goalkeeper-a957b.firebaseapp.com",
    databaseURL: "https://goalkeeper-a957b.firebaseio.com",
    projectId: "goalkeeper-a957b",
    storageBucket: "goalkeeper-a957b.appspot.com",
    messagingSenderId: "8021530840"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  database.ref().on(
    "value",
    function(snapshot) {
      console.log(snapshot.val());
    },
    function(errorObject) {
      console.log("The read failed: " + errorObject.code);
    }
  );

  $("#test").on("click", function() {
    console.log("hello");
    $("#testHead").text("TESTING THIS");
  });
});
