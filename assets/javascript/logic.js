$("#test").on("click", function(event) {
	var apiUrl = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&types=food&name=harbour&key=";
	var keyApi = "AIzaSyDTXYpuRTI8nkmacoKQE0SoTpYxymzwvSk";
	var queryURL = apiUrl + keyApi;
	console.log(queryURL);

	$.ajax({
		url: queryURL,
		method: "GET"
	});
});