import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Vibes Todos',
  description: 'Simple Todo App for learning AI-assisted development workflow',
  authors: [{ name: 'Claude Code' }],
  keywords: ['todo', 'task management', 'next.js', 'typescript', 'tailwind'],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen bg-base-200 font-sans antialiased">
        <div id="root" className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}