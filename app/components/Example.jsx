var React = require('react');
var {Link} = require('react-router');
// var Example = React.createClass({
//   render: function(){
//     return(
//       <div>
//         <h2>Example component!</h2>
//       </div>
//     );
//   }
// });

var Example = (props) =>{
  return(
    <div>
      <h2 className="text-center">Example!</h2>
      <p>Here are some example to try out!</p>
      <ol>
        <li>
          <Link to='/?location=Patna'>Patna, PA</Link>
        </li>
        <li>
          <Link to='/?location=Rio de Janeiro'>Rio de Janeiro, Brazil</Link>
        </li>
      </ol>
    </div>
  );
}
module.exports = Example;
