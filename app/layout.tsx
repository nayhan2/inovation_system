import "./globals.css";
import { Inter, Roboto } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["700", "900"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Intelecta - Demo Website",
  description: "Platform Meta-Tourism Real-Time pertama di dunia",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className={`${roboto.className} bg-[#0A192F] text-white`}>
        {children}
      </body>
    </html>
  );
}
