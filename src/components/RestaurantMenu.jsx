import { useEffect, useState } from "react";
import MenuList from "./MenuList";

const RestaurantMenu = () => {
  const [restaurantMenu, setRestaurantMenu] = useState();
  const [restaruantDetails, setRestaurantDetails] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8466937&lng=80.94616599999999&restaurantId=64649&catalog_qa=undefined&submitAction=ENTER"
    );
    const jsonData = await data.json();
    setRestaurantMenu(
      jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR
    );
    setRestaurantDetails(jsonData?.data?.cards[0]?.card?.card?.info);
    console.log(
      jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards
    );
  };

  if (!restaurantMenu || !restaruantDetails) {
    return <h1>No items</h1>;
  }
  const { name, avgRating, costForTwoMessage } = restaruantDetails;
  return (
    <div>
      <div>
        <div className="text-center mt-4">
          <h1 className="font-bold text-lg">{name}</h1>
          <h2 className="font-semibold">{costForTwoMessage}</h2>
          <h5>⭐ {avgRating}</h5>
        </div>
      </div>
      <div>
        {/* {restaurantMenu.map((item) => {
          <MenuList key={item?.title} data={item} />;
        })} */}
      </div>
    </div>
  );
};

export default RestaurantMenu;
