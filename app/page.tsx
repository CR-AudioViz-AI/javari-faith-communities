// app/page.tsx
// ═══════════════════════════════════════════════════════════════════════════════
// FAITH COMMUNITIES HUB - Landing Page
// ═══════════════════════════════════════════════════════════════════════════════
// Monday, December 30, 2025, 3:23 PM EST
// Social Impact Module - Empowering Congregations
// ═══════════════════════════════════════════════════════════════════════════════

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Church, Heart, Users, Calendar, MessageSquare, BookOpen,
  Music, Video, Mail, DollarSign, Globe, Sparkles,
  ChevronRight, Star, Menu, X, ArrowRight, Bell
} from 'lucide-react';

const STATS = [
  { value: '380K+', label: 'U.S. Congregations', icon: Church },
  { value: '150M+', label: 'Weekly Attendees', icon: Users },
  { value: '70%', label: 'Need Digital Tools', icon: Globe },
  { value: '$0', label: 'To Get Started', icon: DollarSign },
];

const FEATURES = [
  {
    icon: MessageSquare,
    title: 'Congregation Communication',
    description: 'AI-powered newsletters, announcements, and personalized outreach. Keep your community connected and informed.',
    color: 'from-blue-500 to-indigo-600',
    features: ['Smart Newsletters', 'Prayer Requests', 'Event Reminders', 'Member Updates']
  },
  {
    icon: Calendar,
    title: 'Event Management',
    description: 'Streamline service schedules, volunteer coordination, and community events with intelligent scheduling.',
    color: 'from-purple-500 to-violet-600',
    features: ['Service Planning', 'Volunteer Scheduling', 'Room Booking', 'RSVP Tracking']
  },
  {
    icon: BookOpen,
    title: 'Sermon & Study Tools',
    description: 'AI assistance for sermon preparation, Bible study materials, and curriculum development.',
    color: 'from-amber-500 to-orange-600',
    features: ['Sermon Outlines', 'Study Guides', 'Scripture Search', 'Lesson Plans']
  },
  {
    icon: Music,
    title: 'Worship Planning',
    description: 'Song selection, lyric display, and service flow planning with collaborative tools for worship teams.',
    color: 'from-pink-500 to-rose-600',
    features: ['Song Database', 'Lyric Display', 'Service Builder', 'Team Collaboration']
  },
  {
    icon: Video,
    title: 'Streaming & Media',
    description: 'Tools for live streaming, recording, and sharing services with your community near and far.',
    color: 'from-red-500 to-rose-600',
    features: ['Live Streaming', 'Video Archive', 'Podcast Creation', 'Social Sharing']
  },
  {
    icon: Heart,
    title: 'Care & Outreach',
    description: 'Track pastoral care, coordinate meal trains, and manage community support programs.',
    color: 'from-green-500 to-emerald-600',
    features: ['Care Tracking', 'Meal Coordination', 'Visit Scheduling', 'Support Groups']
  },
];

const DENOMINATIONS = [
  'Catholic', 'Baptist', 'Methodist', 'Lutheran', 'Presbyterian',
  'Pentecostal', 'Non-Denominational', 'Orthodox', 'Episcopal', 'All Welcome'
];

export default function FaithCommunitiesPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <Church className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-bold text-white text-lg">Faith Communities</span>
                <span className="text-purple-400 text-xs block -mt-1">by Javari AI</span>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-6">
              <a href="#features" className="text-gray-300 hover:text-white transition">Features</a>
              <a href="#testimonials" className="text-gray-300 hover:text-white transition">Stories</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition">Pricing</a>
              <a 
                href="/signup"
                className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-lg hover:opacity-90 transition"
              >
                Get Started Free
              </a>
            </div>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-300"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-950 border-t border-white/10 p-4 space-y-3">
            <a href="#features" className="block text-gray-300 py-2">Features</a>
            <a href="#testimonials" className="block text-gray-300 py-2">Stories</a>
            <a href="#pricing" className="block text-gray-300 py-2">Pricing</a>
            <a href="/signup" className="block w-full text-center py-3 bg-purple-600 text-white rounded-lg">
              Get Started Free
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-sm text-purple-300 mb-8"
          >
            <Sparkles className="w-4 h-4" />
            <span>A CR AudioViz AI Social Impact Initiative</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Technology That Serves
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              Your Ministry
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-10"
          >
            Empower your congregation with AI-powered tools for communication, 
            engagement, and community building. Free for small congregations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a
              href="/signup"
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-xl hover:opacity-90 transition flex items-center gap-2"
            >
              Start Free Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#demo"
              className="px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/5 transition"
            >
              Watch Demo
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {STATS.map((stat, i) => (
              <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-xl">
                <stat.icon className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Denominations */}
      <section className="py-12 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-400 mb-6">Serving all faith traditions</p>
          <div className="flex flex-wrap justify-center gap-4">
            {DENOMINATIONS.map((d, i) => (
              <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
                {d}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Everything Your Ministry Needs
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              From Sunday services to weekday outreach, we've got tools to help your community thrive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-purple-500/50 transition-all"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 mb-4">{feature.description}</p>
                <div className="flex flex-wrap gap-2">
                  {feature.features.map((f, j) => (
                    <span key={j} className="px-2 py-1 bg-white/5 text-xs text-gray-300 rounded">
                      {f}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Honest Pricing
            </h2>
            <p className="text-gray-400">Free for small congregations. Affordable for all.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Free Tier */}
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-2">Community</h3>
              <p className="text-gray-400 mb-4">For congregations under 100</p>
              <div className="text-4xl font-bold text-white mb-6">$0<span className="text-lg font-normal text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-6">
                {['Basic communication tools', 'Event calendar', 'Member directory', 'Community support'].map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-300">
                    <Star className="w-4 h-4 text-purple-400" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="/signup" className="block w-full py-3 text-center bg-white/10 text-white rounded-lg hover:bg-white/20 transition">
                Get Started Free
              </a>
            </div>

            {/* Paid Tier */}
            <div className="p-6 bg-gradient-to-b from-purple-900/50 to-indigo-900/50 border-2 border-purple-500 rounded-2xl relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-purple-500 rounded-full text-xs text-white">
                Most Popular
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Ministry</h3>
              <p className="text-gray-400 mb-4">For growing congregations</p>
              <div className="text-4xl font-bold text-white mb-6">$29<span className="text-lg font-normal text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-6">
                {['Everything in Community', 'AI sermon assistant', 'Advanced analytics', 'Unlimited storage', 'Priority support'].map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-300">
                    <Star className="w-4 h-4 text-purple-400" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="/signup" className="block w-full py-3 text-center bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
                Start Free Trial
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Empower Your Ministry?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join thousands of congregations using technology to serve better.
          </p>
          <a
            href="/signup"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-xl hover:opacity-90 transition"
          >
            Start Free Today
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Church className="w-6 h-6 text-purple-400" />
              <span className="text-white font-semibold">Faith Communities Hub</span>
              <span className="text-gray-500">by CR AudioViz AI</span>
            </div>
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} CR AudioViz AI, LLC. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
