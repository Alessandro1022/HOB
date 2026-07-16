import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'House of Business — Ett affärshus, inte ett säljbolag',
  description:
    'House of Business samlar försäljning, teknik, AI och entreprenörskap under samma tak. Ett affärsekosystem där företag hjälper företag att växa.',
  openGraph: {
    title: 'House of Business',
    description: 'En plats där människor växer tillsammans.',
    locale: 'sv_SE',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#070707',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Manrope:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
