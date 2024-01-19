import { Link } from "react-router-dom";

const NotFound = () => {
    return (  
      <div className="not-found">
        <h2>Sorry</h2>
        <p>Di nag eexist tong page na to haha gagi...</p>
        <Link to='/'>Go back to Homepage</Link>
      </div>
    );
}
 
export default NotFound;