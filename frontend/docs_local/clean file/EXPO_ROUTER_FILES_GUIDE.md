# 🔄 Giải thích: Tại sao Expo Router tự tạo lại file đã xóa?

## ❓ **VẤN ĐỀ**

Khi bạn build app, Expo Router tự động tạo lại các file bạn đã xóa, và các file này thường **rỗng** hoặc chỉ có template code.

**Ví dụ:**

- Bạn xóa file `src/app/index.tsx`
- Build lại → File `index.tsx` xuất hiện lại, nội dung rỗng
- Lỗi: "Screen not found" hoặc blank screen

---

## 🎯 **NGUYÊN NHÂN**

### **1. Expo Router File-Based Routing** 📁

Expo Router sử dụng **file-based routing** giống Next.js:

- Cấu trúc folder **TỰ ĐỘNG** map thành routes
- Mỗi file `.tsx` trong `app/` folder = 1 route/screen

**Cách hoạt động:**

```
src/app/
├── index.tsx          → Route: "/"
├── about.tsx          → Route: "/about"
├── (auth)/
│   ├── login.tsx      → Route: "/(auth)/login"
│   └── register.tsx   → Route: "/(auth)/register"
└── (tabs)/
    ├── home.tsx       → Route: "/(tabs)/home"
    └── profile.tsx    → Route: "/(tabs)/profile"
```

---

### **2. Metro Bundler Cache** 💾

Metro bundler (React Native bundler) cache cấu trúc file:

- Khi bạn xóa file, cache vẫn giữ reference
- Build lại → Metro nghĩ file vẫn tồn tại
- Expo Router tự tạo lại file rỗng để tránh crash

---

### **3. TypeScript Generated Types** 📝

Expo Router tự động generate TypeScript types cho routes:

- File `expo-env.d.ts` chứa route types
- Nếu bạn có import/reference đến route đã xóa
- TypeScript vẫn expect file đó tồn tại

---

### **4. Stack.Screen trong \_layout.tsx** 🗂️

Nếu bạn khai báo screen trong `_layout.tsx` nhưng file không tồn tại:

```tsx
// src/app/_layout.tsx
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" /> {/* ← File index.tsx không tồn tại */}
      <Stack.Screen name="about" /> {/* ← File about.tsx không tồn tại */}
    </Stack>
  );
}
```

→ Expo Router sẽ tự tạo lại các file này!

---

## ✅ **CÁCH KHẮC PHỤC**

### **Bước 1: Xóa Cache** 🧹

```bash
# Xóa Metro bundler cache
npx expo start -c

# Hoặc xóa thủ công
rm -rf .expo
rm -rf node_modules/.cache
rm -rf /tmp/metro-*
rm -rf /tmp/haste-*

# Restart bundler
npx expo start --clear
```

---

### **Bước 2: Kiểm tra \_layout.tsx** 📋

**Kiểm tra TẤT CẢ file `_layout.tsx` trong project:**

```bash
find src/app -name "_layout.tsx" -type f
```

**Đảm bảo chỉ khai báo screen TỒN TẠI:**

```tsx
// ❌ SAI - Khai báo screen không tồn tại
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" /> {/* File index.tsx không có */}
      <Stack.Screen name="about" /> {/* File about.tsx không có */}
    </Stack>
  );
}

// ✅ ĐÚNG - Chỉ khai báo screen tồn tại hoặc không khai báo gì
export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Expo Router tự động detect files */}
    </Stack>
  );
}

// ✅ HOẶC khai báo đầy đủ nếu cần custom
export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="welcome" /> {/* ✅ File welcome.tsx CÓ */}
      <Stack.Screen name="login" /> {/* ✅ File login.tsx CÓ */}
      <Stack.Screen name="register" /> {/* ✅ File register.tsx CÓ */}
    </Stack>
  );
}
```

---

### **Bước 3: Xóa file auto-generated** 🗑️

```bash
# Xóa các file rỗng/auto-generated
cd src/app
rm -f index.tsx      # Nếu bạn không dùng
rm -f about.tsx      # Nếu bạn không dùng
# ... xóa các file khác bạn không cần
```

---

### **Bước 4: Clean Build** 🔨

```bash
# 1. Stop bundler (Ctrl+C)

# 2. Xóa build artifacts
rm -rf .expo
rm -rf android/app/build
rm -rf ios/build

# 3. Reinstall dependencies (optional, nếu vẫn lỗi)
rm -rf node_modules
npm install

# 4. Start clean
npx expo start -c
```

---

### **Bước 5: Git ignore các file không cần** 📝

Thêm vào `.gitignore`:

```gitignore
# Expo auto-generated
.expo/
expo-env.d.ts

# Metro cache
.metro-health-check*
/tmp/metro-*
/tmp/haste-*

# Build artifacts
dist/
web-build/
android/app/build/
ios/build/
```

---

## 🎯 **BEST PRACTICES**

### **1. Không khai báo screen trong \_layout.tsx nếu không cần custom**

```tsx
// ✅ Recommended - Let Expo Router auto-detect
export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Expo Router tự động tìm tất cả .tsx files */}
    </Stack>
  );
}
```

**Chỉ khai báo khi cần:**

- Custom options cho từng screen
- Control thứ tự screen
- Hide screen khỏi navigation

---

### **2. Dùng .gitkeep cho empty folders (nếu cần)**

```bash
# Nếu muốn giữ folder nhưng không có file
touch src/app/(tabs)/.gitkeep
```

---

### **3. Restart bundler sau khi thay đổi cấu trúc file**

```bash
# Luôn restart với -c flag
npx expo start -c
```

---

### **4. Check routing với Expo Dev Tools**

Khi app đang chạy:

- Press `m` để mở menu
- Press `r` để reload
- Press `shift+m` để toggle dev menu
- Check routing tree

---

## 🔍 **KIỂM TRA PROJECT CỦA BẠN**

### **Cấu trúc hiện tại của bạn:**

```
src/app/
├── _layout.tsx          ← Kiểm tra file này
├── +html.tsx            ← Expo-generated, CẦN GIỮ
├── +not-found.tsx       ← Expo-generated, CẦN GIỮ
└── (auth)/
    ├── _layout.tsx      ← Kiểm tra file này
    ├── welcome.tsx      ← Screen của bạn ✅
    ├── login.tsx        ← Screen của bạn ✅
    ├── register.tsx     ← Screen của bạn ✅
    └── forgot-password.tsx ← Screen của bạn ✅
```

### **Files BẮT BUỘC phải có:**

- ✅ `src/app/_layout.tsx` - Root layout
- ✅ `src/app/+not-found.tsx` - 404 page (Expo tự tạo, GIỮ LẠI)
- ✅ `src/app/+html.tsx` - HTML wrapper (Expo tự tạo, GIỮ LẠI)

### **Files có prefix + là special files của Expo:**

- `+html.tsx` - Custom HTML (web only)
- `+not-found.tsx` - 404 page
- `_layout.tsx` - Layout wrapper

**KHÔNG XÓA các file có prefix + hoặc \_**

---

## 📋 **CHECKLIST DỌN DẸP**

### **Step 1: Kiểm tra \_layout.tsx**

```bash
# Xem nội dung
cat src/app/_layout.tsx
cat src/app/(auth)/_layout.tsx
```

**Đảm bảo:**

- [ ] Không khai báo `<Stack.Screen name="index" />` nếu không có `index.tsx`
- [ ] Chỉ khai báo screens thực sự tồn tại
- [ ] Hoặc để Expo Router tự detect (không khai báo gì)

---

### **Step 2: Xóa cache**

```bash
# Run trong terminal
npx expo start -c
```

**Nếu vẫn lỗi:**

```bash
# Deep clean
rm -rf .expo
rm -rf node_modules/.cache
rm -rf /tmp/metro-*
npx expo start -c
```

---

### **Step 3: Xóa file không cần**

**Chỉ xóa nếu chắc chắn không dùng:**

```bash
cd src/app
# Xóa index.tsx nếu bạn không dùng root route "/"
# rm index.tsx
```

**KHÔNG xóa:**

- `_layout.tsx` - Bắt buộc
- `+not-found.tsx` - Expo cần
- `+html.tsx` - Expo cần

---

### **Step 4: Test**

```bash
# 1. Start clean
npx expo start -c

# 2. Test navigation
# Navigate đến các screen và xem có lỗi không

# 3. Check console
# Không có warning về "Screen not found"
```

---

## 🚨 **TROUBLESHOOTING**

### **Vấn đề 1: File vẫn bị tạo lại sau khi xóa**

**Nguyên nhân:** `_layout.tsx` vẫn khai báo screen

**Fix:**

```tsx
// Kiểm tra src/app/_layout.tsx
// Xóa hoặc comment out screen không tồn tại
export default function RootLayout() {
  return (
    <Stack>
      {/* <Stack.Screen name="index" /> */} {/* ← Comment out */}
    </Stack>
  );
}
```

---

### **Vấn đề 2: Blank screen khi navigate**

**Nguyên nhân:** File tồn tại nhưng rỗng (auto-generated)

**Fix:**

```bash
# Xóa file rỗng
rm src/app/index.tsx

# Hoặc tạo nội dung đúng
echo 'export default function Index() { return null; }' > src/app/index.tsx

# Clear cache
npx expo start -c
```

---

### **Vấn đề 3: TypeScript lỗi "Cannot find module"**

**Nguyên nhân:** Types cache outdated

**Fix:**

```bash
# Restart TypeScript server
# Trong VS Code: Cmd+Shift+P → "TypeScript: Restart TS Server"

# Hoặc
rm -rf node_modules/.cache
npm install
```

---

## 💡 **GIẢI PHÁP CHO PROJECT CỦA BẠN**

### **Dựa vào cấu trúc bạn có:**

```tsx
// src/app/_layout.tsx
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Không cần khai báo gì, Expo Router tự detect */}
      {/* Nó sẽ tự tìm (auth)/ folder */}
    </Stack>
  );
}
```

```tsx
// src/app/(auth)/_layout.tsx
import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Auto-detect welcome.tsx, login.tsx, register.tsx, forgot-password.tsx */}
    </Stack>
  );
}
```

**Hoặc nếu muốn control thứ tự:**

```tsx
// src/app/(auth)/_layout.tsx
export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="welcome" />
      <Stack.Screen name="login" />
      <Stack.Screen name="register" />
      <Stack.Screen name="forgot-password" />
      {/* Chỉ khai báo những file TỒN TẠI */}
    </Stack>
  );
}
```

---

## 🎯 **COMMANDS CHEAT SHEET**

```bash
# Clean cache và restart
npx expo start -c

# Deep clean
rm -rf .expo && rm -rf node_modules/.cache && npx expo start -c

# Find all layout files
find src/app -name "_layout.tsx"

# Check current structure
tree src/app -L 3

# Rebuild from scratch
rm -rf .expo node_modules
npm install
npx expo start -c
```

---

## 📚 **TÀI LIỆU THAM KHẢO**

- [Expo Router File-based Routing](https://docs.expo.dev/router/introduction/)
- [Metro Bundler Caching](https://facebook.github.io/metro/docs/configuration#cacheversion)
- [Expo CLI Commands](https://docs.expo.dev/more/expo-cli/)

---

**Kết luận:**

1. ✅ Xóa cache: `npx expo start -c`
2. ✅ Kiểm tra `_layout.tsx` không khai báo screen không tồn tại
3. ✅ GIỮ LẠI file có prefix `+` (Expo cần)
4. ✅ Restart bundler sau khi thay đổi cấu trúc

**Bạn sẽ không còn bị tự tạo lại file nữa!** 🎉
