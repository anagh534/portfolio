import "./globals.css";
import ClientLayout from "./ClientLayout";
import { metadata } from "./metadata";

export { metadata };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
