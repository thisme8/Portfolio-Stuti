import React from 'react'
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from 'lucide-react';


const Contact = () => {
  return (
    <>
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Let us Create Together
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Ready to bring your next project to life? Let us collaborate and
              create something amazing.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <motion.a
                href="mailto:stutiupreti8@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                target="_blank"
                className="flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
              >
                <Mail className="h-5 w-5" />
                Email Me
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/stuti-upreti-897208348/"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                target="_blank"
                className="flex items-center gap-3 border border-purple-500 text-purple-400 hover:bg-purple-500/10 px-8 py-4 rounded-full font-semibold transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </motion.a>
              <motion.a
                href="https://github.com/thisme8"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                target="_blank"
                className="flex items-center gap-3 border border-purple-500 text-purple-400 hover:bg-purple-500/10 px-8 py-4 rounded-full font-semibold transition-all duration-300"
              >
                <Github className="h-5 w-5" />
                GitHub
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Contact