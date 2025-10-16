# 📝 Hướng dẫn quản lý Font trong App

## ✅ Cấu trúc hiện tại

### 1. **Load Font ở Root (\_layout.tsx)**

```tsx
// src/app/_layout.tsx
const [loaded, error] = useFonts({
  "Roboto-Regular": require("../../assets/fonts/Roboto-Regular.ttf"),
});

// Chờ font load xong mới render app
if (!loaded && !error) {
  return null;
}
```

### 2. **Component AppText áp dụng font**

```tsx
// src/components/AppText.tsx
const styles = StyleSheet.create({
  appText: {
    fontFamily: "Roboto-Regular",
  },
});
```

### 3. **Tất cả màn hình và component đã dùng AppText**

- ✅ Welcome screen
- ✅ Login screen
- ✅ Register screen
- ✅ Forgot Password screen
- ✅ GreenButton component
- ✅ Input component
- ✅ Logo component
- ✅ ModalInfo component

---

## 🎨 Cách đổi font sau này

### **Cách 1: Thay thế font hiện tại**

1. Đặt file font mới vào `assets/fonts/` (ví dụ: `Inter-Regular.ttf`)
2. Cập nhật `src/app/_layout.tsx`:
   ```tsx
   const [loaded, error] = useFonts({
     "Inter-Regular": require("../../assets/fonts/Inter-Regular.ttf"),
   });
   ```
3. Cập nhật `src/components/AppText.tsx`:
   ```tsx
   const styles = StyleSheet.create({
     appText: {
       fontFamily: "Inter-Regular",
     },
   });
   ```

### **Cách 2: Thêm nhiều font variants (Regular, Bold, Italic...)**

1. Load tất cả variants trong `_layout.tsx`:

   ```tsx
   const [loaded, error] = useFonts({
     "Roboto-Regular": require("../../assets/fonts/Roboto-Regular.ttf"),
     "Roboto-Bold": require("../../assets/fonts/Roboto-Bold.ttf"),
     "Roboto-Italic": require("../../assets/fonts/Roboto-Italic.ttf"),
   });
   ```

2. Tạo file constants cho fonts:

   ```tsx
   // src/constants/fonts.ts
   export const Fonts = {
     regular: "Roboto-Regular",
     bold: "Roboto-Bold",
     italic: "Roboto-Italic",
   };
   ```

3. Cập nhật AppText để nhận prop variant:

   ```tsx
   // src/components/AppText.tsx
   import { Fonts } from "@/constants/fonts";

   const AppText = ({
     children,
     style,
     variant = "regular",
   }: {
     children: React.ReactNode;
     style?: object;
     variant?: "regular" | "bold" | "italic";
   }) => {
     return (
       <Text style={[{ fontFamily: Fonts[variant] }, style]}>{children}</Text>
     );
   };
   ```

4. Sử dụng:
   ```tsx
   <AppText variant="bold">Text đậm</AppText>
   <AppText variant="italic">Text nghiêng</AppText>
   ```

---

## 🚨 Lưu ý quan trọng

1. **KHÔNG dùng Text trực tiếp từ react-native** - luôn dùng `<AppText>`
2. **Font phải load xong** trước khi render app (đã config trong \_layout.tsx)
3. **Tên font phải khớp** giữa `useFonts()` và `fontFamily` style
4. **Nếu thêm font mới** - nhớ restart app để Expo cache lại fonts

---

## 📦 File fonts được lưu ở đâu?

```
assets/
  fonts/
    Roboto-Regular.ttf    ← Font hiện tại
```

---

## 🔍 Debug font không hiển thị

1. Kiểm tra file font tồn tại trong `assets/fonts/`
2. Kiểm tra tên font trong `useFonts()` khớp với `fontFamily`
3. Restart app: `npx expo start --clear`
4. Xem console có báo lỗi font không?
