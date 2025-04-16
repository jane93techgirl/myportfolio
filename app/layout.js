import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "myproject - Jane",
  description: "Welcome to Jane's project portfolio",
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
