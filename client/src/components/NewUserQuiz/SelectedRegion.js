import { createContext, useContext, useState } from 'react';

// Create a new context for the selectedRegion state
const SelectedRegionContext = createContext();

// Create a custom hook to access the selectedRegion state
export const useSelectedRegion = () => useContext(SelectedRegionContext);

// Create a provider component to wrap the components that need access to the selectedRegion state
export const SelectedRegionProvider = ({ children }) => {
  const [selectedRegion, setSelectedRegion] = useState('');

  return (
    <SelectedRegionContext.Provider value={{ selectedRegion, setSelectedRegion }}>
      {children}
    </SelectedRegionContext.Provider>
  );
};
