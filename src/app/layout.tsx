import type { Metadata } from "next";
import "./globals.css";
import { Space_Grotesk} from 'next/font/google'

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    variable: '--font-space-grotesk',
})

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
    <html lang="en" className={` ${spaceGrotesk.variable}`}>
        <head>
          </head>
      <body
        className={`font-spacegrotesk antialiased `}
      >
        {children}
      </body>
    </html>
  );
}
