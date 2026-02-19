export const metadata = {
  title: "Publications – Nur Jamiludin Ramadhan",
  description: "Research publications and papers",
};

interface Publication {
  id: string;
  title: string;
  year?: number;
  authors?: string[];
  journal?: string;
  researchgate?: string;
}

// Sample publications data (can be replaced with dynamic data)
const publications: Publication[] = [
  {
    id: "pat-rec",
    title: "Pattern recognition based movement control and gripping forces control system on arm robot model using LabVIEW",
    year: 2022,
    authors: ["Nur Jamiludin Ramadhan"],
    researchgate: "https://www.researchgate.net/publication/362366387",
  },
  {
    id: "pms-cnc",
    title: "Five-Axis PMS CNC Partial Link Control System based on Modified Inverse Kinematic of 6-DOF UPS Parallel Manipulator",
    year: 2023,
    authors: ["Nur Jamiludin Ramadhan"],
    researchgate: "https://www.researchgate.net/publication/367212566",
  },
  {
    id: "mul-rob",
    title: "Implementation Consensus Algorithm and Leader-Follower of Multi-Robot System Formation",
    year: 2023,
    authors: ["Nur Jamiludin Ramadhan"],
    researchgate: "https://www.researchgate.net/publication/367420568",
  },
  {
    id: "cur-mi",
    title: "Curriculum and Materials Innovation",
    year: 2023,
    authors: ["Nur Jamiludin Ramadhan"],
  },
  {
    id: "img-ur5",
    title: "Image Processing with UR5 Robot",
    year: 2022,
    authors: ["Nur Jamiludin Ramadhan"],
  },
  {
    id: "mfs-ivn",
    title: "Manufacturing Systems and Innovation Networks",
    year: 2023,
    authors: ["Nur Jamiludin Ramadhan"],
  },
  {
    id: "orb-slm",
    title: "Orbital Mechanics and Space Learning Materials",
    year: 2022,
    authors: ["Nur Jamiludin Ramadhan"],
  },
];

export default function Publications() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      {/* Header */}
      <section className="py-16 px-6 md:px-12 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Publications</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Research papers, projects, and academic contributions.
        </p>
      </section>

      {/* Search & Filter (optional) */}
      <section className="py-6 px-6 md:px-12 max-w-5xl mx-auto border-b border-gray-200 dark:border-gray-800">
        <input
          type="text"
          placeholder="Search publications..."
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
        />
      </section>

      {/* Publications List */}
      <section className="py-12 px-6 md:px-12 max-w-5xl mx-auto">
        <div className="space-y-6">
          {publications.map((pub) => (
            <article
              key={pub.id}
              className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:shadow-lg hover:border-blue-400 dark:hover:border-blue-600 transition"
            >
              {/* Title as link to publication page */}
              <h2 className="text-xl font-semibold mb-2">
                <a
                  href={`/publication/${pub.id}/`}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {pub.title}
                </a>
              </h2>

              {/* Meta information */}
              <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                {pub.authors && (
                  <p>
                    <span className="font-semibold">Authors:</span> {pub.authors.join(", ")}
                  </p>
                )}
                {pub.year && (
                  <p>
                    <span className="font-semibold">Year:</span> {pub.year}
                  </p>
                )}
                {pub.journal && (
                  <p>
                    <span className="font-semibold">Journal:</span> {pub.journal}
                  </p>
                )}
              </div>

              {/* Links */}
              <div className="mt-4 flex gap-3 flex-wrap">
                <a
                  href={`/publication/${pub.id}/`}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-medium"
                >
                  View Details
                </a>
                {pub.researchgate && (
                  <a
                    href={pub.researchgate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 transition text-sm font-medium"
                  >
                    ResearchGate
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Footer note */}
      <section className="py-12 px-6 md:px-12 max-w-5xl mx-auto border-t border-gray-200 dark:border-gray-800 text-center">
        <p className="text-gray-600 dark:text-gray-400">
          Total publications: <span className="font-semibold text-gray-900 dark:text-white">{publications.length}</span>
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
          For more details on each publication, click "View Details" or visit the publication folder.
        </p>
      </section>
    </main>
  );
}