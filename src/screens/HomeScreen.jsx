import React, { useState } from "react";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { StyleSheet, View } from "react-native";
import { RouteList } from "../components/RouteList";
import { FAB } from "react-native-paper";
import { StatusBar } from "react-native";
import { Map } from "../components/Map";
import { useBottomSheet } from "../hooks/useBottomSheet";
import { useLocationPermission } from "../hooks/useLocationPermission";

const initialRegion = {
  latitude: 23.058955,
  longitude: -109.694999,
  latitudeDelta: 0.015,
  longitudeDelta: 0.0121,
};

export const HomeScreen = () => {
  const [currentRoute, setCurrentRoute] = useState(null);
  const { snapPoints, handleSheetChanges, bottomSheetRef } = useBottomSheet();
  const [region, setCurrentRegion] = useState({ initialRegion });
  const { location } = useLocationPermission();

  const selectRoute = (route) => {
    setCurrentRoute(route);
    const coords = { ...route.points[0] };
    setCurrentRegion(coords);
  };

  const handleLocationButtonClick = () => {
    setCurrentRegion({ ...location.coords });
  };

  return (
    <View style={styles.container}>
      <FAB
        style={styles.fab}
        small
        icon="crosshairs"
        onPress={handleLocationButtonClick}
      />
      <Map route={currentRoute} region={region} initialRegion={initialRegion} />
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <BottomSheetScrollView contentContainerStyle={styles.contentContainer}>
          <RouteList selectRoute={selectRoute} />
        </BottomSheetScrollView>
      </BottomSheet>
    </View>
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
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    top: StatusBar.currentHeight,
    zIndex: 100,
    borderRadius: 100,
  },
});
