// Docs at http://simpleweatherjs.com
$(document).ready(function() {
  $.simpleWeather({
    location: 'London',
    woeid: '',
    unit: 'c',
    success: function(weather) {
      html = '<p>'+weather.temp+'&deg;'+weather.units.temp+' In London'+'</p>';

      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
});
