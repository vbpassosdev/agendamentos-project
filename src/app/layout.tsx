import "./globals.css";
import type { Metadata } from "next";
import { AdminShell } from "@/components/admin/admin-shell";

export const metadata: Metadata = {
  title: "Bela Agenda",
  description: "Sistema de gestao premium para saloes de beleza.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR" className="antialiased">
      <body className="font-sans">
        <AdminShell>{children}</AdminShell>
      </body>
    </html>
  );
}
