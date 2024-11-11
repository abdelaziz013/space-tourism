/* eslint-disable react-refresh/only-export-components */
import React from "react";
export interface UIContextStateI {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  closeSideBar:()=>void;
}
const initialState: UIContextStateI = {
  isSidebarOpen: false,
  toggleSidebar: () => { },
  closeSideBar:()=>{}
};
const UIContext = React.createContext<UIContextStateI>(initialState);
interface UIProviderProps {
  children: React.ReactNode;
}
const UIProvider = ({ children }: UIProviderProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const toggleSidebar = React.useCallback(() => {
    setIsSidebarOpen((prev=>!prev))
  }, []);
  const closeSideBar = React.useCallback(() => {
    console.log('called')
    setIsSidebarOpen(false)
  }, []);

  const contextValue = {
    toggleSidebar,
    isSidebarOpen,
    closeSideBar
  };
  return (
    <UIContext.Provider value={contextValue}>{children}</UIContext.Provider>
  );
};
const useUI = () => {
  return React.useContext(UIContext);
};
export { UIProvider, useUI };
