import React from "react";
export interface UIContextStateI {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}
const initialState: UIContextStateI = {
  isSidebarOpen: false,
  toggleSidebar: () => { },
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
  console.log(isSidebarOpen)
  const contextValue = {
    toggleSidebar,
    isSidebarOpen,
  };
  return (
    <UIContext.Provider value={contextValue}>{children}</UIContext.Provider>
  );
};
const useUI = () => {
  return React.useContext(UIContext);
};
export { UIProvider, useUI };
