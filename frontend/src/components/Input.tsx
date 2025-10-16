import React from "react";
import {
  StyleSheet,
  TextInput,
  View,
  TextInputProps,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";
import AppText from "./AppText";
import { theme } from "@/theme";

interface InputProps extends TextInputProps {
  label?: string;
  errorMessage?: string | null;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  labelStyle?: StyleProp<TextStyle>;
}

const Input: React.FC<InputProps> = ({
  label,
  errorMessage,
  containerStyle,
  inputStyle,
  labelStyle,
  ...textInputProps
}) => {
  return (
    <View
      style={[
        styles.container,
        containerStyle,
        {
          marginBottom: errorMessage ? 0 : theme.layout.spacing.md,
        },
      ]}
    >
      {/* Show label if it exists */}
      {label && (
        <AppText
          style={[
            styles.label,
            { color: errorMessage ? theme.colors.error : theme.colors.text },
            labelStyle,
          ]}
          bold
        >
          {label}
        </AppText>
      )}

      {/* Component TextInput */}
      <View style={styles.input}>
        <TextInput
          style={[inputStyle, { color: theme.colors.text }]}
          placeholderTextColor={theme.colors.textLight}
          {...textInputProps}
        />
      </View>
      {errorMessage && (
        <AppText style={styles.errorText}>{errorMessage}</AppText>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "80%",
  },
  label: {
    fontSize: theme.typography.fontSizes.md,
    marginBottom: theme.layout.spacing.xs,
    color: theme.colors.text,
  },
  input: {
    height: 50,
    borderColor: theme.colors.border,
    borderWidth: 1,
    paddingHorizontal: theme.layout.spacing.md,
    borderRadius: theme.layout.borderRadius.md,
    backgroundColor: theme.colors.white,
    fontSize: theme.typography.fontSizes.md,
    shadowColor: theme.colors.shadow,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
    width: "100%",
    justifyContent: "center",
  },
  errorText: {
    color: theme.colors.error,
    fontSize: theme.typography.fontSizes.xs,
    marginTop: theme.layout.spacing.xs,
    textAlign: "left",
    width: "100%",
  },
});

export default Input;
