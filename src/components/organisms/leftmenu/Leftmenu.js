import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../../contexts/GlobalContext";
import { getMenuItems } from "../../../logic/Api";
import { SET_MENU_LINKS } from "../../../reducers/types";
import RenderLeftMenu from "./RenderLeftMenu";
//TODO:: Move getMenuItems to General context.

const Leftmenu = (props) => {
  // const [items, setItems] = useState([]);
  const { state, dispatch } = useContext(GlobalContext);
  useEffect(() => {
    getMenuItems()
      .then((res) => {
        const menu_links =
          res.data.data &&
          res.data.data.menuByName &&
          res.data.data.menuByName.links
            ? res.data.data.menuByName.links
            : [];
        // setItems(links);
        dispatch({ type: SET_MENU_LINKS, payload: menu_links });
      })
      .catch((error) => console.log("error:", error));
  }, []);
  return <RenderLeftMenu items={state.menu_links} />;
};

export default Leftmenu;
