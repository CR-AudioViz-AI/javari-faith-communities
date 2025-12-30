import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Faith Communities Hub | CR AudioViz AI',
  description: 'Empowering congregations with AI-powered tools for communication, engagement, and community building.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
