import { useEffect, useState } from "react";
import RestaurantList, { withOfferAt } from "./RestaurantList";
import { MAIN_PAGE_API } from "../utils/constant";

const Body = () => {
  const [restaurants, setRestaurants] = useState(null);
  const [filteredRestaurants, setFilterRestaurants] = useState(null);
  const [searchText, setSerachText] = useState();
  const restaurantWithOffer = withOfferAt(RestaurantList);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MAIN_PAGE_API);
    const jsonData = await data.json();

    setRestaurants(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilterRestaurants(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    console.log(jsonData);
  };

  return restaurants === null ? (
    <h1>Restaurant are not listed</h1>
  ) : (
    <>
      <div className="flex ml-10">
        <div className="my-4 ">
          <input
            type="text"
            name=""
            id=""
            className="border m-2"
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
            Above 4.5 ⭐
          </button>
        </div>
      </div>
      <div className="flex flex-wrap ml-10 ">
        {filteredRestaurants.map((restaurant) => {
          restaurant.info.aggregatedDiscountInfoV3.subHeader ? (
            <restaurantWithOffer data={restaurant} />
          ) : (
            <RestaurantList data={restaurant} />
          );
        })}
      </div>
    </>
  );
};
export default Body;
