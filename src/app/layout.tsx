import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PoV DAO",
  description: "Powering Bitcoin's next chapter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <head>
              <link href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap" rel="stylesheet" />
          </head>
      <body
      style={{ fontFamily: "'Geist', sans-serif", fontVariationSettings: "'wdth' 62.5" }}
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
