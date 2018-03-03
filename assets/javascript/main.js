//  1) Initialize Firebase

    
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

var currentTime= moment();

console.log(currentTime);

var database = firebase.database();


$("#add-train").on("submit", function(event){
    event.preventDefault();
    trainName= $("#train-name").val().trim();
    destination= $("#destination").val().trim();
    firstTrain= $("#first-train").val().trim();
    frequency= $("#frequency").val().trim();


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

    	//First time
	var firstTimeConverted = moment(firstTrain, "hh:mm").subtract(1, "years");
	console.log(firstTimeConverted);

	// Current time
	var currentTime = moment();
	console.log("CURRENT TIME:" + moment(currentTime).format("HH:mm"));

	// Difference between times
	var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
	console.log("DIFFERENCE IN TIME: " + diffTime);

	// Time apart (remainder)
	var tRemainder = diffTime % frequency;
	console.log(tRemainder);

	// Mins until train
	var tMinutesTillTrain = frequency - tRemainder;
	console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

	// Next train
	var nextTrain = moment().add(tMinutesTillTrain, "minutes").format("hh:mm");
	console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));
    

    $("#train-table").append( 
    "<tr><td>" + snapshot.val().trainName + "</td><td>" 
    + snapshot.val().destination + "</td><td>" 
    + snapshot.val().frequency + "</td><td>" 
    + nextTrain + "</td><td>" 
    + tMinutesTillTrain + "</td></tr>"
);


},function(errorObject){
    console.log ("errors handled: "+ errorObject.code)
});

