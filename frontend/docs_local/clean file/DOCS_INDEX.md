# 📚 Documentation Index - UMX Project

## 🎯 **Quick Access**

Chọn doc phù hợp với vấn đề của bạn:

| Vấn đề                     | Đọc file này                                                                   |
| -------------------------- | ------------------------------------------------------------------------------ |
| 🔄 File bị tạo lại tự động | [QUICK_FIX_FILES.md](./QUICK_FIX_FILES.md)                                     |
| 🧹 Cần dọn dẹp cache       | Chạy `bash clean.sh`                                                           |
| 📁 Hiểu cấu trúc project   | [PROJECT_STRUCTURE_GUIDE.md](./PROJECT_STRUCTURE_GUIDE.md)                     |
| 🎨 Đổi màu, font, spacing  | [PROJECT_STRUCTURE_GUIDE.md](./PROJECT_STRUCTURE_GUIDE.md) → Theme section     |
| ✅ Code có clean không?    | [FINAL_CODE_REVIEW.md](./FINAL_CODE_REVIEW.md)                                 |
| 🛣️ Thêm screen/route mới   | [PROJECT_STRUCTURE_GUIDE.md](./PROJECT_STRUCTURE_GUIDE.md) → Constants section |
| 🐛 Fix magic strings       | [IMPROVEMENT_GUIDE.md](./IMPROVEMENT_GUIDE.md)                                 |
| 📖 Expo Router chi tiết    | [EXPO_ROUTER_FILES_GUIDE.md](./EXPO_ROUTER_FILES_GUIDE.md)                     |

---

## 📖 **All Documentation Files**

### 1. **QUICK_FIX_FILES.md** ⚡

**Mục đích:** Giải pháp nhanh cho vấn đề file tự động tạo lại

**Nội dung:**

- ⚡ Giải pháp nhanh 3 bước
- 🎯 Nguyên nhân chính
- 🧹 Commands dọn dẹp
- 📋 Checklist kiểm tra
- 🚨 Troubleshooting

**Khi nào đọc:** Khi file bị tạo lại sau khi xóa, hoặc trước mỗi lần build

---

### 2. **EXPO_ROUTER_FILES_GUIDE.md** 📚

**Mục đích:** Hiểu sâu về Expo Router và Metro Bundler

**Nội dung:**

- ❓ Vấn đề là gì?
- 🎯 4 nguyên nhân chính
- ✅ Cách khắc phục chi tiết
- 🎯 Best practices
- 🔍 Deep dive Expo Router
- 📋 Checklist dọn dẹp
- 🚨 Troubleshooting guide

**Khi nào đọc:** Muốn hiểu TẠI SAO file bị tạo lại, học về Expo Router

---

### 3. **PROJECT_STRUCTURE_GUIDE.md** 🏗️

**Mục đích:** Hiểu vai trò từng folder/file, biết sửa gì ở đâu

**Nội dung:**

- 📁 Theme folder - Colors, Typography, Layout
- 📋 Constants folder - Routes, Messages, Images
- 🛠️ Utils folder - Validators, Helpers
- 🧩 Components folder - UI components
- 🌐 App folder - Screens & Routing
- 🎯 Quick Reference Table
- 🔄 Workflow examples
- 📊 Dependency graph

**Khi nào đọc:**

- Muốn đổi màu, font, spacing → Theme section
- Thêm screen mới → Constants section
- Tạo component mới → Components section
- Thêm validation → Utils section

---

### 4. **FINAL_CODE_REVIEW.md** ⭐

**Mục đích:** Đánh giá code quality, điểm cần cải thiện

**Nội dung:**

- 📊 Overall Score: 8.8/10
- ✅ Điểm mạnh (Theme, Constants, Components)
- ⚠️ Điểm cần cải thiện:
  - 🔴 Critical: Import paths, Button usage
  - 🟡 Medium: AppText types, Font loading
  - 🟢 Low: Inline styles, Comments
- 📋 Checklist fixes
- 🎯 Score breakdown
- 💡 Recommendations

**Khi nào đọc:** Muốn biết code có professional không, cần cải thiện gì

---

### 5. **IMPROVEMENT_GUIDE.md** 🎓

**Mục đích:** Hướng dẫn fix các issues (magic strings, validation messages, etc.)

**Nội dung:**

- 🔴 Issue #1: Magic Strings trong Routing
- 🔴 Issue #2: Validation Messages lặp lại
- 🔴 Issue #3-6: TypeScript, Import paths, etc.
- ✅ Giải pháp từng bước
- 📝 Code examples (Before/After)
- 📋 Checklist
- 🎯 Thứ tự ưu tiên

**Khi nào đọc:** Muốn học cách fix từng issue cụ thể, có code mẫu

---

### 6. **CODE_REVIEW.md** 📊

**Mục đích:** Code review ban đầu (7.5→8.8/10)

**Nội dung:**

- Đánh giá chi tiết từng category
- Issues found
- Recommendations
- Before improvement score

**Khi nào đọc:** Tham khảo lịch sử cải thiện code

---

### 7. **CODE_CLARITY_REVIEW.md** 💎

**Mục đích:** Đánh giá độ clean/clear của code (8.5/10)

**Nội dung:**

- Clarity assessment
- Readability
- Maintainability
- Professional level

**Khi nào đọc:** Muốn biết code có dễ đọc/maintain không

---

### 8. **FIXES_SUMMARY.md** 📝

**Mục đích:** Tóm tắt tất cả fixes đã làm

**Nội dung:**

- List of all fixes
- Files changed
- Before/After

**Khi nào đọc:** Tham khảo đã fix gì rồi

---

### 9. **FONT_GUIDE.md** 🔤

**Mục đích:** Hướng dẫn load và dùng fonts

**Nội dung:**

- Cách load fonts
- Dùng fonts trong components
- Fix font issues

**Khi nào đọc:** Muốn đổi font hoặc fix font loading issues

---

### 10. **FILES_ISSUE_SUMMARY.md** 📝

**Mục đích:** Tóm tắt vấn đề file tự động tạo lại

**Nội dung:**

- Vấn đề đã giải quyết
- Cấu trúc file hiện tại
- Tools đã tạo
- Next steps

**Khi nào đọc:** Quick summary của toàn bộ vấn đề files

---

## 🛠️ **Scripts & Tools**

### **clean.sh** 🧹

**Mục đích:** Dọn dẹp cache tự động

**Cách dùng:**

```bash
bash clean.sh
```

**Chức năng:**

- Xóa `.expo` folder
- Xóa `node_modules/.cache`
- Xóa Metro temp files
- Xóa Android/iOS build cache

---

## 🎯 **Workflows - Khi nào làm gì?**

### **Workflow 1: Fix lỗi file tự động tạo lại**

1. Đọc: [QUICK_FIX_FILES.md](./QUICK_FIX_FILES.md)
2. Chạy: `bash clean.sh`
3. Start: `npx expo start -c`

---

### **Workflow 2: Đổi màu toàn app**

1. Đọc: [PROJECT_STRUCTURE_GUIDE.md](./PROJECT_STRUCTURE_GUIDE.md) → Theme → Colors
2. Sửa: `src/theme/colors.ts`
3. Test: `npx expo start -c`

---

### **Workflow 3: Thêm screen mới**

1. Đọc: [PROJECT_STRUCTURE_GUIDE.md](./PROJECT_STRUCTURE_GUIDE.md) → App folder
2. Tạo: `src/app/(folder)/screen-name.tsx`
3. Thêm route: `src/constants/routes.ts`
4. Navigate: `router.push(ROUTES.XXX.SCREEN_NAME)`

---

### **Workflow 4: Fix validation messages**

1. Đọc: [IMPROVEMENT_GUIDE.md](./IMPROVEMENT_GUIDE.md) → Issue #2
2. Thêm message: `src/constants/messages.ts`
3. Dùng: `VALIDATION_MESSAGES.XXX`

---

### **Workflow 5: Improve code quality**

1. Đọc: [FINAL_CODE_REVIEW.md](./FINAL_CODE_REVIEW.md)
2. Làm theo checklist (Critical → Medium → Low)
3. Test: `npx expo start -c`

---

## 📊 **Reading Order - Theo mục đích**

### **🚀 Mới bắt đầu project:**

1. [PROJECT_STRUCTURE_GUIDE.md](./PROJECT_STRUCTURE_GUIDE.md) - Hiểu cấu trúc
2. [FINAL_CODE_REVIEW.md](./FINAL_CODE_REVIEW.md) - Biết code đang ở đâu
3. [IMPROVEMENT_GUIDE.md](./IMPROVEMENT_GUIDE.md) - Học cách improve

---

### **🐛 Gặp lỗi file tự tạo:**

1. [QUICK_FIX_FILES.md](./QUICK_FIX_FILES.md) - Fix nhanh
2. [EXPO_ROUTER_FILES_GUIDE.md](./EXPO_ROUTER_FILES_GUIDE.md) - Hiểu sâu
3. Chạy `bash clean.sh`

---

### **🎨 Muốn customize UI:**

1. [PROJECT_STRUCTURE_GUIDE.md](./PROJECT_STRUCTURE_GUIDE.md) → Theme section
2. Sửa `src/theme/colors.ts`, `typography.ts`, `layout.ts`

---

### **📱 Thêm features:**

1. [PROJECT_STRUCTURE_GUIDE.md](./PROJECT_STRUCTURE_GUIDE.md) → Quick Reference Table
2. Tạo components trong `src/components/`
3. Tạo screens trong `src/app/`
4. Thêm routes trong `src/constants/routes.ts`

---

## 🎓 **Learning Path**

### **Level 1: Beginner**

- Read: PROJECT_STRUCTURE_GUIDE.md
- Understand: Theme, Constants, Utils, Components
- Practice: Đổi màu, thêm message, tạo validator

### **Level 2: Intermediate**

- Read: IMPROVEMENT_GUIDE.md
- Understand: Magic strings, TypeScript best practices
- Practice: Refactor code, centralize constants

### **Level 3: Advanced**

- Read: EXPO_ROUTER_FILES_GUIDE.md, FINAL_CODE_REVIEW.md
- Understand: Expo Router internals, Metro Bundler
- Practice: Optimize performance, create custom layouts

---

## ⚡ **Quick Commands Reference**

```bash
# Clean cache
bash clean.sh

# Start clean
npx expo start -c

# Deep clean
rm -rf .expo node_modules && npm install && npx expo start -c

# Check structure
find src/app -name "*.tsx" | sort

# Find empty files
find src/app -name "*.tsx" -empty

# Run Android
npx expo run:android

# Run iOS
npx expo run:ios
```

---

## 📞 **Quick Help**

| Problem         | Solution                                     |
| --------------- | -------------------------------------------- |
| File bị tạo lại | `bash clean.sh && npx expo start -c`         |
| Đổi màu         | Edit `src/theme/colors.ts`                   |
| Thêm screen     | Create file + add to `routes.ts`             |
| Import lỗi      | Check path: `@/` not `@ /` (no space)        |
| Blank screen    | Check file không rỗng, có export default     |
| TypeScript lỗi  | Restart TS server (Cmd+Shift+P → Restart TS) |

---

## 🎯 **Current Status**

✅ **Code Quality:** 8.8/10 (Professional level)
✅ **Structure:** Clean & organized
✅ **Theme System:** Complete
✅ **Constants:** Centralized
✅ **Cache:** Cleaned

**Next:** Fix remaining critical issues → 9.5/10! 🚀

---

## 📚 **External Resources**

- [Expo Router Docs](https://docs.expo.dev/router/introduction/)
- [Metro Bundler](https://facebook.github.io/metro/)
- [React Navigation](https://reactnavigation.org/)
- [TypeScript Best Practices](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html)

---

**Happy Coding! 🚀**

_Last Updated: October 16, 2025_
