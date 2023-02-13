import { createContext, useState } from "react";

const settingsContext = createContext();

const SettingsProvier = ({ children }) => {
  const [city, setCity] = useState(null);

  const value = { city, setCity };
  return (
    <settingsContext.Provider value={value}>
      {children}
    </settingsContext.Provider>
  );
};


export default SettingsProvier
export {settingsContext}