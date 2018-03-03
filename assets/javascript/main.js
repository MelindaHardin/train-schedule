//  Initialize Firebase
//                    Make sure to match the configuration to the script version number in the HTML
//                      (Ex. 3.0 != 3.7.0)        


//  var config = { 
    
    var config = {
        apiKey: "AIzaSyBQbEHL2kTmdntFzTuQLu45CCpl34-ko_c",
        authDomain: "first-9e624.firebaseapp.com",
        databaseURL: "https://first-9e624.firebaseio.com",
        projectId: "first-9e624",
        storageBucket: "first-9e624.appspot.com",
        messagingSenderId: "532184669661"
      };
      firebase.initializeApp(config);

      var database=firebase.database();
  
//  Create a variable to reference the database.
var trainName= "";
var destination="";
var firstTrain= "";
var frequency= "";
var nextArrival="";
var minutesAway="";


//var database = firebase.database();


$("#add-train").on("submit", function(event){
    event.preventDefault();
    trainName= $("#train-name").val().trim();
    destination= $("#destination").val().trim();
    firstTrain= $("#first-train").val().trim();
    frequency= $("#frequency").val().trim();
    nextArrival= //moment.js
    minutesAway= //moment.js

    database.ref().push({
        trainName: trainName,
        destination: destination,
        firstTrain: firstTrain,
        frequency: frequency
        
      });

});

database.ref().on("child_added", function(snapshot) {
    console.log(snapshot.val());
    console.log(snapshot.val().trainName);
    console.log(snapshot.val().destination);
    console.log(snapshot.val().firstTrain);
    console.log(snapshot.val().frequency);
    

    $("#train-table").append( "<tr><td>" + snapshot.val().trainName + "</td>   <td>" + snapshot.val().destination + "</td>   <td>" + snapshot.val().frequency + "</td>  <td>" + nextArrival + "</td>  <td>" + minutesAway + "</td>s</tr>");


},function(errorObject){
    console.log ("errors handled: "+ errorObject.code)
});


//Moment.JS  console.log (moment().format("DD/MM/YY"))


//datRef.ref().orderByCHild("dateAdded").limitToLast(1).on ("child_added", function (snapshot){
    //grab all the hTML that was added above

    //console 
//})



/*add HTML 
grab id with jQuery
append to table*/