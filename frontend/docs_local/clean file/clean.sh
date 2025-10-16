#!/bin/bash

# 🧹 Clean Expo Cache Script
# Sử dụng: bash clean.sh

echo "🧹 Bắt đầu dọn dẹp cache..."

# 1. Xóa Expo cache
if [ -d ".expo" ]; then
  echo "🗑️  Xóa .expo folder..."
  rm -rf .expo
  echo "✅ Đã xóa .expo"
else
  echo "ℹ️  .expo không tồn tại"
fi

# 2. Xóa Metro cache
if [ -d "node_modules/.cache" ]; then
  echo "🗑️  Xóa node_modules/.cache..."
  rm -rf node_modules/.cache
  echo "✅ Đã xóa node_modules/.cache"
else
  echo "ℹ️  node_modules/.cache không tồn tại"
fi

# 3. Xóa Metro temp files
echo "🗑️  Xóa Metro temp files..."
rm -rf /tmp/metro-* /tmp/haste-* 2>/dev/null
echo "✅ Đã xóa Metro temp files"

# 4. Xóa Android build cache (optional)
if [ -d "android/app/build" ]; then
  echo "🗑️  Xóa Android build cache..."
  rm -rf android/app/build
  echo "✅ Đã xóa Android build cache"
fi

# 5. Xóa iOS build cache (optional)
if [ -d "ios/build" ]; then
  echo "🗑️  Xóa iOS build cache..."
  rm -rf ios/build
  echo "✅ Đã xóa iOS build cache"
fi

echo ""
echo "✅ Hoàn tất dọn dẹp!"
echo ""
echo "📋 Bước tiếp theo:"
echo "   1. npx expo start -c    # Start với clear cache"
echo "   2. Press 'a' để mở Android"
echo "   3. Press 'i' để mở iOS"
echo ""
