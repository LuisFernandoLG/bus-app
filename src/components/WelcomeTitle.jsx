import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";

export const WelcomeTitle = () => {
  return (
    <Text style={styles.title} variant="displayMedium">
      Bienvenido a{`\n`}
      <Text style={styles.appName}>Practibus</Text>{`\n`}
      una app para{`\n`}
      tu ciudad
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
  },
  appName: {
    fontWeight: "bold",
    color: "#68e1fd",
  },
});
