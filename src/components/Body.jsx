import { useEffect, useState } from "react";
import RestaurantList from "./RestaurantList";

const Body = () => {
  const [restaurants, setRestaurants] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8466937&lng=80.94616599999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    setRestaurants(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  return (
    <>
      <div className="flex">
        <div className="my-4">
          <input type="text" name="" id="" className="border" />
        </div>
        <button className=" rounded bg-cyan-200 px-4 w-20 m-2 h-6  ">
          {" "}
          Search
        </button>
      </div>
      <div>
        {/* {restaurants.map((restaurant) => {
          <RestaurantList data={restaurant} />;
        })} */}
      </div>
    </>
  );
};
export default Body;
