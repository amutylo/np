import React, { useEffect, useState } from "react";
import { getCategoryMenuItems } from "../../../logic/Api";
import RenderCategoryMenu from "./RenderCategoryMenu";
import "./CategoryMenu.css";

const homeCategory = {
  entityLabel: "Home Feed",
  entityId: 0,
  entityUrl: {
    path: "",
  },
  fieldIcon: "fa-home",
  fieldVisible: 1,
};

const CategoryMenu = (props) => {
  const [items, setItems] = useState();
  useEffect(() => {
    getCategoryMenuItems()
      .then((res) => {
        const categoryItems =
          res.data.data &&
          res.data.data.taxonomyTermQuery &&
          res.data.data.taxonomyTermQuery.entities;
        categoryItems.unshift(homeCategory);
        setItems(categoryItems);
      })
      .catch((error) => console.log("Error: ", error));
  }, []);

  return <RenderCategoryMenu items={items} />;
};

export default CategoryMenu;
