$(document).ready(function() {
  //API Key for BBC Sports
  var API = "a400fd29bc184a2f843b36f9da552975";
  var keyword = "";

  // Display BBC API  https://newsapi.org/v2/top-headlines?

  // Youtube API Key AIzaSyArIT9S3sFiCuItne3n3aBYgObMvXnSQaA


  //CLICK FUNCTION TO SHOW THE NEWS AND VIDEOS

  //On click of team button, the 
  $(".list-group").on("click", ".list-group-item-action", function() {
    event.preventDefault();
    var searchTerm = keyword + " world cup 2018";
    getRequest(searchTerm);
    console.log(searchTerm);
  });

  function getRequest(searchTerm) {
    url = "https://www.googleapis.com/youtube/v3/search";
    var params = {
      maxResults: 4,
      part: "snippet",
      key: "AIzaSyArIT9S3sFiCuItne3n3aBYgObMvXnSQaA",
      q: searchTerm
    };

    $.getJSON(url, params, function(searchTerm) {
      showResults(searchTerm);
    });
  }
  function showResults(results) {
    var html = "";
    var entries = results.items;

    $.each(entries, function(index, value) {
      var title = value.snippet.title;
      var thumbnail = value.snippet.thumbnails.default.url;
      var vidLink =  "https://www.youtube.com/embed/" +
      value.id.videoId;
      html +=
        "<iframe style='width:50%;' width='auto' height='auto' src=" +
       vidLink +
        ">" +
        "</iframe>";
    });

    $("#newsVideo").empty();
    $("#newsVideo").html(html);
  }

  //Youtube API
  // function handleAPILoaded() {
  //   $("#search-button").attr("disabled", false);
  // }

  // // Search for a specified string.
  // function search() {
  //   var q = $("#query").val();
  //   var request = gapi.client.youtube.search.list({
  //     q: q,
  //     part: "snippet"
  //   });

  //   request.execute(function(response) {
  //     var str = JSON.stringify(response.result);
  //     $("#newsVideo").html("<pre>" + str + "</pre>");
  //   });
  // }

  function displayNews() {
    var url =
      "https://newsapi.org/v2/everything?sources=bbc-news&q=" +
      keyword +
      "+world" +
      "+cup" +
      "+2018" +
      "&pageSize=1" +
      "&apiKey=" +
      API;
    $.ajax({
      url: url,
      method: "GET"
    }).then(function(response) {
      console.log(response);
      //TOTO::Ensure we have > 0 articles before messing with the DOM
      $("#news").empty();
      $("#newsPic").empty();
      $("#newsClip").empty();
      $("#newsUrl").empty();
      $("#news").append(response.articles[0].title);
      $("#newsPic").append(
        "<img src=" +
          response.articles[0].urlToImage +
          " style='width:100%;'>"
      );
      $("#newsClip").append(response.articles[0].description);
      $("#newsUrl").append(
        "<a href=" +
          response.articles[0].url +
          ">" +
          "Click here for Article!" +
          "</a>"
      );
    });
  }

  $(".list-group").on("click", ".list-group-item-action", function() {
    keyword = "";
    keyword = this.id;
    console.log(keyword);
    displayNews();
    var searchTerm = keyword + " world cup 2018";
    getRequest(searchTerm);
  });

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
    
    // Output the result in an element with id="demo"
    
    document.getElementById("worldCupTime").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("worldCupTime").innerHTML = "WORLD CUP ALREADY STARTED";
    }
}, 1000);

});
