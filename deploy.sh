#!/bin/bash
set -e

echo "=========================================="
echo "🚀 BẮT ĐẦU CẬP NHẬT CODE CHO PROFILE NEXT.JS"
echo "=========================================="

# 1. Kéo code mới nhất từ branch main
echo "📥 1. Đang pull code mới nhất từ GitHub..."
git pull origin main

# 2. Cài đặt các gói phụ thuộc (nếu có thay đổi)
echo "📦 2. Đang kiểm tra & cài đặt dependencies..."
npm install --production=false

# 3. Build bản production Next.js
echo "🔨 3. Đang build Next.js..."
npm run build

# 4. Tắt sạch tiến trình cũ và khởi động lại
echo "🔄 4. Đang làm mới hoàn toàn tiến trình PM2..."
pm2 delete profile-me || true
pkill -f "next" || true
pm2 start npm --name "profile-me" -- start -- -p 3001
pm2 save

echo "=========================================="
echo "✅ HOÀN TẤT CẬP NHẬT WEBSITE THÀNH CÔNG!"
echo "=========================================="
