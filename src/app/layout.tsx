import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IBNSULYYMAN | Global Creative & Technology Solutions Studio",
  description:
    "Full-spectrum technology solutions studio. With emotion + engineering, we push the boundaries of design, websites, apps, WebGL, video editing, and technical training.",
  icons: {
    icon: "/brand/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased selection:bg-[#006EFF] selection:text-white">
        {children}
      </body>
    </html>
  );
}
