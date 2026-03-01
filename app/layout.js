import "./globals.css";
import ClientLayout from "./ClientLayout";
import { metadata as meta, viewport as view } from "./metadata";

export const metadata = meta;
export const viewport = view;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
