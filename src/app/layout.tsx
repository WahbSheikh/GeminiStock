import type { Metadata } from "next";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import { TopBar } from "@/components/TopBar";

export const metadata: Metadata = {
  title: "GeminiStock",
  description: "Advanced stock tracking dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background text-foreground min-h-screen font-sans antialiased selection:bg-primary/30">
        <Sidebar />
        <TopBar />
        <main className="ml-64 pt-16 min-h-screen p-8 bg-background">
          {children}
        </main>
      </body>
    </html>
  );
}
