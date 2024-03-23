import { useState } from "react";
import ItemList from "./ItemList";

const MenuList = ({ data, showItems, setShowIndex }) => {
  const { title } = data?.card?.card;
  const { itemCards } = data?.card?.card;
  const onClickHandler = () => {
    setShowIndex();
  };

  return (
    <div className="flex justify-between  my-10 shadow-md">
      <div className="">
        <div>
          <div
            className="font-bold text-lg cursor-pointer flex justify-between"
            onClick={onClickHandler}
          >
            {title} ({itemCards?.length}) <span>🔽</span>
          </div>
          <div className="m-6">
            {showItems &&
              itemCards.map((item) => {
                return (
                  <ItemList
                    key={item?.card?.info?.id}
                    data={item?.card?.info}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default MenuList;
