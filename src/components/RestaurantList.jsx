/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { IMAGE_API } from "../utils/constant";
const RestaurantList = ({ data }) => {
  // console.log(data);
  // console.log(data?.info?.name);
  const { name, avgRating, cuisines, cloudinaryImageId, id } = data?.info;
  return (
    <>
      <Link to={"/restaurantmenu/" + id}>
        <div className="w-80 bg-cyan-200 m-2 rounded">
          <div className="flex justify-center align-middle rounded">
            <img src={IMAGE_API + cloudinaryImageId} alt="" className="h-40" />
          </div>
          <div className="text-lg font-bold">{name}</div>
          <div className="truncate ">{cuisines.join(" ,")}</div>
          <div>⭐ {avgRating}</div>
        </div>
      </Link>
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const withOfferAt = (RestaurantList) => {
  return ({ data }) => {
    <div>
      <RestaurantList {...data} />
      <div className="text-center font-serif font-bold">
        {data?.info?.aggregatedDiscountInfoV3?.subHeader}
      </div>
    </div>;
  };
};
export default RestaurantList;
