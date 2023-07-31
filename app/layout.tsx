import "./global.css";
import NavBar from "components/NavBar.tsx";
import ViewCounter from "components/ViewCounter";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <div className="">{children}</div>
      </body>
    </html>
  );
}
