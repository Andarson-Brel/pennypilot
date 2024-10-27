import { Link } from "react-router-dom";

const Unauthorized = () => {
  return (
    <div>
      <h1>Unauthorized Access</h1>
      <p>You do not have the necessary permissions to access this page.</p>

      <div className=""></div>
      <Link to="/auth">Login</Link>
    </div>
  );
};

export default Unauthorized;
