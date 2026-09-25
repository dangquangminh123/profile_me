import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "QM.dev | Thiết kế Website & Thương mại điện tử chuyên nghiệp",
  description:
    "Dịch vụ thiết kế website bán hàng và cho thuê website thương mại điện tử trọn gói. Hệ thống quản lý sản phẩm, tồn kho, đơn hàng, thanh toán, pricing và dashboard quản trị — đã triển khai thực tế.",
  keywords: [
    "Thiết kế website",
    "Website bán hàng",
    "Thương mại điện tử",
    "E-commerce",
    "B2B",
    "B2C",
    "Quản lý tồn kho",
    "Dashboard",
    "Next.js",
    "Website trọn gói",
  ],
  openGraph: {
    title: "QM.dev | Thiết kế Website Thương mại điện tử chuyên nghiệp",
    description:
      "Giải pháp website bán hàng hoàn chỉnh: B2C + B2B, quản lý tồn kho, pricing engine, checkout, thanh toán, công nợ và dashboard quản trị.",
    type: "website",
    images: ["/hero-dashboard.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
