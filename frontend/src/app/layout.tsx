import Navbar from "@/components/HomePage/Navbar";
import "./globals.css";
import Footer from "@/components/HomePage/Footer";

export const metadata = {
  title: "FullStack Ecommerce",
  description: "A fullstack ecommerce application built with React and Django",
  icons: {
    icon: "/img/ecom.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Function to update the context value

  return (
    <html lang="en">
      <body className="text-black" suppressHydrationWarning={true}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
