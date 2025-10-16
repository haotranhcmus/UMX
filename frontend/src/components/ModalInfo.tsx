import React from "react";
import {
  Modal,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import AppText from "./AppText";
import { theme } from "@/theme";

const ModalInfo = ({
  isVisible,
  onClose,
  children,
  title,
}: {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        {/* Create overlay */}
        <View style={styles.overlay}>
          {/* Prevent the overlay's onPress event from bubbling up to the modal content */}
          <TouchableWithoutFeedback>
            <View style={styles.modalContent}>
              {title && (
                <AppText style={styles.modalTitle} bold>
                  {title}
                </AppText>
              )}
              {children}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: theme.colors.white,
    borderRadius: theme.layout.borderRadius.md,
    padding: theme.layout.spacing.lg,
    width: "85%",
    maxHeight: "80%",
    shadowColor: theme.colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: theme.typography.fontSizes.lg,
    marginBottom: theme.layout.spacing.md,
    textAlign: "center",
  },
});

export default ModalInfo;
