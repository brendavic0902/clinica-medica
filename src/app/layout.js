
import "./globals.css";
import Header from "@/Componentes/Header";

export const metadata = {
  title: "Brenda",
  description: "Clínica médica",
  charset: 'UTF-0',
  author: 'Brenda',
  keywords:'HTML, CSS, Java Script, React, Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}