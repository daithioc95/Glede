// Map initialization
// Source1: https://developers.google.com/maps/documentation/javascript/maptypes
// Source2: https://stackoverflow.com/questions/3059044/google-maps-js-api-v3-simple-multiple-marker-example
/* jshint esversion: 8, jquery: true */

function initMap() {
    // Array of locations information
    var locations = [
        ['<button class = "map-button" onclick="onAttractionClicked(1)">Oslo Raw Frogner</button>', 59.9174765, 10.717384],
        ['<button class = "map-button" onclick="onAttractionClicked(2)">Oslo Raw Adamstuen</button>', 59.93295449999999, 10.7344495],
        ['<button class = "map-button" onclick="onAttractionClicked(3)">Olio Beauty Vika</button>', 59.9142004, 10.7247821],
        ['<button class = "map-button" onclick="onAttractionClicked(4)">Olio Beauty Majorstuen</button>', 59.9282955, 10.7186062]
    ];

    // Setting map environment
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: new google.maps.LatLng(59.9174765, 10.717384),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    // implementing markers variables
    var infowindow = new google.maps.InfoWindow();
    var marker;
    const Icon = "http://maps.google.com/mapfiles/ms/icons/orange.png";
    for (let i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map,
            icon: Icon,
        });
        // display info when marker clicked
        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
            };
        })(marker, i));
    }

    // Attraction  toggle function

}
function onAttractionClicked(itemNumber) {
    $(".location-info").css("display", "none");

    const attractionIntroId = `#attraction-intro-${itemNumber}`;

    $(attractionIntroId).toggle();
}