// Export all images from assets for easy use
export const Images = {
  // Main assets
  adaptiveIcon: require("../../assets/adaptive-icon.png"),
  favicon: require("../../assets/favicon.png"),
  icon: require("../../assets/icon.png"),
  splashIcon: require("../../assets/splash-icon.png"),

  // Images folder
  avatar: require("../../assets/images/avatar.png"),
  homeScreenImg: require("../../assets/images/home_screen_img.png"),
  logo: require("../../assets/images/logo.png"),
} as const;

// Type cho autocomplete
export type ImageKeys = keyof typeof Images;
