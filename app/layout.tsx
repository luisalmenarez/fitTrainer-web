import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/header";
import Footer from "@/components/footer";
import { dataDescription } from "@/assets/data";

const BeVietnamPro = Be_Vietnam_Pro({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});
const SEO = dataDescription[0].descriptionSEO;

export const metadata: Metadata = {
  title: "Manuel Almenares | Entrenador Personalizado",
  description: SEO,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${BeVietnamPro.className} bg-black`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
