
import type { Metadata } from "next";


import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import { WagmiProviderWrapper } from "@/providers/wagmi";
import QueryProvider from "@/providers/react-query";
import AosInit from "./_components/layout/aos-init";
import Footer from "./_components/layout/footer";
import Nav from "./_components/layout/nav";
import Script from "next/script";
const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Landing Page | HCOLA",
  description:
    "HCOLA is a clear low or no sugar cola for health-conscious consumers. Clean ingredients, transparent labeling, and familiar taste without the sugar spike. Built to stay competitive in markets with sugar taxes while meeting modern regulations.",
  keywords: [
    "HCOLA",
    "Low Sugar Cola",
    "No Sugar Soda",
    "Clear Cola",
    "HCOLA Beverage",
    "Soft Drink",
    "Clean Label",
    "Sugar Tax Friendly",
    "Better For You Drinks",
    "Functional Beverage",
  ],
  creator: "TokenMinds",
  authors: {
    name: "HCOLA",
    url: process.env.NEXT_PUBLIC_APP_URL,
  },
  publisher: "HCOLA",
  applicationName: "HCOLA",
  twitter: {
    card: "summary_large_image",
    title: "Landing Page | HCOLA",
    description:
      "HCOLA is a clear low or no sugar cola with clean ingredients and transparent labeling. Familiar taste without the sugar spike.",
    creator: "tokenminds_co",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_APP_URL}/assets/logos/E3-Blockraise-2.svg`,
        width: 184,
        height: 183,
      },
    ],
  },
  openGraph: {
    title: "HCOLA | Landing Page",
    description:
      "HCOLA is a clear low or no sugar cola for modern, health-conscious consumers. Clean label and regulation ready.",
    url: process.env.NEXT_PUBLIC_APP_URL,
    siteName: "HCOLA",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_APP_URL}/assets/logos/E3-Blockraise-2.svg`,
        width: 184,
        height: 183,
      },
    ],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isMaintenance = process.env.NEXT_PUBLIC_MAINTENANCE_MODE;
  return (
    <html lang="en">
      <body className={`${robotoCondensed.variable}  antialiased bg-white`}>
        <WagmiProviderWrapper>
          <QueryProvider>
            {!isMaintenance && <AosInit />}
            {!isMaintenance && <Nav />}
            {children}
            {!isMaintenance && <Footer />}
          </QueryProvider>
        </WagmiProviderWrapper>
        {!isMaintenance && <Script
            id="tawk-to"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
               var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
                (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/695a30db59b3a3197b8893d6/1je44tnc2';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `,
            }}
        />}

      </body>
    </html>
  );
}
