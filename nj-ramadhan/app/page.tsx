'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [theme, setTheme] = useState<'light' | 'dark' | 'auto'>('auto');

  // Initialize theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | 'auto' || 'auto';
    setTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  // Apply theme to document
  const applyTheme = (newTheme: 'light' | 'dark' | 'auto') => {
    const isDark = newTheme === 'dark' || 
      (newTheme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
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

  return (
    <main className="flex min-h-screen w-full flex-col bg-white dark:bg-black text-gray-900 dark:text-white">
      {/* Search Panel */}
      {searchOpen && (
        <aside className="fixed inset-0 z-40 bg-black/50 dark:bg-black/70 p-6 md:p-12">
          <div className="max-w-2xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Search</h2>
              <button
                onClick={() => setSearchOpen(false)}
                className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              >
                ✕
              </button>
            </div>
            <input
              type="search"
              placeholder="Search publications, learning materials..."
              value={searchQuery}
              onChange={handleSearch}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoFocus
            />
            <div className="mt-4 text-gray-600 dark:text-gray-400">
              {searchQuery ? (
                <p>Results for: <span className="font-semibold">{searchQuery}</span></p>
              ) : (
                <p>Type to search...</p>
              )}
            </div>
          </div>
        </aside>
      )}

      {/* Navigation */}
      <nav className="sticky top-0 z-30 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="font-bold text-lg hover:text-blue-600 dark:hover:text-blue-400">
            Nur Jamiludin Ramadhan
          </a>

          {/* Menu */}
          <ul className="hidden md:flex gap-6">
            <li>
              <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                Home
              </a>
            </li>
            <li>
              <a href="#publications" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                Publications
              </a>
            </li>
            <li>
              <a href="#learning_materials" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                Learning Materials
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                Contact
              </a>
            </li>
          </ul>

          {/* Icons */}
          <div className="flex gap-4 items-center">
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-lg"
              aria-label="Search"
            >
              🔍
            </button>

            {/* Theme Switcher */}
            <div className="relative group">
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-lg">
                🎨
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <button
                  onClick={() => handleThemeChange('light')}
                  className={`block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 ${
                    theme === 'light' ? 'font-bold text-blue-600' : ''
                  }`}
                >
                  ☀️ Light
                </button>
                <button
                  onClick={() => handleThemeChange('dark')}
                  className={`block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 ${
                    theme === 'dark' ? 'font-bold text-blue-600' : ''
                  }`}
                >
                  🌙 Dark
                </button>
                <button
                  onClick={() => handleThemeChange('auto')}
                  className={`block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 ${
                    theme === 'auto' ? 'font-bold text-blue-600' : ''
                  }`}
                >
                  🔄 Auto
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
              className="rounded-full mb-4 border-4 border-gray-200 dark:border-gray-800"
            />
            <h2 className="text-2xl font-bold mb-2 text-center">Nur Jamiludin Ramadhan</h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-4">
              Lecturer and Researcher in Manufacturing Automation and Mechatronics Engineering Department
            </p>
            <a
              href="https://www.polman-bandung.ac.id"
              target="_blank"
              rel="noopener"
              className="text-blue-600 dark:text-blue-400 hover:underline mb-6"
            >
              Bandung Polytechnic for Manufacturing
            </a>

            {/* Social Links */}
            <div className="flex gap-3 flex-wrap justify-center">
              <a href="#contact" title="Email" className="p-2 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-lg">
                ✉️
              </a>
              <a href="https://www.linkedin.com/in/nj-ramadhan/" target="_blank" rel="noopener" title="LinkedIn" className="p-2 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-lg">
                💼
              </a>
              <a href="https://github.com/nj-ramadhan" target="_blank" rel="noopener" title="GitHub" className="p-2 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-lg">
                🐙
              </a>
              <a href="https://orcid.org/0000-0002-0909-0503" target="_blank" rel="noopener" title="ORCID" className="p-2 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-lg">
                🎓
              </a>
              <a href="https://scholar.google.com/citations?user=d6-6t88AAAAJ&hl=en" target="_blank" rel="noopener" title="Google Scholar" className="p-2 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-lg">
                📚
              </a>
              <a href="https://www.researchgate.net/profile/Nur-Ramadhan-9" target="_blank" rel="noopener" title="ResearchGate" className="p-2 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-lg">
                🔬
              </a>
            </div>
          </div>

          {/* Bio */}
          <div className="md:col-span-2">
            <h1 className="text-4xl font-bold mb-6">Biography</h1>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I am a Lecturer and Researcher in Manufacturing Automation and Mechatronics Engineering Department at Bandung Polytechnic for Manufacturing. 
              My research focus on Mechatronics and Robotics system implementation for Flexible and Intelligent Manufacturing Environment. 
              Previously, I was a lead researcher at parallel robot implementation as a machine tools mechanism. 
              I am currently working on the partial link actuator control system optimization for parallel mechanism system machine tools.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Interests</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Robotics</li>
                  <li>• Parallel Robot</li>
                  <li>• Mechatronics</li>
                  <li>• Flexible Manufacturing</li>
                  <li>• Intelligent Manufacturing</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Education</h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li>
                    <p className="font-semibold">Master Degree in Mechanical Engineering</p>
                    <p className="text-sm">Bandung Institute of Technology, 2019</p>
                  </li>
                  <li>
                    <p className="font-semibold">Bachelor Degree in Manufacturing Automation</p>
                    <p className="text-sm">Bandung Polytechnic for Manufacturing, 2016</p>
                  </li>
                  <li>
                    <p className="font-semibold">Diploma Degree in Manufacturing Automation</p>
                    <p className="text-sm">Bandung Polytechnic for Manufacturing, 2015</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-20 px-6 md:px-12 max-w-6xl mx-auto border-t border-gray-200 dark:border-gray-800">
        <h1 className="text-4xl font-bold mb-2">Recent Publications</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          <a href="/publication/" className="text-blue-600 dark:text-blue-400 hover:underline">
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
            <article key={idx} className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">
                <a href={pub.link} className="text-blue-600 dark:text-blue-400 hover:underline">
                  {pub.title}
                </a>
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{pub.authors}</p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{pub.excerpt}</p>
              <div className="flex gap-3 flex-wrap">
                <a href={pub.link} className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">
                  View
                </a>
                <a href={pub.researchgate} target="_blank" rel="noopener" className="px-3 py-1 border border-gray-300 dark:border-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-900 text-sm">
                  ResearchGate
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Learning Materials Section */}
      <section id="learning_materials" className="py-20 px-6 md:px-12 max-w-6xl mx-auto border-t border-gray-200 dark:border-gray-800">
        <h1 className="text-4xl font-bold mb-2">Learning Materials</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          <a href="/learning/" className="text-blue-600 dark:text-blue-400 hover:underline">
            View all materials →
          </a>
        </p>

        <div className="space-y-6">
          {[
            {
              title: "Engineering Mechanics - Statics",
              link: "https://sites.google.com/ae.polman-bandung.ac.id/mekanikateknikstatika/beranda",
              excerpt: "Units and quantities of rigid bodies, forces, moments, equilibrium analysis, and center of mass calculations."
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
          ].map((mat, idx) => (
            <article key={idx} className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">
                <a href={mat.link} target="_blank" rel="noopener" className="text-blue-600 dark:text-blue-400 hover:underline">
                  {mat.title}
                </a>
              </h3>
              <p className="text-gray-700 dark:text-gray-300">{mat.excerpt}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 md:px-12 max-w-2xl mx-auto border-t border-gray-200 dark:border-gray-800">
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
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
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

        <div className="text-gray-600 dark:text-gray-400">
          <p className="font-semibold mb-2">📍 Location</p>
          <p>
            Manufacturing Automation and Mechatronics Engineering Department, Bandung Polytechnic for Manufacturing, Dago, Bandung, Indonesia, 40135
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 py-8 px-6 text-center text-gray-600 dark:text-gray-400 mt-auto">
        <p>©2025, Nur Jamiludin Ramadhan</p>
      </footer>
    </main>
  );
}