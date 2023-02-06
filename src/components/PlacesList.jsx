import { View } from "react-native";
import { Chip, Headline, Text } from "react-native-paper";
import { FlexContainer } from "./FlexContainer";

export const PlacesList = ({ places }) => {
  return (
    <View>
      <Text variant="labelLarge">Lugares</Text>
      <FlexContainer flexWrap="wrap" flex_direction_r>
        {places.map((item, i) => {
          return (
            <Chip style={{ margin: 3 }} mode="outlined" key={`${i}-place`}>
              {item}
            </Chip>
          );
        })}
      </FlexContainer>
    </View>
  );
};
