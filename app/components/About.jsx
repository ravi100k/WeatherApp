var React = require('react');

// var About = React.createClass({
//   render: function(){
//     return(
//       <div>
//         <h2>About component!</h2>
//       </div>
//     );
//   }
// }); when we dont have a state to handle then we can write like this , just for presentational component!

var About =(props) => {
  return(
    <div>
      <h2 className="text-center page-title">About!</h2>
      <hr></hr>
      <p>This is a weather application build on React. I have built this for the weather checking </p>
      <p>Here are some of the tools i used:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the javascript framework used.
          </li>
          <li>
            <a href="https://openWeathermap.org">Open Weather Map</a> - I used open weather map to search for weather data by city name.
            </li>
          </ul>
          <h6>Created By Ravi Chaudhary</h6>
        </div>
      );

    }
    module.exports = About;
