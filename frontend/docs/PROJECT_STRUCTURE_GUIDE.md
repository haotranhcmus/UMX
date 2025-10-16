# 📚 Project Structure Guide - Vai trò của các thư mục và files

## 🎯 **Tổng quan kiến trúc**

```
src/
├── app/                 # 🌐 Screens & Routing (Expo Router)
├── components/          # 🧩 Reusable UI Components
├── theme/              # 🎨 Design System (Colors, Fonts, Spacing)
├── constants/          # 📋 Static Values (Routes, Messages, Images)
└── utils/              # 🛠️ Helper Functions & Logic
```

---

## 📁 **1. THEME FOLDER** - Design System

### **Vai trò:** Centralized Design System - Single source of truth cho giao diện

### **Khi nào sửa gì?**

#### **📄 `theme/colors.ts`** - Bảng màu

```typescript
export const colors: Colors = {
  primary: "#057457", // Màu chính
  backgroundLight: "#c9ebc8", // Màu nền
  error: "#dc3545", // Màu lỗi
  // ...
};
```

**KHI NÀO SỬA:**

- ✅ Muốn đổi màu chủ đạo của app
- ✅ Thêm màu mới (ví dụ: màu warning, info)
- ✅ Rebrand - đổi màu toàn bộ app
- ✅ Dark mode - thêm dark colors

**CÁCH DÙNG:**

```tsx
import { theme } from "@/theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary, // ✅ Use theme
    // ❌ KHÔNG: backgroundColor: "#057457"  // Hard-coded
  },
});
```

**LƯU Ý:**

- ⚠️ Sửa 1 lần ở đây → tất cả nơi khác tự động update
- ⚠️ Phải update `theme.types.ts` nếu thêm màu mới

---

#### **📄 `theme/typography.ts`** - Fonts & Font Sizes

```typescript
export const typography: Typography = {
  fontFamily: {
    primary: {
      regular: "OpenSans-Regular",
      bold: "OpenSans-Bold",
    },
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24,
  },
};
```

**KHI NÀO SỬA:**

- ✅ Đổi font chữ toàn app (ví dụ: OpenSans → Roboto)
- ✅ Thêm font chữ phụ (secondary font)
- ✅ Điều chỉnh size hierarchy (xs, sm, md...)
- ✅ Thêm font weights (light, medium, semibold)

**CÁCH DÙNG:**

```tsx
const styles = StyleSheet.create({
  title: {
    fontSize: theme.typography.fontSizes.lg,  // ✅ Use theme
    // ❌ KHÔNG: fontSize: 20  // Hard-coded
  },
});

// Trong AppText component
<Text style={{ fontFamily: theme.typography.fontFamily.primary.bold }}>
```

**LƯU Ý:**

- ⚠️ Phải load font trong `app/_layout.tsx` trước (useFonts)
- ⚠️ Tên font phải khớp với file font thực tế

---

#### **📄 `theme/layout.ts`** - Spacing & Border Radius

```typescript
export const layout: Layout = {
  spacing: {
    xs: 4, // Margin/padding nhỏ
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 16,
  },
};
```

**KHI NÀO SỬA:**

- ✅ Muốn consistent spacing toàn app
- ✅ Thay đổi border radius style (góc cong)
- ✅ Thêm spacing sizes mới (xxl, xxxl)
- ✅ Responsive design - spacing khác nhau cho tablet/phone

**CÁCH DÙNG:**

```tsx
const styles = StyleSheet.create({
  container: {
    padding: theme.layout.spacing.lg, // ✅ Use theme
    marginBottom: theme.layout.spacing.md,
    borderRadius: theme.layout.borderRadius.md,
    // ❌ KHÔNG: padding: 24, margin: 16  // Hard-coded numbers
  },
});
```

**LỢI ÍCH:**

- ✅ Consistent spacing → UI đẹp hơn
- ✅ Dễ điều chỉnh toàn bộ app (scale spacing lên/xuống)

---

#### **📄 `theme/theme.types.ts`** - TypeScript Definitions

```typescript
export interface Colors {
  primary: string;
  secondary: string;
  // ...
}

export interface Theme {
  colors: Colors;
  typography: Typography;
  layout: Layout;
}
```

**KHI NÀO SỬA:**

- ✅ Thêm color mới → update Colors interface
- ✅ Thêm font size → update Typography interface
- ✅ Thêm spacing → update Layout interface

**VÍ DỤ:**

```typescript
// Thêm màu warning
export interface Colors {
  primary: string;
  warning: string; // ← Thêm dòng này
  // ...
}

// Rồi mới thêm vào colors.ts:
export const colors: Colors = {
  warning: "#FFA500", // ← Bây giờ mới thêm được
};
```

---

#### **📄 `theme/index.ts`** - Central Export

```typescript
import { colors } from "./colors";
import { typography } from "./typography";
import { layout } from "./layout";

export const theme = {
  colors,
  typography,
  layout,
};
```

**KHI NÀO SỬA:**

- ✅ Khi thêm file mới trong theme (ví dụ: shadows.ts, animations.ts)
- ✅ KHÔNG cần sửa thường xuyên

---

## 📁 **2. CONSTANTS FOLDER** - Static Values

### **Vai trò:** Lưu các giá trị KHÔNG đổi, dùng nhiều nơi

---

#### **📄 `constants/routes.ts`** - Route Paths

```typescript
export const ROUTES = {
  AUTH: {
    LOGIN: "/(auth)/login" as const,
    REGISTER: "/(auth)/register" as const,
  },
  APP: {
    HOME: "/(app)/home" as const,
  },
} as const;
```

**KHI NÀO SỬA:**

- ✅ Thêm screen mới → thêm route mới
- ✅ Đổi route structure (ví dụ: `/auth/login` → `/authentication/login`)
- ✅ Tổ chức lại routing hierarchy

**CÁCH DÙNG:**

```tsx
import { ROUTES } from "@/constants/routes";

// ✅ Type-safe, autocomplete
router.push(ROUTES.AUTH.LOGIN);

// ❌ KHÔNG: router.push("/(auth)/login")  // Magic string
```

**VÍ DỤ THÊM ROUTE:**

```typescript
export const ROUTES = {
  AUTH: {
    LOGIN: "/(auth)/login" as const,
    REGISTER: "/(auth)/register" as const,
    VERIFY_EMAIL: "/(auth)/verify-email" as const, // ← Thêm screen mới
  },
  APP: {
    HOME: "/(app)/home" as const,
    SETTINGS: "/(app)/settings" as const, // ← Thêm screen mới
    PROFILE: "/(app)/profile" as const,
  },
} as const;
```

---

#### **📄 `constants/messages.ts`** - UI Text & Validation Messages

```typescript
export const VALIDATION_MESSAGES = {
  REQUIRED: (fieldName: string) => `${fieldName} is required`,
  INVALID_EMAIL: "Please enter a valid email address",
  // ...
};

export const SUCCESS_MESSAGES = {
  REGISTRATION_SUCCESS: "Đăng kí thành công!",
  // ...
};
```

**KHI NÀO SỬA:**

- ✅ Thêm validation rule mới
- ✅ Đổi wording của message (ví dụ: "Email is required" → "Vui lòng nhập email")
- ✅ Thêm success/error messages mới
- ✅ Chuẩn bị cho i18n (đa ngôn ngữ)

**CÁCH DÙNG:**

```tsx
import { VALIDATION_MESSAGES } from "@/constants/messages";

// ✅ Consistent messages
if (!email) {
  setError(VALIDATION_MESSAGES.REQUIRED("Email"));
}

// ❌ KHÔNG: setError("Email is required")  // Duplicate string
```

**VÍ DỤ THÊM MESSAGE:**

```typescript
export const VALIDATION_MESSAGES = {
  // Existing...
  REQUIRED: (fieldName: string) => `${fieldName} is required`,

  // ✅ Thêm mới
  PHONE_INVALID: "Số điện thoại không hợp lệ",
  MIN_AGE: (age: number) => `Bạn phải từ ${age} tuổi trở lên`,
} as const;
```

---

#### **📄 `constants/images.ts`** - Image Assets

```typescript
export const Images = {
  homeScreenImg: require("../../assets/images/homescreen.png"),
  logo: require("../../assets/images/logo.png"),
  // ...
};
```

**KHI NÀO SỬA:**

- ✅ Thêm ảnh mới vào app
- ✅ Đổi path của ảnh

**CÁCH DÙNG:**

```tsx
import { Images } from "@/constants/images";

<Image source={Images.logo} />; // ✅ Autocomplete

// ❌ KHÔNG: <Image source={require("../../assets/logo.png")} />
```

---

## 📁 **3. UTILS FOLDER** - Helper Functions

### **Vai trò:** Logic tái sử dụng, helper functions

---

#### **📄 `utils/validateEmail.tsx`** - Email Validation Logic

```typescript
const validateEmail = (email: string) => {
  return email.match(/regex-pattern/);
};
```

**KHI NÀO SỬA:**

- ✅ Đổi email validation rule (ví dụ: cho phép email không có TLD)
- ✅ Thêm strict validation

**CÁCH DÙNG:**

```tsx
import validateEmail from "@/utils/validateEmail";

if (!validateEmail(email)) {
  setError("Invalid email");
}
```

---

#### **📄 `utils/validatePassword.tsx`** - Password Validation Logic

```typescript
const validatePassword = (password: string): boolean => {
  const re =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return re.test(password);
};
```

**KHI NÀO SỬA:**

- ✅ Đổi password requirements (ví dụ: từ 8 → 12 characters)
- ✅ Thêm/bớt special characters
- ✅ Cho phép/không cho phép emojis

**VÍ DỤ:**

```typescript
// ✅ Password phải 12 ký tự
const validatePassword = (password: string): boolean => {
  const re =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/;
  //                                                                          ↑↑ changed
  return re.test(password);
};
```

**LƯU Ý:**

- ⚠️ Nếu đổi rule, phải đổi message trong `constants/messages.ts`

---

#### **📄 Thêm utils khác (examples):**

**`utils/formatDate.ts`** - Format dates

```typescript
export const formatDate = (date: Date): string => {
  return date.toLocaleDateString("vi-VN");
};
```

**`utils/formatCurrency.ts`** - Format money

```typescript
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(amount);
};
```

**`utils/storage.ts`** - AsyncStorage helpers

```typescript
export const saveToken = async (token: string) => {
  await AsyncStorage.setItem("authToken", token);
};
```

---

## 📁 **4. COMPONENTS FOLDER** - Reusable UI

### **Vai trò:** UI Components tái sử dụng

---

#### **📄 `components/AppText.tsx`** - Custom Text Component

```typescript
interface AppTextProps extends TextProps {
  bold?: boolean;
  // ...
}
```

**KHI NÀO SỬA:**

- ✅ Thêm variants (ví dụ: italic, underline)
- ✅ Thêm color props
- ✅ Thay đổi default font

**CÁCH DÙNG:**

```tsx
<AppText bold>Tiêu đề</AppText>  // ✅ Tự động dùng font bold
<AppText>Nội dung</AppText>      // ✅ Tự động dùng font regular
```

**VÍ DỤ MỞ RỘNG:**

```typescript
interface AppTextProps extends TextProps {
  bold?: boolean;
  italic?: boolean;      // ← Thêm
  color?: keyof Colors;  // ← Thêm
}

const AppText = ({ bold, italic, color, ...props }: AppTextProps) => {
  return (
    <Text
      style={[
        bold ? styles.bold : styles.regular,
        italic && styles.italic,
        color && { color: theme.colors[color] },
        props.style,
      ]}
    >
      {props.children}
    </Text>
  );
};
```

---

#### **📄 `components/Input.tsx`** - Form Input

```typescript
interface InputProps extends TextInputProps {
  label?: string;
  errorMessage?: string;
  containerStyle?: StyleProp<ViewStyle>;
  // ...
}
```

**KHI NÀO SỬA:**

- ✅ Thêm input types (ví dụ: search input với icon)
- ✅ Thêm validation states (success state)
- ✅ Thêm helper text

**VÍ DỤ MỞ RỘNG:**

```typescript
interface InputProps extends TextInputProps {
  label?: string;
  errorMessage?: string;
  successMessage?: string; // ← Thêm
  icon?: React.ReactNode; // ← Thêm icon
}
```

---

#### **📄 `components/GreenButton.tsx`** - Button Component

```typescript
interface ButtonProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  // ...
}
```

**KHI NÀO SỬA:**

- ✅ Thêm variant mới (ví dụ: "danger", "ghost")
- ✅ Thêm sizes mới
- ✅ Thêm states (focused, pressed)

**VÍ DỤ THÊM VARIANT:**

```typescript
interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "danger"; // ← Thêm danger
}

const getVariantStyles = () => {
  switch (variant) {
    case "danger": // ← Thêm case mới
      return {
        backgroundColor: theme.colors.error,
        borderColor: theme.colors.error,
      };
    // ... other cases
  }
};
```

---

#### **📄 `components/ModalInfo.tsx`** - Modal Component

```typescript
interface ModalInfoProps {
  isVisible: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}
```

**KHI NÀO SỬA:**

- ✅ Thêm modal types (success, error, warning)
- ✅ Thêm animations
- ✅ Thêm close button

---

## 📁 **5. APP FOLDER** - Screens & Routing

### **Vai trò:** Screens của app, sử dụng Expo Router

---

#### **📄 `app/_layout.tsx`** - Root Layout

```typescript
export default function RootLayout() {
  // Load fonts
  // Setup navigation
  // Global providers
}
```

**KHI NÀO SỬA:**

- ✅ Load fonts mới
- ✅ Add global providers (Auth, Theme)
- ✅ Setup navigation guards

---

#### **📄 `app/(auth)/login.tsx`** - Login Screen

**KHI NÀO SỬA:**

- ✅ Thay đổi UI/UX của login
- ✅ Thêm validation rules
- ✅ Integrate API

---

## 🎯 **QUICK REFERENCE - Khi nào sửa gì?**

| Muốn làm gì?            | Sửa file nào?                                    |
| ----------------------- | ------------------------------------------------ |
| 🎨 Đổi màu toàn app     | `theme/colors.ts`                                |
| 🔤 Đổi font chữ         | `theme/typography.ts` + `app/_layout.tsx`        |
| 📏 Đổi spacing/padding  | `theme/layout.ts`                                |
| 🛣️ Thêm screen mới      | `app/...` + `constants/routes.ts`                |
| 💬 Đổi error message    | `constants/messages.ts`                          |
| 🖼️ Thêm ảnh mới         | `constants/images.ts`                            |
| ✅ Đổi validation rule  | `utils/validateXXX.ts` + `constants/messages.ts` |
| 🧩 Tạo component mới    | `components/NewComponent.tsx`                    |
| 🔧 Thêm helper function | `utils/newHelper.ts`                             |

---

## 🔄 **WORKFLOW - Ví dụ thực tế**

### **Ví dụ 1: Muốn đổi màu primary từ xanh lá → xanh dương**

**Bước 1:** Sửa `theme/colors.ts`

```typescript
export const colors: Colors = {
  primary: "#0066CC", // ← Chỉ sửa 1 dòng này
  // ...
};
```

**Kết quả:** TẤT CẢ buttons, texts, borders dùng màu primary → tự động đổi màu! 🎉

---

### **Ví dụ 2: Muốn thêm màn hình "Settings"**

**Bước 1:** Tạo file `app/(app)/settings.tsx`

```tsx
export default function SettingsScreen() {
  return (
    <View>
      <AppText>Settings</AppText>
    </View>
  );
}
```

**Bước 2:** Thêm route vào `constants/routes.ts`

```typescript
export const ROUTES = {
  APP: {
    HOME: "/(app)/home" as const,
    SETTINGS: "/(app)/settings" as const, // ← Thêm dòng này
  },
};
```

**Bước 3:** Navigate đến settings

```tsx
router.push(ROUTES.APP.SETTINGS); // ✅ Type-safe!
```

---

### **Ví dụ 3: Muốn validation password phải 12 ký tự thay vì 8**

**Bước 1:** Sửa `utils/validatePassword.tsx`

```typescript
const validatePassword = (password: string): boolean => {
  const re =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/;
  //                                                                          ↑↑ 8→12
  return re.test(password);
};
```

**Bước 2:** Sửa message trong `constants/messages.ts`

```typescript
export const VALIDATION_MESSAGES = {
  PASSWORD_TOO_SHORT: (minLength: number) =>
    `Password must be at least ${minLength} characters`, // ✅ Dynamic
};
```

**Bước 3:** Dùng trong screen

```tsx
if (!validatePassword(password)) {
  setError(VALIDATION_MESSAGES.PASSWORD_TOO_SHORT(12)); // ← Pass 12
}
```

---

## 📊 **DEPENDENCY GRAPH**

```
app/screens
    ↓ import
components/
    ↓ import
theme/ ← Không import từ ai (foundation)
utils/ ← Không import từ ai (pure functions)
constants/ ← Không import từ ai (static data)
```

**Quy tắc:**

- ✅ Screens CÓ THỂ import: components, theme, utils, constants
- ✅ Components CÓ THỂ import: theme, utils, constants
- ❌ Theme KHÔNG import từ ai
- ❌ Utils KHÔNG import từ components/screens
- ❌ Constants KHÔNG import từ components/screens

---

## 🎓 **BEST PRACTICES**

### **1. Theme:**

- ✅ LUÔN dùng `theme.colors.primary` thay vì `"#057457"`
- ✅ LUÔN dùng `theme.layout.spacing.md` thay vì `16`
- ✅ Thêm màu mới → update `theme.types.ts` trước

### **2. Constants:**

- ✅ LUÔN dùng `ROUTES.AUTH.LOGIN` thay vì `"/(auth)/login"`
- ✅ LUÔN dùng `VALIDATION_MESSAGES.REQUIRED("Email")` thay vì hardcode string
- ✅ Group messages theo category (VALIDATION, SUCCESS, ERROR)

### **3. Utils:**

- ✅ Pure functions - no side effects
- ✅ Export default cho single function
- ✅ Export named cho multiple functions
- ✅ Add JSDoc comments

### **4. Components:**

- ✅ TypeScript interfaces cho props
- ✅ Extend native component types (TextProps, ViewProps)
- ✅ Use StyleProp<ViewStyle> thay vì object
- ✅ Export default component

---

**Kết luận:** Hiểu được vai trò từng folder/file → code maintainable, scalable, professional! 🚀
