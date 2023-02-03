import { StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

export const EnterYourPhoneScreen = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();

  const navigator = useNavigation();

  const goToVerifyNumber = () => {
    navigator.navigate("verifyYourNumber");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text variant="headlineSmall">Número de teléfono</Text>
      <Text variant="bodyMedium">
        Para acceder a la app, necesitamos de tu número de teléfono.
      </Text>

      <Text style={styles.label} variant="labelLarge">
        País
      </Text>
      <Picker
        label={"País"}
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
      >
        <Picker.Item label="México" value="java" />
        <Picker.Item label="USA" value="js" />
      </Picker>

      <TextInput  style={styles.phoneInput} mode="outlined" label="Teléfono" keyboardType="number-pad"/>

      <Button
        onPress={goToVerifyNumber}
        style={{ marginTop: 15 }}
        mode="contained"
        icon="send"
      >
        Envíar
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
