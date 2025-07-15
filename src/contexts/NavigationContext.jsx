import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

const NavigationContext = createContext(null);

export const NavigationProvider = ({ children }) => {
  const navigate = useNavigate();

  const navigateWithTransition = (to) => {
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        navigate(to);
      });
    } else {
      navigate(to);
    }
  };

  return (
    <NavigationContext.Provider value={{ navigateWithTransition }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useTransitionNavigate = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error(
      "useTransitionNavigate deve ser usado dentro de um NavigationProvider"
    );
  }
  return context;
};
