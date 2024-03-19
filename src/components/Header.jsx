const Header = () => {
  return (
    <>
      <div className="flex justify-between bg-cyan-400">
        <img
          src="https://image.similarpng.com/very-thumbnail/2020/06/Restaurant-logo-with-chef-drawing-template-on-transparent-background-PNG.png"
          alt=""
          className="w-20"
        />
        <div>
          <ul className="flex  text-lg my-2 p-2">
            <li className="mr-4">Home </li>
            <li className="mr-4">About Us </li>
            <li className="mr-4">Cart</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
