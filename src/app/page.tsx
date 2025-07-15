"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { skills } from "@/constants";
import ProjectSection from "./components/ProjectSection";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import BackgroundParticles from "@/components/ui/backgroundParticles";

export default function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const [cursorVariant, setCursorVariant] = useState("default");
  const projectRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 18,
      y: mousePosition.y - 18,
    },
    text: {
      height: 100,
      width: 100,
      x: mousePosition.x - 50,
      y: mousePosition.y - 50,
      backgroundColor: "#ec4899",
      mixBlendMode: "difference",
    },
  };

  const textEnter = () => setCursorVariant("text");

  const textLeave = () => setCursorVariant("default");

  return (
    <div>
      <BackgroundParticles />
      <div
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
        className="cursor-none min-h-screen bg-black text-white overflow-hidden"
      >
        <motion.section
          className="relative z-10 min-h-screen flex items-center justify-center px-4"
          style={{ y, opacity }}
        >
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, type: "spring", bounce: 0.5 }}
              className="mb-8"
            >
              <div className="w-32 h-32 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-4xl font-bold mb-6 shadow-2xl">
                SU
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent"
            >
              Stuti Upreti{" "}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
            >
              Creative Developer & Digital Creator
              <br />
              <span className="text-purple-400">
                Chasing Innovations that leave an Impact
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 px-8 py-3 text-lg group"
                onClick={() => {
                  projectRef.current?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-500 text-purple-400 hover:bg-purple-500/10 px-8 py-3 text-lg bg-transparent"
                onClick={() => {
                  contactRef.current?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get In Touch
              </Button>
            </motion.div>
          </div>
        </motion.section>
        <section className="relative z-10 py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                About Me
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                I am a passionate developer who believes in the power of{" "}
                <span className="font-semibold text-purple-400">
                  Creative Code.
                </span>{" "}
                With a penchant for bringing impactful ideas to life, I am
                working towards becoming a human-centric developer rather than
                just a coder.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  className="group"
                >
                  <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                        <skill.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-white">
                        {skill.name}
                      </h3>
                      <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ delay: index * 0.2 + 0.5, duration: 1 }}
                          viewport={{ once: true }}
                          className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                        />
                      </div>
                      <span className="text-purple-400 font-semibold">
                        {skill.level}%
                      </span>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <motion.div
          className="cursor pointer-events-none bg-purple-300 h-12 w-12 rounded-full top-0 left-0 fixed"
          variants={variants}
          animate={cursorVariant}
        />
        <div ref={projectRef}>
          <ProjectSection />
        </div>
        <Certificates />
        <div ref={contactRef}>
          <Contact />
        </div>
        <footer className="relative z-10 py-8 px-4 border-t border-gray-800">
          <div className="max-w-6xl mx-auto text-center">
            <p>
              &copy; {new Date().getFullYear()} Stuti Upreti. All Rights
              Reserved
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
