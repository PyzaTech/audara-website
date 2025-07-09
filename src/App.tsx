import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100 },
  },
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-100 font-sans">
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-6 border-b border-gray-700">
        <h1 className="text-3xl font-bold tracking-tight">Audara</h1>
        <nav className="space-x-6 text-gray-300">
          <a href="#features" className="hover:text-green-400 transition">
            Features
          </a>
          <a href="#how-it-works" className="hover:text-green-400 transition">
            How It Works
          </a>
          <a href="/download" className="hover:text-green-400 transition">
            Download
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-8 py-20 max-w-7xl mx-auto gap-12">
        <motion.div
          className="max-w-xl text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-5xl font-extrabold leading-tight mb-6">
            Your music, your rules.
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Audara is a Spotify-like self-hosted music server that automatically
            downloads and organizes the songs you want. Take full control of your
            library.
          </p>
          <motion.a
            href="/download"
            className="inline-block bg-green-500 text-black font-semibold px-8 py-4 rounded shadow-lg hover:bg-green-600 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.a>
        </motion.div>
        <motion.div
          className="w-full max-w-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="/images/audara-app-preview.png"
            alt="Audara app preview"
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </section>

      {/* Features */}
      <motion.section
        id="features"
        className="bg-gray-800 py-20 px-8 max-w-7xl mx-auto rounded-lg shadow-lg"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h3 className="text-4xl font-bold mb-12 text-center">Features</h3>
        <motion.div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Self-Hosted",
              description:
                "Host your own music server on your hardware, fully private and under your control.",
              icon: (
                <svg
                  className="w-12 h-12 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 10h18M3 6h18M3 14h18M3 18h18" />
                </svg>
              ),
            },
            {
              title: "Automatic Downloads",
              description:
                "Search and add music; Audara fetches and organizes it automatically.",
              icon: (
                <svg
                  className="w-12 h-12 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 5v14M19 12l-7 7-7-7" />
                </svg>
              ),
            },
            {
              title: "Modern UI",
              description:
                "Beautiful and easy to use interface for desktop and mobile devices.",
              icon: (
                <svg
                  className="w-12 h-12 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 12l2 2 4-4" />
                </svg>
              ),
            },
            {
              title: "Open Source",
              description: "Completely open source — customize and improve however you want.",
              icon: (
                <svg
                  className="w-12 h-12 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 20v-6M12 4v2" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
              ),
            },
          ].map(({ title, description, icon }) => (
            <motion.div
              key={title}
              className="bg-gray-700 p-6 rounded-lg shadow hover:shadow-lg transition"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
            >
              <div className="mb-4">{icon}</div>
              <h4 className="text-xl font-semibold mb-2">{title}</h4>
              <p className="text-gray-400">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* How It Works */}
      <motion.section
        id="how-it-works"
        className="py-20 px-8 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h3 className="text-4xl font-bold mb-12 text-center">How It Works</h3>
        <motion.div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto text-center md:text-left">
          {[
            {
              title: "Search and Add",
              description: "Search for any song or artist, and add them to your library.",
              imgSrc: "/images/search-music.png",
              alt: "Search music",
            },
            {
              title: "Automatic Download",
              description:
                "Audara automatically downloads and organizes your music on your server.",
              imgSrc: "/images/auto-download.png",
              alt: "Auto Download",
            },
            {
              title: "Stream Anywhere",
              description: "Access your music collection from any device, anytime.",
              imgSrc: "/images/stream-anywhere.png",
              alt: "Stream anywhere",
            },
          ].map(({ title, description, imgSrc, alt }) => (
            <motion.div
              key={title}
              className="md:w-1/3"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={imgSrc}
                alt={alt}
                className="rounded-lg shadow-lg mx-auto md:mx-0"
              />
              <h5 className="text-xl font-semibold mt-4 mb-2">{title}</h5>
              <p className="text-gray-400">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Download CTA */}
      <motion.section
        id="download"
        className="bg-green-600 py-16 px-8 text-center text-black font-semibold text-xl"
        animate="animate"
      >
        <h4 className="mb-4">Ready to take control of your music?</h4>
        <motion.a
          href="/download"
          className="inline-block bg-black text-green-500 px-10 py-4 rounded hover:bg-gray-900 transition"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Download Audara Now
        </motion.a>
      </motion.section>

      {/* Footer */}
      <footer className="border-t border-gray-700 py-6 px-8 text-gray-500 text-center text-sm">
        © {new Date().getFullYear()} Audara — Built with ❤️ by PyzaTech
      </footer>
    </div>
  );
};

export default App;
