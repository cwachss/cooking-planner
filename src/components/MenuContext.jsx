import React, { ReactNode, useContext, useRef, useState } from "react";
import ReactPlayer from "react-player";
import useLocalStorage from "../../hooks/useLocalStorage";
import { Lecture } from "../../types/lecture";
import {
  Breadcrumb,
  Category,
  ContentType,
  LectureContext,
  PlaybackRate,
} from "../../types/LectureContext";

const MenuContext = React.createContext();

const MenuProvider = () => {
  const [menus, setMenus] = useState([]);

  const MenuContext = {
    menus,
    setMenus,
  };

  return (
    <MenuContext.Provider value={lectureContext}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenuContext = () => useContext(MenuContext);

export default MenuProvider;
