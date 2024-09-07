import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header/Header";
import { Toaster } from "@/components/ui/sonner"

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          // disableTransitionOnChange
        >
          <div
            className="min-h-[100dvh] flex flex-col"
            // style={{
            //   background: 'url("/images/heartbeat.png") no-repeat',
            //   backgroundSize: '100% auto',  // Stretch the image to fill width, keep height auto
            // }}
          >
            <Header />
            <main className="relative flex flex-1 flex-col gap-6 p-6 lg:gap-8 lg:p-8">
              {children}
            </main>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
