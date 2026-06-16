import { Link } from "react-router-dom";

function Copyright() {
  return (
    <div className="font-medium text-gray-300">
      <p className=" ">
        All Rights Reserved | &copy; <span>{new Date().getFullYear()}</span> Suman Dash
      </p>
      <p>
        Designed by{" "}
        <Link
          to="https://www.linkedin.com/in/suman-dash-219163319"
          target="_blank"
          className="focus text-red"
        >
          Suman Dash
        </Link>
      </p>
    </div>
  );
}

export default Copyright;
