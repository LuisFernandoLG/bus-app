import { useRef } from "react";

export const useMap = () => {
  const mapRef = useRef(null);

  const animateToRegion = ({ latitude, longitude }) => {
    mapRef.current.animateToRegion({
      latitude: latitude,
      longitude: longitude, 
      latitudeDelta: 0.1,
      longitudeDelta: 0.1,
    });
  };

  return {
    mapRef,
    animateToRegion,
  };
};
