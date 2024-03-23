import { useEffect, useState } from "react";
import MenuList from "./MenuList";
import { useParams } from "react-router-dom";
import { RESTAURANT_MENU_API } from "../utils/constant";

const RestaurantMenu = () => {
  const [restaruantDetails, setRestaurantDetails] = useState();
  const [categories, setCategories] = useState();
  const [showIndex, setShowIndex] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);
  const resId = useParams();
  console.log(resId);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8466937&lng=80.94616599999999&restaurantId=549461"
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
        {categories.map((item, index) => {
          return (
            <MenuList
              key={item?.card?.card?.title}
              data={item}
              showItems={index === showIndex ? true : false}
              setShowIndex={() => setShowIndex(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
