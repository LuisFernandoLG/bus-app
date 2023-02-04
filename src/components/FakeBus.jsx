import { useEffect, useRef, useState } from "react";
import { AnimatedRegion, Marker, MarkerAnimated } from "react-native-maps";
import { useRealtimeFakeBus } from "../hooks/useRealtimeFakeBus";

const initialCoordinate = {
  latitude: 23.058955,
  longitude: -109.694999,
};
const duration = 500;

export const FakeBus = () => {
  const { busLocation, initLocation } = useRealtimeFakeBus({ speed: 1000 });
  const markerRef = useRef(null);

  const [coordinate, setCoordinate] = useState(initialCoordinate);

  useEffect(() => {
    if (busLocation && markerRef) {
      // setCoordinate(coordinate)
    }
  }, [busLocation]);

  if (busLocation === null) return null;
  return <Marker ref={markerRef} coordinate={busLocation} />;
};
