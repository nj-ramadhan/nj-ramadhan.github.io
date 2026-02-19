export const metadata = {
  title: "About – Nur Jamiludin Ramadhan",
  description: "Academic profile and research interests",
};

export default function About() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      {/* Hero / Intro */}
      <section className="py-20 px-6 md:px-12 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
          I'm Nur Jamiludin Ramadhan, a researcher and educator passionate about robotics, computer vision, and engineering education.
        </p>
      </section>

      {/* Experience */}
      <section className="py-12 px-6 md:px-12 max-w-4xl mx-auto border-t border-gray-200 dark:border-gray-800">
        <h2 className="text-2xl font-bold mb-6">Background</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg">Research Interests</h3>
            <ul className="mt-2 space-y-1 text-gray-700 dark:text-gray-300">
              <li>• Robotics and autonomous systems</li>
              <li>• Computer vision and image processing</li>
              <li>• Motion planning and control</li>
              <li>• Engineering education</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Links</h3>
            <div className="mt-2 flex gap-4">
              <a href="https://orcid.org/0000-0002-0909-0503" className="text-blue-600 dark:text-blue-400 hover:underline">
                ORCID
              </a>
              <a href="https://www.scopus.com/authid/detail.uri?authorId=57713257000" className="text-blue-600 dark:text-blue-400 hover:underline">
                SCOPUS
              </a>              
              <a href="https://www.researchgate.net/profile/Nur-Ramadhan-9" className="text-blue-600 dark:text-blue-400 hover:underline">
                Research Gate
              </a>              
              <a href="https://scholar.google.com/citations?user=W-SAxH0AAAAJ" className="text-blue-600 dark:text-blue-400 hover:underline">
                Google Scholar
              </a>
              <a href="https://github.com/nj-ramadhan" className="text-blue-600 dark:text-blue-400 hover:underline">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-12 px-6 md:px-12 max-w-4xl mx-auto border-t border-gray-200 dark:border-gray-800">
        <p className="text-gray-600 dark:text-gray-400">
          Explore my <a href="/publication" className="text-blue-600 dark:text-blue-400 hover:underline">publications</a>, 
          <a href="/learning" className="text-blue-600 dark:text-blue-400 hover:underline"> learning materials</a>, 
          or <a href="/#contact" className="text-blue-600 dark:text-blue-400 hover:underline">get in touch</a>.
        </p>
      </section>
    </main>
  );
}