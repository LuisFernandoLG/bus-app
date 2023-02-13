import { useEffect, useRef, useState } from "react";
import { Marker } from "react-native-maps";
import { useRealtimeFakeBus } from "../hooks/useRealtimeFakeBus";
import BusIcon from "../../assets/images/bus.png";


export const FakeBus = () => {
  const { busLocation, initLocation } = useRealtimeFakeBus({ speed: 1000 });
  
  if(busLocation === null) return null
  return <Marker image={BusIcon} coordinate={busLocation} />;
};
