import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "هموند | پنل مدیریت",
  description: "داشبورد مدیریت فروش و سفارش‌های هموند",
};
const bakh = localFont({
  src: [
    {
      path: "./fonts/YekanBakhFaNum-VF.woff",
    },
  ],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      className={`h-full antialiased ${bakh.className}`}
      dir="rtl"
    >
      <body>{children}</body>
    </html>
  );
}
