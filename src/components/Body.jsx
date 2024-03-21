import { useEffect, useState } from "react";
import RestaurantList from "./RestaurantList";

const Body = () => {
  const [restaurants, setRestaurants] = useState(null);
  const [filteredRestaurants, setFilterRestaurants] = useState(null);
  const [searchText, setSerachText] = useState();

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
    setFilterRestaurants(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return restaurants === null ? (
    <h1>Restaurant are not listed</h1>
  ) : (
    <>
      <div className="flex">
        <div className="my-4">
          <input
            type="text"
            name=""
            id=""
            className="border"
            value={searchText}
            onChange={(e) => setSerachText(e.target.value)}
          />
          <button
            className=" rounded bg-cyan-200 px-4 w-20 m-2 h-6 "
            onClick={() => {
              const filteredList = restaurants.filter((res) =>
                res?.info?.name
                  ?.toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilterRestaurants(filteredList);
            }}
          >
            {" "}
            Search
          </button>
          <button
            className="bg-cyan-100 rounded  px-2 "
            onClick={() => {
              const filterByStar = restaurants.filter(
                (restaurant) => restaurant?.info?.avgRating >= 4.5
              );
              setFilterRestaurants(filterByStar);
            }}
          >
            Above 4.5 🌠
          </button>
        </div>
      </div>
      <div className="flex flex-wrap ml-10 ">
        {filteredRestaurants.map((restaurant) => {
          return (
            <RestaurantList key={restaurant?.info?.id} data={restaurant} />
          );
        })}
      </div>
    </>
  );
};
export default Body;
