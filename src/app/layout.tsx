import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import styles from "./layout.module.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Altishauser Unterdorffest",
  description: "Anmeldung für das Altishauser Unterdorffest 2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${inter.variable} antialiased`}>
        <div className={styles.pageWrapper}>
          <header className={styles.header}>
            <div className={styles.headerContent}>
              <Link href="/" className={styles.logo}>
                Unterdorffest
              </Link>
            </div>
          </header>
          
          <main className={styles.main}>
            {children}
          </main>
          
          <footer className={styles.footer}>
            <div className={styles.footerContent}>
              <p>© 2025 TecFox GmbH</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
