import type { Metadata } from "next";
import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/components/theme";


export const metadata: Metadata = {
  title: "Baby Pepe | Pepe's Only Baby Boy",
  description: "A viral sensation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="page">
      <body>
        
        <ChakraProvider theme={theme}>
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
