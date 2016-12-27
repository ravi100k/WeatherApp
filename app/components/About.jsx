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
    <h3>About Component !</h3>
  );

}
module.exports = About;
