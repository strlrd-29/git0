import type { Metadata, Viewport } from 'next';
import { ThemeProvider } from '#/components/ui/theme-provider';
import { fontVariables } from '#/lib/fonts';
import { cn } from '#/lib/utils';
import './globals.css';
import { META_THEME_COLORS, siteConfig } from '#/lib/config';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ['git', 'github'],
  authors: [
    {
      name: 'ouassim',
      url: 'https://ouassim.tech',
    },
  ],
  creator: 'ouassim',
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: META_THEME_COLORS.light },
    { media: '(prefers-color-scheme: dark)', color: META_THEME_COLORS.dark },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'overscroll-none font-mono text-foreground antialiased',
          fontVariables
        )}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
