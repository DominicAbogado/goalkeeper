// Set the date we're counting down to
var countDownDate = new Date("Jun 14, 2018 11:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in an element with id="worldCupTime"
  document.getElementById("worldCupTime").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("middle").innerHTML = "WORLD CUP ALREADY STARTED";
    document.getElementById("worldCupTime").innerHTML = null;
  }
}, 1000);

$(document).ready(function () {
  var count = 0;
  var images = ["./assets/images/b2.jpg","./assets/images/background.jpg","./assets/images/b1.jpg"];
  var bigImage = $(".homeBgimg");

  bigImage.css("background-image","url("+images[count]+")");

setInterval(function(){
  bigImage.fadeOut(1000, function(){
    bigImage.css("background-image","url("+images[count++]+")");
    bigImage.fadeIn(1000);
});
if(count ==images.length)
{
  count = 0;
}
},3000);

});


// // Set the date we're counting down to
// var countDownDate = new Date("Jun 14, 2018 11:00:00").getTime();

// // Update the count down every 1 second
// var x = setInterval(function() {

//     // Get todays date and time
//     var now = new Date().getTime();
    
//     // Find the distance between now an the count down date
//     var distance = countDownDate - now;
    
//     // Time calculations for days, hours, minutes and seconds
//     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
//     // Output the result in an element with id="demo"
    
//     document.getElementById("worldCupTime").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    
//     // If the count down is over, write some text 
//     if (distance < 0) {
//         clearInterval(x);
//         document.getElementById("worldCupTime").innerHTML = "WORLD CUP ALREADY STARTED";
//     }
// }, 1000);
