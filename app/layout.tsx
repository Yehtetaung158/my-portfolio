// app/layout.tsx  (or wherever your RootLayout lives)
import { ThemeProvider } from "next-themes";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import localFont from "next/font/local";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import StarSun from "@/components/StarSun";
import DaySky from "@/components/DaySky";
import { ClientContent } from "@/components/ClientContent";
import NavBar from "@/components/nav/navBar";
import Theme from "@/components/Theme";
import ProjectCards from "@/components/project/projectCards";
// import tag_logo from "@/public/tag_logo.jpg";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const tagesschrift = localFont({
  src: "../public/fonts/Tagesschrift-Regular.ttf",
  variable: "--font-tagesschrift",
  display: "swap",
});

const AlumniSansInlineOne = localFont({
  src: "../public/fonts/AlumniSansInlineOne-Regular.ttf",
  variable: "--font-alumni-sans-inline-one",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ye Htet Aung - web.dev",
  description: "Ye Htet Aung's personal website showcasing projects, skills, and contact information.",
  icons:{
    icon: "/tag_logo_3.png",
    apple: "/tag_logo_3.png",
    shortcut: "/tag_logo_2.png",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppins.variable} ${geistSans.variable} ${geistMono.variable} ${tagesschrift.variable} ${AlumniSansInlineOne.variable}`}
      style={{color:"transparent",filter:"invert(0)"}}
    >
      <body
        className={`
        ${poppins.variable}
        ${geistSans.variable}
        ${geistMono.variable}
        ${tagesschrift.variable}
        ${AlumniSansInlineOne.variable}
      `}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="relative flex min-h-screen flex-col items-center justify-between overflow-hidden text-[#1D1D1F] dark:text-[#F9F9F9] bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
            {/* <NavBar /> */}
            {/* <Theme /> */}
            <ClientContent>{children}</ClientContent>
            {/* <div className="absolute inset-0 -z-10">
            </div>
            <div className="relative z-30 w-full max-w-[1280px] flex flex-col flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400">
            </div>
            <Toaster position="top-center" richColors closeButton /> */}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
