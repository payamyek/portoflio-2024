import type { Metadata } from 'next';

import './globals.css';
import { spaceMono } from './ui/fonts';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${spaceMono.className} flex h-screen w-screen items-center justify-center antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
