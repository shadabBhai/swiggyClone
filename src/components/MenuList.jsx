import ItemList from "./ItemList";

const MenuList = ({ data }) => {
  const { title } = data?.card?.card;
  const { itemCards } = data?.card?.card;
  return (
    <div className="flex justify-between border-b-2 my-2">
      <div className="">
        <div>
          <div
            className="font-bold text-lg cursor-pointer"
            onClick={() => console.log("clicked")}
          >
            {title} ({itemCards?.length})
          </div>
          <div className="m-6">
            {itemCards.map((item) => {
              return (
                <ItemList key={item?.card?.info?.id} data={item?.card?.info} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default MenuList;
