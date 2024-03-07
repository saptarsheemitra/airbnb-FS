import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import Modal from "./components/modals/Modal";
import RegisterModal from "./components/modals/RegisterModal";
import { Toast, Toaster } from "react-hot-toast";
import ToasterProvider from "./components/providers/ToasterProvider";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb full stack clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        {/* <ClientOnly>*/} {/*To solve hydration error */}
        <Toaster/>
        {/* <ToasterProvider/> */} {/* Toast wrapped within a component */}
        <Navbar />
        <RegisterModal/> 
        {/* <Modal isOpen actionLabel="Submit" title="Login"/> */}
        {/* </ClientOnly> */}
        {children}
      </body>
    </html>
  );
}
