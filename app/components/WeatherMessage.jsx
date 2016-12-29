var React = require('react');

var WeatherMessage =({location, temp}) =>
{
  return(
    <div>
      <h3 className="text-center">It's {temp} Degree Celcius in {location}</h3>
    </div>
  );
}

module.exports = WeatherMessage;
