
import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with cart management, payment integration, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    gradient: "from-cyan-400 to-blue-500"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team collaboration features.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
    technologies: ["Vue.js", "Firebase", "Vuetify", "PWA"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    gradient: "from-blue-500 to-purple-500"
  },
  {
    title: "Weather Dashboard",
    description: "A beautiful weather dashboard with forecasts, maps, and location-based weather data.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
    technologies: ["React", "TypeScript", "Chart.js", "Weather API"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio website with animations, dark mode, and contact form integration.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    gradient: "from-pink-500 to-red-500"
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media management with real-time data visualization.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
    technologies: ["React", "D3.js", "Express", "PostgreSQL"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    gradient: "from-red-500 to-orange-500"
  },
  {
    title: "Learning Platform",
    description: "An interactive learning platform with video courses, quizzes, and progress tracking.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop",
    technologies: ["Angular", "TypeScript", "Material UI", "Node.js"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    gradient: "from-orange-500 to-yellow-500"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="glass rounded-xl overflow-hidden backdrop-blur-xl border border-white/10 hover-glow transition-all duration-300">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className={`text-xl font-semibold mb-2 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md border border-border"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 py-2 px-4 bg-gradient-to-r ${project.gradient} bg-opacity-20 hover:bg-opacity-30 text-center rounded-lg border border-current transition-all duration-300 text-sm font-medium`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      GitHub
                    </motion.a>
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 py-2 px-4 bg-gradient-to-r ${project.gradient} text-white text-center rounded-lg transition-all duration-300 text-sm font-medium hover-glow`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Live Demo
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">Want to see more of my work?</p>
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full font-medium text-lg hover-glow transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
