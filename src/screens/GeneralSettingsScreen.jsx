import { Picker } from "@react-native-picker/picker";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCallback, useContext, useEffect, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Button, Chip, Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { useQuery, useQueryClient } from "react-query";
import { FlexContainer } from "../components/FlexContainer";
import { settingsContext } from "../context/SettingsContext";
import { getCities } from "../services/api";

export const GeneralSettingsScreen = () => {
  const navigation = useNavigation();
  const { city, setCity } = useContext(settingsContext);
  const [selectedCity, setSelectedCity] = useState();
  const queryClient = useQueryClient();

  const { isLoading, data, isError, error } = useQuery("allCities", getCities);

  if ((isLoading, isError)) return null;

  const goHomeStack = () => {
    navigation.navigate("homeStack");
  };

  const saveSttings = () => {
    setCity(selectedCity);
    queryClient.invalidateQueries(["routes", selectedCity.id]);
    goHomeStack();
  };

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <FlexContainer mgBottom={20}>
          <Text variant="labelLarge">Ciudad actual: </Text>
          <Chip>{city?.name}</Chip>
        </FlexContainer>
        <Text variant="labelLarge">Cambiar a: </Text>
        <Picker
          enabled={!isLoading}
          mode="dropdown"
          selectedValue={selectedCity}
          onValueChange={(itemValue, itemIndex) => {
            setSelectedCity(itemValue);
          }}
        >
          {data.docs.map((item) => (
            <Picker.Item key={item.id} label={item.name} value={item} />
          ))}
        </Picker>

        <FlexContainer mgTop={50} flex_ai_c>
          <Button mode="contained" onPress={saveSttings}>
            Guardar cambios
          </Button>
        </FlexContainer>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    flex: 1,
    paddingVertical: 20,
  },
  name: {
    color: "red",
  },
  label: {
    marginTop: 15,
  },
  bottomSheet: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    zIndex: 20,
  },
});
