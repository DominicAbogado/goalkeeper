$(document).ready(function() {
  //API Key for BBC Sports
  var API = "a400fd29bc184a2f843b36f9da552975";
  var keyword = "";

  // Display BBC API  https://newsapi.org/v2/top-headlines?

  // Youtube API Key AIzaSyArIT9S3sFiCuItne3n3aBYgObMvXnSQaA

  $("#search-term").submit(function(event) {
    event.preventDefault();
    var searchTerm = $("#query").val();
    getRequest(searchTerm);
  });

  function getRequest(searchTerm) {
    url = "https://www.googleapis.com/youtube/v3/search";
    var params = {
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
      html += "<p>" + title + "</p>";
      html += '<img src="' + thumbnail + '">';
      html += '<a href=' +
      "https://www.youtube.com/watch?v=" + value.id.videoId +
      ">" +
      "Click here for video" +
      "</a>";
      console.log(value)
    });

    $("#search-results").html(html);
  }

  //Youtube API
  function handleAPILoaded() {
    $("#search-button").attr("disabled", false);
  }

  // Search for a specified string.
  function search() {
    var q = $("#query").val();
    var request = gapi.client.youtube.search.list({
      q: q,
      part: "snippet"
    });

    request.execute(function(response) {
      var str = JSON.stringify(response.result);
      $("#search-container").html("<pre>" + str + "</pre>");
    });
  }

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
          " style='width:auto;height:400px;'>"
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
  });
});

//   function displayGifs() {
//     $(".gifsAppearHere").empty();
//     var show = $(this).attr("data-name");
//     var queryURL =
//       "https://api.giphy.com/v1/gifs/search?q=" +
//       show +
//       "&api_key=dc6zaTOxFJmzC&limit=" +
//       limit;
//     //AJAX
//     $.ajax({
//       url: queryURL,
//       method: "GET"
//     }).then(function(response) {
//       var results = response.data;

//       for (var i = 0; i < results.length; i++) {
//         var gifDiv = $('<div class="myGifs">');

//         var rating = results[i].rating;

//         var rat = $('<div class="rating">').text("Rating: " + rating);

//         var gifImage = $("<img>");
//         gifImage.attr("src", results[i].images.fixed_height.url);

//         gifDiv.append(gifImage);
//         gifDiv.append(rat);

//         $(".gifsAppearHere").append(gifDiv);
//         console.log(results[i].images.fixed_height.url);
//       }
//     });
//   }U
("");
