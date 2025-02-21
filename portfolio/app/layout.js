import { Geist, Geist_Mono, Poppins  } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import ParticlesComponent from "./effects/Particles";
import { ToastContainer } from 'react-toastify';
import { Zoom } from 'react-toastify';
import { DataProvider } from "./context/contextProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600"],
});


export const metadata = {
  title: "Personal Portfolio",
  description: "Welcome to my personal portfolio where I showcase my skills and projects.",
  keywords: "web development, portfolio, Next.js, frontend, backend, developer, fullstack",
  author: "Hruday Kumar"
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <DataProvider>
          <ToastContainer position="top-center" theme="colored" transition={Zoom} />
             <Header/>
            <ParticlesComponent id="particles"/>
          {children}
        </DataProvider>
      </body>
    </html>
  );
}
