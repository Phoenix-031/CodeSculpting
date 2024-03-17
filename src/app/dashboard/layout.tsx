import Link from "next/link";
import Navbar from "@/components/navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col h-screen font-main p-4 justify-center items-center">
      <Navbar />
      <main className="flex-1 bg-background p-4">{children}</main>
    </div>
  );
}
