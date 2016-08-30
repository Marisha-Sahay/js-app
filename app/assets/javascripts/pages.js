function changeText(){
  setTimeout(function() {
    document.getElementById('first').style.color = "red";
    document.getElementById('first').style.fontSize = "2.0em"
    setTimeout(function() {
      document.getElementById('second').style.background = "pink";
      setTimeout(function() {
        document.getElementById('third').style.fontStyle = "italic";
        setTimeout(function() {
          document.getElementById('four').style.textDecoration = "underline overline";
        },1000);
      },1000);
    }, 1000);
  },1000);
}


function getParkingDetails() {
    var divParkingDetails = document.getElementById("details");
    divParkingDetails.innerHTML = "Loading...";


    $.get('https://data.sfgov.org/resource/2iym-9kfb.json', function(response) {
      var htmlString = "<div onclick='colorParking(this)'>" 
      htmlString += "<table class ='table'><tr><th>Cap Color</th><th>On Street or Off street</th><th>Location</th></tr>";
      for (var i = 0; i < response.length; i++) {
        var parking = response[i];
        htmlString += '<tr>';
        htmlString += '<td>' + parking.cap_color + '</td>';
        htmlString += '<td>' + parking.on_off_str + '</td>';
        htmlString += '<td>' + parking.location.coordinates + '</td>';
        htmlString += '</tr>';
      }
      htmlString += "</div>"
      divParkingDetails.innerHTML = htmlString;
    });
  }

function colorParking(parking) {
  parking.style.background = "pink";
}