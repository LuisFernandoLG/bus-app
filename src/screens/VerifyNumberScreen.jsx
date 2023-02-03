import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export const VerifyNumberScreen = () => {
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  const [code, setCode] = useState("");
  const navigation = useNavigation()


  const handleOnChange = (value) => {
    setCode(value);
  };

  const goToChooseYourLocation = ()=>{
    navigation.navigate("chooseLocation")
  }

  useEffect(() => {
    if (code.trim() === "") setIsBtnDisabled(true);
    else setIsBtnDisabled(false);
  }, [code]);


  return (
    <SafeAreaView style={styles.container}>
      <Text variant="headlineSmall">Verifica tu número</Text>
      <Text variant="bodyMedium">
        Envíamos un código de verificación a tu número teléfonico:
        <Text style={{ fontWeight: "bold" }}>+52 6242420721</Text>
      </Text>

      <TextInput
        onChangeText={handleOnChange}
        value={code}
        style={styles.phoneInput}
        label="Código"
        mode="outlined"
      />

      <Button
        onPress={goToChooseYourLocation}
        style={{ marginTop: 15 }}
        mode="contained"
        disabled={isBtnDisabled}
      >
        Envíar
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
})
