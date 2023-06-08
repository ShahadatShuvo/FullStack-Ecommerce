import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
