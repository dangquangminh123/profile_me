# Quang Minh Portfolio — Next.js Landing Page

Landing page portfolio cá nhân tập trung vào case study thương mại điện tử B2C/B2B thực chiến.

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- CSS animation + IntersectionObserver
- `next/image` cho ảnh chân dung

## Chạy dự án

```bash
npm install
npm run dev
```

Mở `http://localhost:3000`.

Build production:

```bash
npm run build
npm run start
```

## Chỗ dễ sửa

- Nội dung dự án, dịch vụ, cam kết, link liên hệ: `data/portfolio.ts`
- Bố cục chính: `components/PortfolioLanding.tsx`
- Style, animation, responsive: `app/globals.css`
- Ảnh cá nhân: `public/profile.jpg`
- SEO metadata: `app/layout.tsx`

## Link đã gắn sẵn

- Live project: https://cuahanglina.com
- Facebook: https://www.facebook.com/angquangminh.928718/
- Zalo: https://zalo.me/0898479840
- Phone: 0898 479 840

## Các phần đã có

- Header fixed + menu mobile
- Hero có ảnh cá nhân + floating tech cards
- Auto-scrolling tech ticker
- Case-study slider tự chạy + Previous/Next + pagination
- System capabilities cards
- Sơ đồ module/layer
- Danh sách 27 tình huống nghiệp vụ, có mở rộng/thu gọn
- Gallery poster-style
- Services
- Working commitments
- Contact Facebook/Zalo/Phone
- Footer
- Scroll reveal, hover, floating, slider animation
- Responsive desktop/tablet/mobile
- Reduced-motion accessibility
