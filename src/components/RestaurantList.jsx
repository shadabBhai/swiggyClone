/* eslint-disable react/prop-types */
const RestaurantList = ({ data }) => {
  // console.log(data);
  // console.log(data?.info?.name);
  const { name, avgRating, cuisines, cloudinaryImageId } = data?.info;
  return (
    <>
      <div className="w-80 bg-cyan-200 m-2 rounded">
        <div className="flex justify-center align-middle rounded">
          <img
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
              cloudinaryImageId
            }
            alt=""
            className="h-40"
          />
        </div>
        <div className="text-lg font-bold">{name}</div>
        <div className="truncate ">{cuisines.join(" ,")}</div>
        <div>{avgRating}</div>
      </div>
    </>
  );
};
export default RestaurantList;
