import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="flex justify-between bg-cyan-400">
        <img src="../public/vite.svg" alt="" className="w-16" />
        <div>
          <ul className="flex  text-lg my-2 p-2">
            <Link to={"/"}>
              {" "}
              <li className="mr-4">Home </li>
            </Link>
            <Link to={"/about"}>
              <li className="mr-4">About Us </li>
            </Link>
            <Link to={"/cart"}>
              <li className="mr-4">Cart</li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
