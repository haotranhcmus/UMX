import React from "react";
import { Text, StyleSheet, StyleProp, TextStyle } from "react-native";
import { theme } from "@/theme";
import { TextProps } from "./Themed";

interface AppTextProps extends TextProps {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
  bold?: boolean;
}

const AppText = ({
  children,
  style,
  bold = false,
  ...textProps
}: AppTextProps) => {
  return (
    <Text
      style={[bold ? styles.boldText : styles.regularText, style]}
      {...textProps}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  boldText: {
    fontFamily: theme.typography.fontFamily.primary.bold,
  },
  regularText: {
    fontFamily: theme.typography.fontFamily.primary.regular,
  },
});

export default AppText;
