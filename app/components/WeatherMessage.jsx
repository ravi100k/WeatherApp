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
      <h4>It's {temp} Degree Celcius in {location}</h4>
    </div>
  );
}

module.exports = WeatherMessage;
