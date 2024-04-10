import { inter, afacad } from "@/app/ui/fonts";
import "@/app/ui/global.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "SpiroVR",
  description: "Engaging Spirometry Tests.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${afacad.className} bg-background`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}