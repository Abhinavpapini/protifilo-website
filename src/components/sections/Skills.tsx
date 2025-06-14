
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const programmingLanguages = [
  { name: "JavaScript", icon: "🟨" },
  { name: "TypeScript", icon: "🔷" },
  { name: "Python", icon: "🐍" },
  { name: "Java", icon: "☕" },
  { name: "HTML5", icon: "🌐" },
  { name: "CSS3", icon: "🎨" }
];

const frameworks = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "Vue.js", icon: "💚" },
  { name: "Angular", icon: "🅰️" },
  { name: "Node.js", icon: "🟢" },
  { name: "Express.js", icon: "🚀" }
];

const tools = [
  { name: "Git", icon: "📝" },
  { name: "Docker", icon: "🐳" },
  { name: "AWS", icon: "☁️" },
  { name: "MongoDB", icon: "🍃" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Redis", icon: "🔴" }
];

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const SkillIcon = ({ skill, category }: { skill: any, category: string }) => (
    <motion.div
      className="relative"
      onHoverStart={() => setHoveredSkill(`${category}-${skill.name}`)}
      onHoverEnd={() => setHoveredSkill(null)}
      whileHover={{ scale: 1.1, y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg border border-cyan-500/30 flex items-center justify-center text-2xl hover:border-cyan-500/50 transition-all duration-300 cursor-pointer">
        {skill.icon}
      </div>
      <motion.div
        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
        initial={{ opacity: 0, y: 10 }}
        animate={{ 
          opacity: hoveredSkill === `${category}-${skill.name}` ? 1 : 0,
          y: hoveredSkill === `${category}-${skill.name}` ? 0 : 10
        }}
        transition={{ duration: 0.2 }}
      >
        <span className="text-sm font-medium text-cyan-400 bg-background/80 px-2 py-1 rounded">
          {skill.name}
        </span>
      </motion.div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Programming Languages - Center */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-semibold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Programming Languages
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {programmingLanguages.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <SkillIcon skill={skill} category="languages" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Frameworks & Tools - Below */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Frameworks */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h3 className="text-2xl font-semibold mb-8 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Frameworks & Libraries
            </h3>
            <div className="grid grid-cols-3 gap-6 justify-items-center">
              {frameworks.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <SkillIcon skill={skill} category="frameworks" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h3 className="text-2xl font-semibold mb-8 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Tools & Technologies
            </h3>
            <div className="grid grid-cols-3 gap-6 justify-items-center">
              {tools.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <SkillIcon skill={skill} category="tools" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-semibold text-center mb-12 gradient-text">
            Education
          </h3>
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="glass rounded-2xl p-8 backdrop-blur-xl border border-white/10 hover-glow"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                <motion.div
                  className="text-6xl"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  🎓
                </motion.div>
                <div className="text-center md:text-left flex-1">
                  <h4 className="text-2xl font-semibold mb-2 gradient-text">
                    Bachelor of Technology in Computer Science Engineering
                  </h4>
                  <p className="text-lg text-cyan-400 mb-2">
                    VNR VJIET (Vignana Jyothi Institute of Engineering and Technology)
                  </p>
                  <p className="text-muted-foreground mb-4">
                    2023 - 2027
                  </p>
                  <motion.div
                    className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 rounded-full border border-cyan-500/30"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="font-semibold">CGPA: 9.5</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
