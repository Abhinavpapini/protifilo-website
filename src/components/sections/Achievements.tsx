
import React from 'react';
import { motion } from 'framer-motion';

const achievements = [
  {
    title: "Tech Innovation Hackathon 2023",
    award: "1st Place Winner",
    description: "Won first place for developing an AI-powered productivity application with my team in 48 hours.",
    date: "2023",
    icon: "🏆",
    gradient: "from-yellow-400 to-orange-500"
  },
  {
    title: "Web Development Excellence",
    award: "Certificate of Achievement",
    description: "Received recognition for outstanding performance in advanced web development coursework.",
    date: "2022",
    icon: "🎓",
    gradient: "from-cyan-400 to-blue-500"
  },
  {
    title: "Open Source Contribution",
    award: "Top Contributor",
    description: "Recognized as a top contributor to several popular open-source React libraries on GitHub.",
    date: "2022",
    icon: "⭐",
    gradient: "from-green-400 to-blue-500"
  },
  {
    title: "JavaScript Mastery",
    award: "Advanced Certification",
    description: "Completed comprehensive JavaScript certification covering ES6+, async programming, and modern frameworks.",
    date: "2021",
    icon: "📜",
    gradient: "from-purple-400 to-pink-500"
  },
  {
    title: "UI/UX Design Challenge",
    award: "2nd Place",
    description: "Secured second place in a competitive UI/UX design challenge focusing on mobile-first design principles.",
    date: "2021",
    icon: "🎨",
    gradient: "from-pink-400 to-red-500"
  },
  {
    title: "Code Review Excellence",
    award: "Team Recognition",
    description: "Acknowledged by team leads for consistently providing high-quality code reviews and mentoring junior developers.",
    date: "2023",
    icon: "💎",
    gradient: "from-blue-400 to-purple-500"
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Milestones and recognitions that mark my journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="glass rounded-xl p-6 backdrop-blur-xl border border-white/10 hover-glow transition-all duration-300 h-full">
                {/* Sparkle effects */}
                <div className="absolute top-2 right-2 flex space-x-1">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-1 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full sparkle"
                      animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </div>

                <div className="text-center mb-4">
                  <motion.div
                    className={`text-5xl mb-4 inline-block p-4 rounded-xl bg-gradient-to-r ${achievement.gradient} bg-opacity-20`}
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    transition={{ duration: 0.3 }}
                  >
                    {achievement.icon}
                  </motion.div>
                </div>

                <div className="text-center">
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {achievement.title}
                  </h3>
                  <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${achievement.gradient} bg-opacity-20 mb-3`}>
                    <span className={`text-sm font-medium bg-gradient-to-r ${achievement.gradient} bg-clip-text text-transparent`}>
                      {achievement.award}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 group-hover:text-foreground/80 transition-colors duration-300">
                    {achievement.description}
                  </p>
                  <div className="flex items-center justify-center">
                    <span className={`text-xs font-semibold bg-gradient-to-r ${achievement.gradient} bg-clip-text text-transparent`}>
                      {achievement.date}
                    </span>
                  </div>
                </div>

                {/* Decorative border animation */}
                <motion.div
                  className={`absolute inset-0 rounded-xl bg-gradient-to-r ${achievement.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                  style={{ padding: '2px' }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Statistics section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <div className="glass rounded-2xl p-8 backdrop-blur-xl border border-white/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { label: "Projects Completed", value: "50+", icon: "🚀" },
                { label: "Hackathons Won", value: "3", icon: "🏆" },
                { label: "Open Source Contributions", value: "100+", icon: "⭐" },
                { label: "Years of Experience", value: "5+", icon: "💼" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="group cursor-pointer"
                >
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
