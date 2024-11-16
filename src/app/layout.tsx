import "./globals.css";
import NavbarScroll from "@/components/ui/NavBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavbarScroll /> 
        {children} 
      </body>
    </html>
  );
}
