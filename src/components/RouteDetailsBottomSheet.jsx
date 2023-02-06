import BottomSheet, { BottomSheetVirtualizedList } from "@gorhom/bottom-sheet";
import { useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { Badge, Button, Chip, Headline, IconButton, Text } from "react-native-paper";
import { useBottomSheet } from "../hooks/useBottomSheet";
import { FlexContainer } from "./FlexContainer";
import { PlacesList } from "./PlacesList";

export const RouteDetailsBottomSheet = ({ goBack, route }) => {
  const { snapPoints, handleSheetChanges, bottomSheetRef } = useBottomSheet();

  const { places } = route;

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={1}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      style={styles.bottomSheet}
    >
      <FlexContainer flex_direction_r flex_ai_c flex_jc_fs>
        <IconButton
          mode="contained"
          onPress={goBack}
          icon="arrow-left"
        ></IconButton>
        <FlexContainer flexGrow={0.8} flex_ai_c flex_jc_c>
          <Headline style={{textAlign:"center"}} variant="titleLarge">{route.name}</Headline>
        </FlexContainer>
      </FlexContainer>
      <FlexContainer mVertical={20}>
      <Text>10 unidades</Text>
      <Text>Intervalo: {route.interval} minutos</Text>
      </FlexContainer>

      <PlacesList places={places} />
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },
  contentContainer: {
    backgroundColor: "white",
    height: 20,
  },
  bottomSheet: {
    paddingHorizontal:20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  itemContainer: {
    padding: 6,
    margin: 6,
    backgroundColor: "#eee",
  },
  placesContainer: {
    flexWrap: "wrap",
    gap: 4,
  },
});
