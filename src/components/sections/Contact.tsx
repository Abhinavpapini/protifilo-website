
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com",
    icon: "🐙",
    gradient: "from-gray-400 to-gray-600"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: "💼",
    gradient: "from-blue-500 to-blue-700"
  },
  {
    name: "Twitter",
    url: "https://twitter.com",
    icon: "🐦",
    gradient: "from-cyan-400 to-blue-500"
  },
  {
    name: "Email",
    url: "mailto:abhinav@example.com",
    icon: "📧",
    gradient: "from-red-400 to-pink-500"
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const downloadResume = () => {
    // Simulate resume download
    toast({
      title: "Resume downloaded!",
      description: "The resume has been downloaded to your device.",
    });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Contact Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's collaborate and create something amazing together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="glass rounded-xl p-8 backdrop-blur-xl border border-white/10">
              <h3 className="text-2xl font-semibold mb-6 gradient-text">Send Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-background/50 border-border focus:border-cyan-500 transition-colors duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-background/50 border-border focus:border-cyan-500 transition-colors duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="bg-background/50 border-border focus:border-cyan-500 transition-colors duration-300 resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-medium py-3 rounded-lg transition-all duration-300 hover-glow"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Resume Download */}
            <div className="glass rounded-xl p-6 backdrop-blur-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-4 gradient-text">Resume</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Download my resume to learn more about my experience.
              </p>
              <motion.button
                onClick={downloadResume}
                className="w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg font-medium transition-all duration-300 hover-glow"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                📄 Download Resume
              </motion.button>
            </div>

            {/* Social Links */}
            <div className="glass rounded-xl p-6 backdrop-blur-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-4 gradient-text">Connect</h3>
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center space-x-3 p-3 bg-gradient-to-r ${social.gradient} bg-opacity-20 hover:bg-opacity-30 rounded-lg border border-current/30 hover:border-current/50 transition-all duration-300 group`}
                  >
                    <span className="text-lg">{social.icon}</span>
                    <span className="font-medium group-hover:text-white transition-colors">
                      {social.name}
                    </span>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="glass rounded-xl p-6 backdrop-blur-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-4 gradient-text">Get in Touch</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-lg">📍</span>
                  <span className="text-muted-foreground text-sm">Remote / Available Worldwide</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-lg">💼</span>
                  <span className="text-muted-foreground text-sm">Open for Opportunities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-lg">⚡</span>
                  <span className="text-muted-foreground text-sm">Usually responds within 24 hours</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center border-t border-border/50 pt-8"
        >
          <p className="text-muted-foreground">
            © 2024 Abhinav. Built with ❤️ using React, TypeScript, and Tailwind CSS.
          </p>
          <motion.div
            className="mt-4"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-2xl font-greatVibes gradient-text font-bold">
              &lt;Abhinav /&gt;
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
