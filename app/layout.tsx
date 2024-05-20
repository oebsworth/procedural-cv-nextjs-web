import type { Metadata } from "next";
import "@styles/main.css";

export const metadata: Metadata = {
  title: "Oliver Ebsworth - C.V.",
  description: "My procedural C.V.",
};

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
