var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function(){
//     var {location, temp} = this.props;
//     return(
//       <div>
//         <h4>It's {temp} Degree Celcius in {location}</h4>
//       </div>
//     );
//   }
// });

var WeatherMessage =({location, temp}) =>
{
  return(
    <div>
      <h3 className="text-center">It's {temp} Degree Celcius in {location}</h3>
    </div>
  );
}

module.exports = WeatherMessage;
