// app/layout.tsx — Javari Faith
import type { Metadata } from 'next'
import './globals.css'
export const dynamic = 'force-dynamic'
export const metadata: Metadata = {
  title: 'Javari Faith | Javari by CR AudioViz AI',
  description: 'Faith community tools',
}
import AppShell from '@/components/AppShell'
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body style={{ margin: 0, padding: 0 }}><AppShell appName="Javari Faith" appColor="#a855f7" appEmoji="✝️" appDesc="Faith community tools">{children}</AppShell></body></html>)
}
