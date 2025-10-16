import React from "react";
import { StyleSheet, View, Image } from "react-native";
import AppText from "./AppText";
import { theme } from "@/theme";

export default function Logo() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../assets/images/logo.png")}
      />
      <AppText style={styles.title} bold>
        ƯƠM MẦM XANH
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 60,
    height: 60,
  },
  title: {
    fontSize: theme.typography.fontSizes.xs,
    marginBottom: theme.layout.spacing.sm,
    color: theme.colors.primary,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
