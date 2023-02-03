import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { Picker } from "@react-native-picker/picker";


export const ChooseLocationScreen = () => {
  const [city, selectCity] = useState("Cabo San Lucas B.C.S");

  const navigation = useNavigation();

  const goToHomeScreen = () => {
    navigation.navigate("home");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text variant="headlineSmall">Lugar</Text>
      <Text variant="bodyMedium">Escoge la ciudad en donde te localizas.</Text>

      <Text style={styles.label} variant="labelLarge">
        Selecciona tu ciudad
      </Text>
      <Picker
        selectedValue={city}
        onValueChange={(itemValue, itemIndex) => selectCity(itemValue)}
      >
        <Picker.Item label="Cabo San Lucas B.C.S" value="1" />
        <Picker.Item label="San José del Cabo B.C.S" value="2" />
      </Picker>

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
  container:{
    paddingHorizontal: 20,
    marginTop: 20,
    backgroundColor: "#fff",
    flex: 1,
  },
  phoneInput: {
    marginVertical: 15,
  },
  label:{
    marginTop:15
  }
})
