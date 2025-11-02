import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Brain,
  Database,
  Server,
  ChevronDown,
} from "lucide-react";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = {
    frontend: [
      "React.js",
      "Vue.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
    backend: ["Node.js", "Express.js", "MongoDB", "RESTful APIs"],
    aiml: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "LSTM",
      "Scikit-learn",
      "Pandas",
      "NumPy",
    ],
    tools: ["Git", "Docker", "AWS", "VS Code"],
  };

  const projects = [
    {
      title: "Custom ERP System",
      description:
        "Enterprise Resource Planning solution built with MEVN stack (MongoDB, Express.js, Vue.js, Node.js). Features include inventory management, user authentication, and real-time data analytics.",
      tech: ["Vue.js", "Node.js", "Express.js", "MongoDB"],
      category: "Full Stack",
    },
    {
      title: "Stock Price Prediction",
      description:
        "Advanced LSTM neural network model for predicting stock prices with time series analysis. Achieved high accuracy in forecasting market trends.",
      tech: ["Python", "LSTM", "TensorFlow", "Pandas"],
      category: "AI/ML",
    },
    {
      title: "Machine Learning Pipeline",
      description:
        "End-to-end ML pipeline for data preprocessing, model training, and deployment. Includes multiple classification and regression models.",
      tech: ["Python", "Scikit-learn", "NumPy", "Flask"],
      category: "AI/ML",
    },
    {
      title: "Real-time Chat Application",
      description:
        "Full-stack chat application with WebSocket integration for real-time messaging, user presence, and file sharing capabilities.",
      tech: ["React.js", "Node.js", "Socket.io", "MongoDB"],
      category: "Full Stack",
    },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
  };

  return (
    <div
      className="min-h-screen text-white"
      style={{
        background:
          "linear-gradient(to bottom right, #0f172a, #581c87, #0f172a)",
      }}
    >
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-slate-900/95 backdrop-blur-sm shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Vishnu Karthik
            </h1>
            <div className="flex gap-6">
              {["home", "about", "skills", "projects", "contact"].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize hover:text-purple-400 transition-colors ${
                      activeSection === section ? "text-purple-400" : ""
                    }`}
                  >
                    {section}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-6 relative"
      >
        <div className="text-center max-w-4xl">
          <div className="mb-6 animate-fade-in">
            <span className="text-purple-400 text-lg font-semibold">
              Hello, I'm
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
            Vishnu Karthik
          </h1>
          <h2 className="text-3xl md:text-4xl mb-6 text-gray-300">
            Full Stack Developer & AI/ML Enthusiast
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Crafting scalable web applications and intelligent machine learning
            solutions with 2+ years of experience
          </p>
          <div className="flex gap-4 justify-center mb-12">
            <a
              href="https://github.com/vishnukarthik29"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg transition-all transform hover:scale-105"
            >
              <Github size={20} />
              GitHub
            </a>
            <button
              onClick={() => scrollToSection("contact")}
              className="flex items-center gap-2 border border-purple-400 hover:bg-purple-400/10 px-6 py-3 rounded-lg transition-all"
            >
              <Mail size={20} />
              Contact Me
            </button>
          </div>
        </div>
        <button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown size={32} className="text-purple-400" />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg text-gray-300">
              <p>
                I'm a passionate Full Stack Web Developer and AI/ML enthusiast
                with over 2 years of hands-on experience building robust,
                scalable applications.
              </p>
              <p>
                My expertise spans the entire development lifecycle, from
                designing intuitive user interfaces to architecting complex
                backend systems and implementing intelligent machine learning
                models.
              </p>
              <p>
                I specialize in the MEVN stack and have successfully delivered
                enterprise-level solutions, including a comprehensive Custom ERP
                system that streamlined business operations.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-800/50 p-6 rounded-lg backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all">
                <Code className="text-purple-400 mb-3" size={32} />
                <h3 className="font-semibold text-xl mb-2">Full Stack</h3>
                <p className="text-gray-400">MEVN Stack Development</p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-lg backdrop-blur-sm border border-pink-500/20 hover:border-pink-500/40 transition-all">
                <Brain className="text-pink-400 mb-3" size={32} />
                <h3 className="font-semibold text-xl mb-2">AI/ML</h3>
                <p className="text-gray-400">
                  Machine Learning & Deep Learning
                </p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-lg backdrop-blur-sm border border-blue-500/20 hover:border-blue-500/40 transition-all">
                <Database className="text-blue-400 mb-3" size={32} />
                <h3 className="font-semibold text-xl mb-2">Database</h3>
                <p className="text-gray-400">MongoDB & SQL</p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-lg backdrop-blur-sm border border-green-500/20 hover:border-green-500/40 transition-all">
                <Server className="text-green-400 mb-3" size={32} />
                <h3 className="font-semibold text-xl mb-2">Backend</h3>
                <p className="text-gray-400">Node.js & Express</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="min-h-screen flex items-center px-6 py-20 bg-slate-900/50"
      >
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 p-8 rounded-xl backdrop-blur-sm border border-purple-500/20">
              <h3 className="text-2xl font-semibold mb-6 text-purple-400">
                Frontend Development
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.frontend.map((skill) => (
                  <span
                    key={skill}
                    className="bg-purple-500/20 px-4 py-2 rounded-lg border border-purple-500/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-xl backdrop-blur-sm border border-green-500/20">
              <h3 className="text-2xl font-semibold mb-6 text-green-400">
                Backend Development
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.backend.map((skill) => (
                  <span
                    key={skill}
                    className="bg-green-500/20 px-4 py-2 rounded-lg border border-green-500/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-xl backdrop-blur-sm border border-pink-500/20">
              <h3 className="text-2xl font-semibold mb-6 text-pink-400">
                AI/ML & Data Science
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.aiml.map((skill) => (
                  <span
                    key={skill}
                    className="bg-pink-500/20 px-4 py-2 rounded-lg border border-pink-500/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-xl backdrop-blur-sm border border-blue-500/20">
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">
                Tools & Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.tools.map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-500/20 px-4 py-2 rounded-lg border border-blue-500/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen flex items-center px-6 py-20"
      >
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-800/50 p-8 rounded-xl backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all transform hover:-translate-y-2"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  <span className="text-xs bg-purple-500/20 px-3 py-1 rounded-full border border-purple-500/30">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-400 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-sm bg-slate-700/50 px-3 py-1 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="https://github.com/vishnukarthik29"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-lg transition-all transform hover:scale-105"
            >
              <ExternalLink size={20} />
              View More on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* GitHub Contributions Section */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">
            GitHub Activity
          </h2>
          <p className="text-center text-gray-400 mb-12">
            My contribution graph over the past year
          </p>
          <div className="bg-slate-800/50 p-8 rounded-xl backdrop-blur-sm border border-purple-500/20">
            <img
              src="https://ghchart.rshah.org/8B5CF6/vishnukarthik29"
              alt="GitHub Contribution Chart"
              className="w-full rounded-lg"
              style={{ imageRendering: "crisp-edges" }}
            />
            <div className="mt-6 text-center">
              <a
                href="https://github.com/vishnukarthik29"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
              >
                <Github size={20} />
                <span>View Full GitHub Profile</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen flex items-center px-6 py-20 bg-slate-900/50"
      >
        <div className="max-w-4xl mx-auto text-center w-full">
          <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
          <p className="text-xl text-gray-400 mb-12">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <a
              href="https://github.com/vishnukarthik29"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-slate-800 hover:bg-slate-700 px-8 py-4 rounded-lg transition-all transform hover:scale-105"
            >
              <Github size={24} />
              <span>GitHub</span>
            </a>
            <a
              href="mailto:your.email@example.com"
              className="flex items-center gap-3 bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-lg transition-all transform hover:scale-105"
            >
              <Mail size={24} />
              <span>Email Me</span>
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg transition-all transform hover:scale-105"
            >
              <Linkedin size={24} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8 text-center text-gray-400">
        <p>&copy; 2024 Vishnu Karthik. Built with React & Tailwind CSS</p>
      </footer>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}
