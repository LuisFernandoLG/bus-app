import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlexContainer } from "../components/FlexContainer";
import { ReportList } from "../components/ReportList";

export const ReportsScreen = () => {

  const navigation = useNavigation()

  const goNextScreen = ()=>{
    navigation.navigate("report")
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlexContainer flex_direction_r flex_jc_sb>
        <Text variant="headlineLarge">Reportes</Text>
        <Button
          mode="contained"
          icon="bullhorn-outline"
          onPress={goNextScreen}
          contentStyle={{ flexDirection: "row-reverse" }}
        >
          Reportar
        </Button>
      </FlexContainer>

      <ReportList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginTop: 20,
    paddingHorizontal: 20,
  },
});
