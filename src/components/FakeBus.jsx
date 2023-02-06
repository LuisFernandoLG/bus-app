import { useEffect, useRef, useState } from "react";
import { AnimatedRegion, Marker, MarkerAnimated } from "react-native-maps";
import { useRealtimeFakeBus } from "../hooks/useRealtimeFakeBus";
import BusIcon from "../../assets/images/bus.png";
import { Platform } from "react-native";

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
    }
  }, [busLocation]);

  const animateTo = (ref)=>{
    ref.animateMarkerToCoordinate({latitude: 23.058955,
      longitude: -109.694998,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,}, 2000)
  }

  if (busLocation === null) return null;

  if (Platform.OS === "android")
    return (
      <Marker.Animated
        image={BusIcon}
        ref={(ref) => animateTo(ref)}
        coordinate={busLocation}
      />
    );
  return <Marker image={BusIcon} coordinate={busLocation} />;
};
