import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { useMap } from "../hooks/useMap";
import { FakeBus } from "./FakeBus";
import FakeBus2 from "./FakeBus2";
import { PolyRoute } from "./PolyRoute";

export const Map = ({ route, initialRegion, region }) => {
  const { mapRef, animateToRegion } = useMap();

  useEffect(() => {
    if (initialRegion && mapRef) {
      // console.log("region cambiada")
      const coords = { ...region };
      animateToRegion(coords);
    }
  }, [region]);

  // return null
  return (
    <MapView
      style={styles.map}
      initialRegion={initialRegion}
      // provider={PROVIDER_GOOGLE}
      ref={mapRef}
      showsUserLocation={true}
      showsMyLocationButton={false}
      showsCompass={false}
    >
      <PolyRoute route={route} />
      <FakeBus />
      {/* <FakeBus2/> */}
    </MapView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },
  contentContainer: {
    backgroundColor: "white",
    paddingHorizontal: 20,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -1,
  },
});
