import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import Modal from "./components/modals/Modal";
import RegisterModal from "./components/modals/RegisterModal";
import { Toast, Toaster } from "react-hot-toast";
import ToasterProvider from "./components/providers/ToasterProvider";
import LoginModal from "./components/modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";
import RentModal from "./components/modals/RentModal";
import Search from "./components/navbar/Search";
import SearchModal from "./components/modals/SearchModal";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb full stack clone",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        {/* <ClientOnly>*/} {/*To solve hydration error */}
        <Toaster />
        {/* <ToasterProvider/> */} {/* Toast wrapped within a component */}
        <Navbar currentUser={currentUser} />
        {/* Modals */}
        <RentModal />
        <SearchModal/>
        <RegisterModal />
        <LoginModal />
        {/* <Modal isOpen actionLabel="Submit" title="Login"/> */}
        {/* </ClientOnly> */}
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
