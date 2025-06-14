
import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: "TechCorp Solutions",
    position: "Senior Frontend Developer",
    period: "2022 - Present",
    location: "Remote",
    description: "Leading frontend development for enterprise web applications using React, TypeScript, and modern CSS frameworks. Collaborated with cross-functional teams to deliver high-quality user experiences.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js", "GraphQL"],
    logo: "🏢",
    color: "from-cyan-400 to-blue-500"
  },
  {
    company: "Digital Innovations",
    position: "Frontend Developer",
    period: "2020 - 2022",
    location: "New York, NY",
    description: "Developed responsive web applications and interactive user interfaces. Implemented modern design systems and improved application performance by 40%.",
    technologies: ["React", "JavaScript", "SCSS", "Redux", "REST APIs"],
    logo: "💼",
    color: "from-blue-500 to-purple-500"
  },
  {
    company: "StartupXYZ",
    position: "Junior Developer",
    period: "2019 - 2020",
    location: "San Francisco, CA",
    description: "Built and maintained web applications using modern JavaScript frameworks. Contributed to the development of the company's main product and helped improve user engagement by 25%.",
    technologies: ["Vue.js", "JavaScript", "CSS3", "Firebase", "Node.js"],
    logo: "🚀",
    color: "from-purple-500 to-pink-500"
  },
  {
    company: "Freelance",
    position: "Web Developer",
    period: "2018 - 2019",
    location: "Remote",
    description: "Worked with various clients to create custom websites and web applications. Focused on responsive design and optimal user experience across all devices.",
    technologies: ["HTML5", "CSS3", "JavaScript", "WordPress", "PHP"],
    logo: "💻",
    color: "from-pink-500 to-red-500"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey and the experiences that shaped my career
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 transform md:-translate-x-0.5" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:flex-row`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full transform md:-translate-x-2 z-10 shadow-lg" />

                {/* Content */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <motion.div
                    className="glass rounded-xl p-6 backdrop-blur-xl border border-white/10 hover-glow group cursor-pointer"
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-start space-x-4">
                      <motion.div
                        className={`text-3xl p-3 rounded-lg bg-gradient-to-r ${exp.color} bg-opacity-20`}
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        {exp.logo}
                      </motion.div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h3 className={`text-xl font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                            {exp.position}
                          </h3>
                          <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                            {exp.period}
                          </span>
                        </div>
                        <p className="text-lg font-medium text-foreground mb-1">{exp.company}</p>
                        <p className="text-sm text-muted-foreground mb-3">{exp.location}</p>
                        <p className="text-muted-foreground leading-relaxed mb-4 group-hover:text-foreground transition-colors duration-300">
                          {exp.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <motion.span
                              key={techIndex}
                              className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 text-xs rounded-full border border-cyan-500/30"
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.2 }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block md:w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
