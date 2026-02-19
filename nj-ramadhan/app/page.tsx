'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [theme, setTheme] = useState<'light' | 'dark' | 'auto'>('auto');
  const [mounted, setMounted] = useState(false);

  // Initialize theme only on client side
  useEffect(() => {
    setMounted(true);
    const savedTheme = (localStorage.getItem('theme') as 'light' | 'dark' | 'auto') || 'auto';
    setTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  // Apply theme to document
  const applyTheme = (newTheme: 'light' | 'dark' | 'auto') => {
    if (typeof window === 'undefined') return;
    
    const html = document.documentElement;
    
    // Remove all theme classes first
    html.classList.remove('dark', 'light');
    
    if (newTheme === 'dark') {
      html.classList.add('dark');
    } else if (newTheme === 'light') {
      html.classList.add('light');
    } else if (newTheme === 'auto') {
      // For auto, don't add any class - let CSS media query handle it
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        html.classList.add('dark');
      }
    }
    
    localStorage.setItem('theme', newTheme);
  };

  const handleThemeChange = (newTheme: 'light' | 'dark' | 'auto') => {
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  // Search functionality
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Don't render theme switcher until mounted to avoid hydration mismatch
  if (!mounted) return null;

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }} className="min-h-screen w-full flex flex-col">
      {/* Search Panel */}
      {searchOpen && (
        <aside style={{ backgroundColor: 'rgba(0,0,0,0.5)' }} className="fixed inset-0 z-40 p-6 md:p-12">
          <div style={{ backgroundColor: 'var(--card-bg)', color: 'var(--text)', borderColor: 'var(--border)' }} className="max-w-2xl mx-auto rounded-lg shadow-lg p-6 border">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Search</h2>
              <button
                onClick={() => setSearchOpen(false)}
                style={{ color: 'var(--muted)' }}
                className="hover:opacity-70"
              >
                ✕
              </button>
            </div>
            <input
              type="search"
              placeholder="Search publications, lecture materials..."
              value={searchQuery}
              onChange={handleSearch}
              style={{ 
                backgroundColor: 'var(--bg)', 
                color: 'var(--text)', 
                borderColor: 'var(--border)' 
              }}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoFocus
            />
            <div style={{ color: 'var(--muted)' }} className="mt-4">
              {searchQuery ? (
                <p>Results for: <span className="font-semibold" style={{ color: 'var(--text)' }}>{searchQuery}</span></p>
              ) : (
                <p>Type to search...</p>
              )}
            </div>
          </div>
        </aside>
      )}

      {/* Navigation */}
      <nav style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--border)' }} className="sticky top-0 z-30 border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" style={{ color: 'var(--text)' }} className="font-bold text-lg hover:text-blue-600">
            Nur Jamiludin Ramadhan
          </a>

          {/* Menu */}
          <ul className="hidden md:flex gap-6">
            <li>
              <a href="#about" style={{ color: 'var(--muted)' }} className="hover:text-blue-600">
                About
              </a>
            </li>
            <li>
              <a href="#publications" style={{ color: 'var(--muted)' }} className="hover:text-blue-600">
                Publications
              </a>
            </li>
            <li>
              <a href="#lecture_materials" style={{ color: 'var(--muted)' }} className="hover:text-blue-600">
                Lecture Materials
              </a>
            </li>
            <li>
              <a href="#contact" style={{ color: 'var(--muted)' }} className="hover:text-blue-600">
                Contact
              </a>
            </li>
          </ul>

          {/* Icons */}
          <div className="flex gap-4 items-center">
            <button
              onClick={() => setSearchOpen(true)}
              style={{ color: 'var(--text)' }}
              className="p-2 hover:bg-gray-100 rounded-lg"
              aria-label="Search"
            >
              🔍
            </button>

            {/* Theme Switcher */}
            <div className="relative group">
              <button style={{ color: 'var(--text)' }} className="p-2 hover:bg-gray-100 rounded-lg">
                🎨
              </button>
              <div style={{ backgroundColor: 'var(--card-bg)', color: 'var(--text)', borderColor: 'var(--border)' }} className="absolute right-0 mt-2 w-48 border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <button
                  onClick={() => handleThemeChange('light')}
                  style={{ backgroundColor: theme === 'light' ? 'var(--hover-bg)' : 'transparent' }}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  ☀️ Light {theme === 'light' && '✓'}
                </button>
                <button
                  onClick={() => handleThemeChange('dark')}
                  style={{ backgroundColor: theme === 'dark' ? 'var(--hover-bg)' : 'transparent' }}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  🌙 Dark {theme === 'dark' && '✓'}
                </button>
                <button
                  onClick={() => handleThemeChange('auto')}
                  style={{ backgroundColor: theme === 'auto' ? 'var(--hover-bg)' : 'transparent' }}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  🔄 Auto {theme === 'auto' && '✓'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* About Section */}
      <section id="about" className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Profile Card */}
          <div className="flex flex-col items-center md:col-span-1">
            <Image
              src="/images/author/nj-ramadhan/avatar.jpg"
              alt="Nur Jamiludin Ramadhan"
              width={200}
              height={200}
              className="rounded-full mb-4 border-4"
              style={{ borderColor: 'var(--border)' }}
            />
            <h2 className="text-2xl font-bold mb-2 text-center">Nur Jamiludin Ramadhan</h2>
            <p style={{ color: 'var(--muted)' }} className="text-center mb-4">
              Lecturer and Researcher in Manufacturing Automation and Mechatronics Engineering Department
            </p>
            <a
              href="https://www.polman-bandung.ac.id"
              target="_blank"
              rel="noopener"
              className="text-blue-600 hover:underline mb-6"
            >
              Bandung Polytechnic for Manufacturing
            </a>

            {/* Social Links */}
            <div className="flex gap-3 flex-wrap justify-center">
              <a href="#contact" title="Email" style={{ backgroundColor: 'var(--hover-bg)' }} className="p-2 rounded-lg hover:opacity-70">
                <Image
                  src="/images/icon/icon-gmail.png"
                  alt="email_nj-rmadhan"
                  width={20}
                  height={20}
                />
              </a>
              <a href="https://www.linkedin.com/in/nj-ramadhan/" target="_blank" rel="noopener" title="LinkedIn" style={{ backgroundColor: 'var(--hover-bg)' }} className="p-2 rounded-lg hover:opacity-70">
                <Image
                  src="/images/icon/icon-linkedin.png"
                  alt="linkedin_nj-ramadhan"
                  width={20}
                  height={20}
                />
              </a>
              <a href="https://github.com/nj-ramadhan" target="_blank" rel="noopener" title="GitHub" style={{ backgroundColor: 'var(--hover-bg)' }} className="p-2 rounded-lg hover:opacity-70">
                <Image
                  src="/images/icon/icon-github.png"
                  alt="github_nj-ramadhan"
                  width={20}
                  height={20}
                />
              </a>
              <a href="https://orcid.org/0000-0002-0909-0503" target="_blank" rel="noopener" title="ORCID" style={{ backgroundColor: 'var(--hover-bg)' }} className="p-2 rounded-lg hover:opacity-70">
                <Image
                  src="/images/icon/icon-orcid.png"
                  alt="orcid_nj-ramadhan"
                  width={20}
                  height={20}
                />
              </a>
              <a href="https://scholar.google.com/citations?user=d6-6t88AAAAJ&hl=en" target="_blank" rel="noopener" title="Google Scholar" style={{ backgroundColor: 'var(--hover-bg)' }} className="p-2 rounded-lg hover:opacity-70">
                <Image
                  src="/images/icon/icon-gscholar.png"
                  alt="google_scholar_nj-ramadhan"
                  width={20}
                  height={20}
                />
              </a>
              <a href="https://www.researchgate.net/profile/Nur-Ramadhan-9" target="_blank" rel="noopener" title="ResearchGate" style={{ backgroundColor: 'var(--hover-bg)' }} className="p-2 rounded-lg hover:opacity-70">
                <Image
                  src="/images/icon/icon-researchgate.png"
                  alt="researchgate_nj-ramadhan"
                  width={20}
                  height={20}
                />
              </a>
            </div>
          </div>

          {/* Bio */}
          <div className="md:col-span-2">
            <h1 className="text-4xl font-bold mb-6">Biography</h1>
            <p style={{ color: 'var(--text)' }} className="mb-6 leading-relaxed">
              I am a Lecturer and Researcher in Manufacturing Automation and Mechatronics Engineering Department at Bandung Polytechnic for Manufacturing. 
              My research focus on Mechatronics and Robotics system implementation for Flexible and Intelligent Manufacturing Environment. 
              Previously, I was a lead researcher at parallel robot implementation as a machine tools mechanism, Autonomous Mobile Robot implementation in manufacturing environment.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Interests</h3>
                <ul style={{ color: 'var(--text)' }} className="space-y-2 list-disc list-inside ml-5">
                  <li>Robotics</li>
                  <li>Parallel Robot</li>
                  <li>Mechatronics</li>
                  <li>Flexible Manufacturing</li>
                  <li>Intelligent Manufacturing</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Education</h3>
                <ul style={{ color: 'var(--text)' }} className="space-y-3">
                  <li>
                    <p className="font-semibold">Master Degree in Mechanical Engineering (Mechatronics Research Group)</p>
                    <p style={{ color: 'var(--muted)' }} className="text-sm">Bandung Institute of Technology, 2019</p>
                  </li>
                  <li>
                    <p className="font-semibold">Bachelor Degree in Manufacturing Automation & Mechatronics Engineering</p>
                    <p style={{ color: 'var(--muted)' }} className="text-sm">Bandung Polytechnic for Manufacturing, 2016</p>
                  </li>
                  <li>
                    <p className="font-semibold">Diploma Degree in Manufacturing Automation & Mechatronics Engineering</p>
                    <p style={{ color: 'var(--muted)' }} className="text-sm">Bandung Polytechnic for Manufacturing, 2015</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" style={{ borderColor: 'var(--border)' }} className="py-20 px-6 md:px-12 max-w-6xl mx-auto border-t">
        <h1 className="text-4xl font-bold mb-2">Recent Publications</h1>
        <p style={{ color: 'var(--muted)' }} className="mb-8">
          <a href="/publication/" className="text-blue-600 hover:underline">
            View all publications →
          </a>
        </p>

        <div className="space-y-6">
          {[
            {
              title: "Pattern recognition based movement control and gripping forces control system on arm robot model using LabVIEW",
              link: "/publication/pat-rec/",
              authors: "Nur Jamiludin Ramadhan, Noval Lilansa, Afaf Fadhil, Nguyen Dinh Hoe",
              excerpt: "Develop an arm robot control system with image processing for automatic object detection and gripper force control...",
              researchgate: "https://www.researchgate.net/publication/362366387",
            },
            {
              title: "Five-Axis PMS CNC Partial Link Control System based on Modified Inverse Kinematic of 6-DOF UPS Parallel Manipulator",
              link: "/publication/pms-cnc/",
              authors: "Nur Jamiludin Ramadhan, Indrawanto, Nguyen Dinh Hoe",
              excerpt: "Explore parallel manipulator structures for five-axis CNC milling machines with improved accuracy and stiffness...",
              researchgate: "https://www.researchgate.net/publication/367212566",
            },
            {
              title: "Implementation Consensus Algorithm and Leader-Follower of Multi-Robot System Formation",
              link: "/publication/mul-rob/",
              authors: "Noval Lilansa, Muhammad Nursyam Rizal, Pipit Anggraeni, Nur Jamiludin Ramadhan",
              excerpt: "Develop a multi-robot system with three units to form coordinated formations for task execution...",
              researchgate: "https://www.researchgate.net/publication/367420568",
            },
          ].map((pub, idx) => (
            <article key={idx} style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border)' }} className="border rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">
                <a href={pub.link} className="text-blue-600 hover:underline">
                  {pub.title}
                </a>
              </h3>
              <p style={{ color: 'var(--muted)' }} className="text-sm mb-3">{pub.authors}</p>
              <p style={{ color: 'var(--text)' }} className="mb-4">{pub.excerpt}</p>
              <div className="flex gap-3 flex-wrap">
                <a href={pub.link} style={{ borderColor: 'var(--border)' }} className="px-3 py-1 border rounded hover:bg-blue-600 hover:text-white text-sm">
                  View Details
                </a>
                <a href={pub.researchgate} target="_blank" rel="noopener" style={{ borderColor: 'var(--border)' }} className="px-3 py-1 border rounded hover:bg-blue-600 hover:text-white text-sm">
                  ResearchGate
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Lecture Materials Section */}
      <section id="lecture_materials" style={{ borderColor: 'var(--border)' }} className="py-20 px-6 md:px-12 max-w-6xl mx-auto border-t">
        <h1 className="text-4xl font-bold mb-2">Lecture Materials</h1>
        <p style={{ color: 'var(--muted)' }} className="mb-8">
          <a href="/lecture/" className="text-blue-600 hover:underline">
            View all materials →
          </a>
        </p>

        <div className="space-y-6">
          {[
            {
              title: "Engineering Mechanics - Statics",
              link: "https://sites.google.com/ae.polman-bandung.ac.id/mekanikateknikstatika/beranda",
              excerpt: "Units and quantities of rigid bodies, forces, moments, equilibrium analysis, and center of mass calculations. This lecture material covers fundamental concepts in engineering mechanics, focusing on the analysis of static systems and structures."
            },
            {
              title: "Production Planning and Controlling",
              link: "https://sites.google.com/ae.polman-bandung.ac.id/mekanikateknikstatika/beranda",
              excerpt: "Planning theorems, project management, SOPs, and laboratory equipment inventory practices."
            },
            {
              title: "Production Engineering",
              link: "https://sites.google.com/ae.polman-bandung.ac.id/mekanikateknikstatika/beranda",
              excerpt: "Raw materials processing, analytical approaches to design, and management practices in manufacturing."
            },
          ].map((lect, idx) => (          
            <article key={idx} style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border)' }} className="border rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">
                <a href={lect.link} target="_blank" rel="noopener" className="text-blue-600 hover:underline">
                  {lect.title}
                </a>
              </h3>
              <p style={{ color: 'var(--text)' }}>{lect.excerpt}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ borderColor: 'var(--border)' }} className="py-20 px-6 md:px-12 max-w-6xl mx-auto border-t">
        <h1 className="text-4xl font-bold mb-8">Contact</h1>

        <form name="contact" method="POST" action="https://formspree.io/f/xeqwawgn" className="space-y-4 mb-8">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              style={{ 
                backgroundColor: 'var(--bg)', 
                color: 'var(--text)', 
                borderColor: 'var(--border)' 
              }}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              style={{ 
                backgroundColor: 'var(--bg)', 
                color: 'var(--text)', 
                borderColor: 'var(--border)' 
              }}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-semibold mb-2">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={5}
              style={{ 
                backgroundColor: 'var(--bg)', 
                color: 'var(--text)', 
                borderColor: 'var(--border)' 
              }}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
          >
            Send Message
          </button>
        </form>

        <div style={{ color: 'var(--muted)' }}>
          <p className="font-semibold mb-2">📍 Location</p>
          <p>
            Manufacturing Automation and Mechatronics Engineering Department, Bandung Polytechnic for Manufacturing, Dago, Bandung, Indonesia, 40135
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderColor: 'var(--border)', color: 'var(--muted)' }} className="border-t py-8 px-6 text-center mt-auto">
        <p>©2025, Nur Jamiludin Ramadhan</p>
      </footer>
    </main>
  );
}