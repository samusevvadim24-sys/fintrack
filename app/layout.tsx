import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import ViewportController from "./components/ViewportController";

export const metadata: Metadata = {
  title: "FinTrack",
  description: "Совместное управление домашним бюджетом",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <ViewportController />
        {children}
      </body>
    </html>
  );
}
