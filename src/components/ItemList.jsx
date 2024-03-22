const ItemList = ({ data }) => {
  console.log(data);
  const { name, description, imageId, price } = data;
  return (
    <div className="flex justify-between border-b-2 border-cyan-600">
      <div className="m-2">
        <div className="font-bold text-lg">{name}</div>
        <div className="font-semibold "> ₹ {price / 100}</div>
        <div className="text-sm break-words">{description}</div>
      </div>
      <div>
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            imageId
          }
          alt="food"
          className="w-24 m-4"
        />
      </div>
    </div>
  );
};

export default ItemList;
