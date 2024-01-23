import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "COCI PENIEL",
  description: "Peniel somos Todos",
  icons: {
    icon: "./logoPeniel.svg",
  },
};

import { UserProvider } from "@auth0/nextjs-auth0/client";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>C.OCI PENIEL</title>
        <meta name="description" content="Peniel somos Todos" />
        <link rel="icon" href="./logoPeniel.svg" />
      </head>
      <UserProvider>
        <body>{children}</body>
      </UserProvider>
    </html>
  );
}
