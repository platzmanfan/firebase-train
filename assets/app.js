var firebaseConfig = {
    apiKey: "AIzaSyCxjF6EmgRrGstpcjmnlTUqxghbTHS9HXA",
    authDomain: "myapp-6990c.firebaseapp.com",
    databaseURL: "https://myapp-6990c.firebaseio.com",
    projectId: "myapp-6990c",
    storageBucket: "myapp-6990c.appspot.com",
    messagingSenderId: "457504841730",
    appId: "1:457504841730:web:5e1e5afc2aafbf98a7471b",
    measurementId: "G-TN0Y4GLYTC"
  };

  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();


  var train_name = "";
  var destination;
  var train_time = 0;
  var frequency = 0;
  var arrival = "";
  var minutesAway = 0;
  
  // current date + time
  var date = moment()
  console.log(date);

    

  


  $(document).on("click", "#search", function(event) {
    event.preventDefault();

      train_name = $("#add-train").val().trim();
      destination = $("#destination").val().trim();
      train_time = $("#train-time").val().trim();
      frequency = $("#freq-min").val().trim();

      database.ref().push({

        train: train_name,
        destination: destination,
        train_time: train_time,
        frequency: frequency,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
      });
      
    });
    

    database.ref().on("child_added", function(childSnapshot) {

        
        
        //  var a = moment()
        //  var b = moment(train_time)
        //  var c = moment(frequency)
        //  var nextTrain = b;

        

        //     nextTrain = nextTrain.format("HH:mm");

        //     var minAway = nextTrain.diff(a ,"minutes");
        //     minAway = minAway.format("mm");
        

       
          $("#trains").append( "<br> <br>" + childSnapshot.val().train)
          $("#destination").append("<br> <br>" + childSnapshot.val().destination)
          $("#frequency").append("<br> <br>" + childSnapshot.val().frequency)
          $("#arrival").append("<br><br>" +childSnapshot.val().nextTrain)
          $("#minutes").append("<br><br>" +childSnapshot.val().minAway)
         
  
        
      }, function(errorObject) {
        console.log("Errors handled: " + errorObject.code);
      });

    