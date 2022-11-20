import React, { useContext, useState } from "react";

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
