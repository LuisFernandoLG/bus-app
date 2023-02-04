import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Button, Text, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlexContainer } from "../components/FlexContainer";

export const ReportScreen = () => {
  
  const [selectedLanguage, setSelectedLanguage] = useState();
  const navigation = useNavigation()

  const sendReport = ()=>{
    navigation.navigate("reportDone")
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

      <Text variant="headlineSmall">Realiza tu reporte</Text>
      <Text variant="bodyMedium">
        A continuación, llena los datos correspondientes.
      </Text>

      <FlexContainer mVertical={20}>
        <Text variant="labelLarge">Ruta</Text>
        <Picker
          label={"País"}
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }
        >
          <Picker.Item label="1" value="java" />
          <Picker.Item label="2" value="js" />
        </Picker>
      </FlexContainer>

      <FlexContainer mVertical={20}>
        <Text variant="labelLarge">Unidad</Text>
        <Picker
          label={"País"}
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }
        >
          <Picker.Item label="M21" value="java" />
          <Picker.Item label="M22" value="js" />
        </Picker>
      </FlexContainer>

      <FlexContainer flex_ai_c>
        <Button
          onPress={sendReport}
          style={{ marginTop: 15 }}
          mode="contained"
          contentStyle={{ flexDirection: "row-reverse", paddingHorizontal:20,  }}
          icon="bullhorn-outline"
        >
          Reportar
        </Button>
      </FlexContainer>
          </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingBottom:10,
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
