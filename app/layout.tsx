import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600","700", "900"] });

export const metadata = {
  title: "Meta Tourism Tele Presence by Kühl",
  description: "Platform Meta-Tourism Real-Time pertama di dunia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body
        suppressHydrationWarning={true}
        className={`${poppins.className} bg-[#0A192F] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
