import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "myproject - jane",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        <Navbar />
        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}
