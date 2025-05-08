import React from "react";
import "./globals.css";

export const metadata = {
    title: "Frontend",
    icons: {
    icon: "/icons/favicon.ico",
  },
    description: "Projeto pra mostrar tudo que eu sei",

};

export default function RootLayout({ children }) {
    return (
        <html>
            <body>{children}</body>
        </html>
    );
}

