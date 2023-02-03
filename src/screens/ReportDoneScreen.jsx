import React from "react";
import { Image, StyleSheet } from "react-native";
import { Button, Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlexContainer } from "../components/FlexContainer";
import FullEmailImg from "../../assets/images/fullMail.png";
import { useNavigation } from "@react-navigation/native";

export const ReportDoneScreen = () => {

  const navigation = useNavigation()

  const goToReportsScreen = ()=>{
    navigation.navigate("reports")
  }

  return (
    <SafeAreaView>
      <FlexContainer flex_ai_c pdHorizontal={20}>
        <Image style={styles.image} source={FullEmailImg}/>
      <Text variant="headlineLarge">Gracias por tu reporte</Text>
      <Text style={{textAlign:"center"}} variant="bodyMedium">Gracias a ciudadanos como tú, mejoraremos el transporte público para todos.</Text>
      </FlexContainer>
     <FlexContainer flex_ai_c mVertical={20}>
      <Button onPress={goToReportsScreen} contentStyle={{paddingHorizontal:20}} mode="contained">Volver</Button>
     </FlexContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image:{
    width:300,
    height:300
  }
})
