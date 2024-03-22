import { useEffect, useState } from "react";
import MenuList from "./MenuList";

const RestaurantMenu = () => {
  const [restaruantDetails, setRestaurantDetails] = useState();
  const [categories, setCategories] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8466937&lng=80.94616599999999&restaurantId=416332"
    );
    const jsonData = await data.json();

    setRestaurantDetails(jsonData?.data?.cards[0]?.card?.card?.info);

    setCategories(
      jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (item) => {
          return (
            item?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
          );
        }
      )
    );
  };

  if (!restaruantDetails) {
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
      <div className="m-4">
        {categories.map((item) => {
          return <MenuList key={item?.card?.card?.type} data={item} />;
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
