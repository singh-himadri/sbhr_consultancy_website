"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  if (isAdmin) {
    return <main style={{ flex: "1 0 auto", width: "100%" }}>{children}</main>;
  }

  return (
    <>
      <Header />
      <main style={{ flex: "1 0 auto" }}>{children}</main>
      <Footer />
    </>
  );
}
