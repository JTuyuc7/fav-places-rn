import { PlaceProps } from "@/models/place";
import { createContext, useState } from "react";

interface PlaceContextType {
  singlePlace: PlaceProps;
  resetPlaceObject: () => void;
  updatePlaceObject: (updatedPlace: PlaceProps) => void;
}

export const PlaceContext = createContext<PlaceContextType>({
  resetPlaceObject: () => { },
  singlePlace: {} as PlaceProps,
  updatePlaceObject: () => { },
});

function PlaceContextProvider({ children }: { children: React.ReactNode }) {
  const [singlePlace, setSinglePlace] = useState<PlaceProps>({} as PlaceProps)

  const updatePlaceFn = (place: PlaceProps) => {
    setSinglePlace(place)
  }

  const resetPlaceFn = () => {
    setSinglePlace({} as PlaceProps)
  }
  const value: PlaceContextType = {
    singlePlace,
    updatePlaceObject: updatePlaceFn,
    resetPlaceObject: resetPlaceFn,
  }

  return (
    <PlaceContext.Provider value={value}>
      {children}
    </PlaceContext.Provider>
  );
}

export default PlaceContextProvider