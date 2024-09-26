import "./globals.css";
import { Inter, Bricolage_Grotesque } from 'next/font/google';
import Header from './components/Header';
import Footer from './components/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Google Fonts (Inter und Bricolage Grotesque)
const inter = Inter({
  weight: ['300', '400', '600'],
  subsets: ['latin'],
  variable: '--font-inter',
});

const bricolageGrotesque = Bricolage_Grotesque({
  weight: ['200', '300', '400', '800'],
  subsets: ['latin'],
  variable: '--font-bricolage-grotesque',
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${bricolageGrotesque.variable} antialiased`}
      >
        <Header />
        <main className="max-w-screen-2xl mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
