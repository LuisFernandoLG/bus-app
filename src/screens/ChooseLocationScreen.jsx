import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCallback, useContext, useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { CitySelect } from "../components/CitySelect";
import { settingsContext } from "../context/SettingsContext";

export const ChooseLocationScreen = () => {
  const [selectedCity, setSelectedCity] = useState();
  const { setCity } = useContext(settingsContext);
  
  const navigation = useNavigation();


  const goToHomeScreen = () => {
    if (!selectedCity) return alert("Selecciona alguna ciudad");
    setCity(selectedCity);
    navigation.navigate("homeStack");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text variant="headlineSmall">Lugar</Text>
      <Text variant="bodyMedium">Escoge la ciudad en donde te localizas.</Text>

      <Text style={styles.label} variant="labelLarge">
        Selecciona tu ciudad
      </Text>
      
      <CitySelect selectCity={setSelectedCity} selectedCity={selectedCity}/>

      <Button
        onPress={goToHomeScreen}
        style={{ marginTop: 15 }}
        mode="contained"
      >
        Comenzar
      </Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
    backgroundColor: "#fff",
    flex: 1,
  },
  phoneInput: {
    marginVertical: 15,
  },
  label: {
    marginTop: 15,
  },
});
