$(document).ready(function() {
  $("#add-city").click(function() {
    $("#new-cities").append('<div class="new-city">' +
        '<div class="form-group">' +
        '<label for="new-city">Enter the city:</label>' +
        '<input class="form-control new-city" type="text">' +
        '</div>' +
        '<div class="form-group">' +
        '<label for="new-landmark">See anything cool:</label>' +
        '<input class="form-control new-landmark" type="text">' +
        '</div>' +
        '<div class="form-group">' +
        '<label for="new-team">Sport teams</label>' +
        '<input class="form-control new-team" type="text">' +
        '</div>' +
        '</div>');
  });


  $("form#places").submit(function(event){
    event.preventDefault();

    var inputtedNewCountry = $("input#new-country").val();

    var newPlace = { newCountry: inputtedNewCountry, cities: [] };

    $(".new-city").each(function() {
      var inputtedCity = $(this).find("input.new-city").val();
      var inputtedLandmark = $(this).find("input.new-landmark").val();
      var inputtedTeam = $(this).find("input.new-team").val();

      var newCity = { city: inputtedCity, landmark: inputtedLandmark, team: inputtedTeam };
      newPlace.cities.push(newCity);
    });


    $("ul#countries").append("<li><span class='country'>" + newPlace.newCountry + "</span></li>");


    $(".country").last().click(function() {
      alert("clicked");
      $("#show-country").show();
      $("#show-country h2").text(newPlace.newCountry);
      $(".country-display").text(newPlace.newCountry);


      newPlaces.cities.forEach(function(city) {
        $("ul#city-stuff").append("<li>" + city.city + ", " + city.landmark + ", " + city.team + "</li>");
      });
    });


    $("input#new-country").val("");

    $("input.new-city").val("");
    $("input.new-landmark").val("");
    $("input.new-team").val("");

  });


});
