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
    <h3>About!</h3>
    <p>This the Weather app working Perfectly ! : ) </p>
    </div>
   );

}
module.exports = About;
