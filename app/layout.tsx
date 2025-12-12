import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "I built this",
  description: "a platform for sharing projects",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}  antialiased`}>
        <header className="container">I build this</header>
        <main>{children}</main>
        <footer className="container">I want this</footer>
      </body>
    </html>
  )
}
