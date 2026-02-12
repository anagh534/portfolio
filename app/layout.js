import "./globals.css";
import ClientLayout from "./ClientLayout";
import { metadata as meta, viewport as view } from "./metadata";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
  weight: ["100", "300", "400", "500", "600", "700", "800"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = meta;
export const viewport = view;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${plusJakartaSans.variable}`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
