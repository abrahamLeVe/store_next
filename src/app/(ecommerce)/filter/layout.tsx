"use client";
import FilterResult from "@/components/filter/FilterResult";
import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navbar/NavBar";

export default function LobbyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />
      <main className="flex flex-col max-w-screen-xl mx-auto items-center gap-5">
        {children}
        <FilterResult />
      </main>
      <Footer />
    </>
  );
}