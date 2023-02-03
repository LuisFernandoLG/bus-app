import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet } from "react-native";
import { Button, Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import BusImage from "../../assets/images/bus2.png";
import { WelcomeTitle } from "../components/WelcomeTitle";

export const WelcomeScreen = () => {

  const navigation = useNavigation();
  const goToNextScreen = () => navigation.navigate("enterYourPhone");


  return <SafeAreaView style={styles.container}>
  <Image source={BusImage} />
  <WelcomeTitle />
  <Text style={styles.description} variant="bodyLarge">
    Practibus es una aplicación diseñada para que los ciudadanos puedan
    transitar con mayor fácilidad en la ciudad.
  </Text>
  <Button onPress={goToNextScreen} mode="contained">
    Iniciar sesión
  </Button>
</SafeAreaView>
}


const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor:"#ffffff",
    flex:1
  },
  description: {
    marginVertical: 20,
  },
});

