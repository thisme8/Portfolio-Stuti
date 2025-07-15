import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Certificates = () => {
  return (
    <>
      {" "}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Courses & Certificates
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Continuous learning and professional development achievements
            </p>

            <motion.div
              whileHover={{ scale: 1.05, rotateY: 5 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link href="/certificates">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white border-0 px-12 py-4 text-xl group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    View All Certificates
                    <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {[
              {
                title: "Flutter Training Course",
                provider: "DataCamp",
                date: "July 2023",
                category: "frontend",
                image: "/flutter.jpg?height=300&width=400",
                description:
                  "Comprehensive Flutter course for mobile development",
                skills: ["Flutter", "Dart"],

                color: "from-purple-500 to-pink-500",
              },

              {
                title: "Understanding Cloud Computing",
                provider: "DataCamp",
                date: "June 2025",
                category: "cloud",
                image: "/hackathon.jpg?height=300&width=400",
                description:
                  "Comprehensive Flutter course for mobile development",
                skills: ["AWS", "Cloud"],

                color: "from-purple-500 to-pink-500",
              },
              {
                title: "MERN Stack Training",
                provider: "Cloud Native Computing Foundation",
                date: "July 2024",
                category: "fullstack",
                image: "/mern.jpg?height=300&width=400",
                description:
                  "Complete full-stack development with modern frameworks",
                skills: ["React", "Node.js", "MongoDB", "Express"],
                color: "from-indigo-500 to-purple-500",
              },
            ].map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, rotateY: 3 }}
                className="group cursor-pointer h-full"
              >
                <Link href="/certificates">
                  <Card className="h-full flex flex-col justify-between bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:border-yellow-500/50 transition-all duration-300 overflow-hidden">
                    <div
                      className={`h-32 bg-gradient-to-br ${cert.color} relative`}
                    >
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                      <div className="absolute bottom-2 right-2 text-white/80 text-sm font-semibold">
                        {cert.date}
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold text-white mb-1">
                        {cert.title}
                      </h3>
                      <p className="text-gray-400 text-sm">{cert.provider}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Certificates;
