"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Award,
  Calendar,
  ExternalLink,
  Download,
  Search,
  Filter,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { categories, certificates } from "@/constants";
import BackgroundParticles from "@/components/ui/backgroundParticles";

export default function CertificatesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  const filteredCertificates = certificates.filter((cert) => {
    const matchesCategory =
      selectedCategory === "all" || cert.category === selectedCategory;
    const matchesSearch =
      cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.skills.some((skill) =>
        skill.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-black text-white">
      <BackgroundParticles />
      <div className="relative z-10">
        <motion.header
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="p-6 border-b border-gray-800"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link href="/">
              <Button
                variant="ghost"
                className="text-white hover:text-yellow-400 hover:bg-yellow-400/10"
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Portfolio
              </Button>
            </Link>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Certificates & Achievements
            </h1>
            <div className="w-32" />
          </div>
        </motion.header>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="py-16 px-6 text-center"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
            My Learning Journey
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            A collection of professional certifications and courses that
            showcase my commitment to continuous learning and skill development
          </p>
          <div className="flex items-center justify-center gap-4 text-gray-400">
            <Award className="h-6 w-6 text-yellow-400" />
            <span>{certificates.length} Certificates Earned</span>
            <span>•</span>
            <Calendar className="h-6 w-6 text-yellow-400" />
            <span>Updated July 2025</span>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="px-6 mb-12"
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search certificates, providers, or skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-gray-900/50 border-gray-700 text-white placeholder-gray-400 focus:border-yellow-500"
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5 text-gray-400" />
                <span className="text-gray-400 text-sm">Filter:</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  {category.name} ({category.count})
                </motion.button>
              ))}
            </div>
          </div>
        </motion.section>

        <section className="px-6 pb-20">
          <div className="max-w-7xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory + searchTerm}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredCertificates.map((cert, index) => (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, y: 50, rotateX: -15 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.03, rotateY: 5 }}
                    onClick={() => setSelectedCert(cert.id)}
                    className="group cursor-pointer"
                  >
                    <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:border-yellow-500/50 transition-all duration-300 overflow-hidden">
                      <div
                        className={`h-48 bg-gradient-to-br ${cert.color} relative overflow-hidden`}
                      >
                        <Image
                          src={cert.image}
                          alt={cert.title}
                          width={100}
                          height={100}
                          className="w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-opacity duration-300"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                        <div className="absolute top-4 right-4 opacity-40 group-hover:opacity-100 transition-opacity duration-300">
                          <ExternalLink className="h-6 w-6 text-white" />
                        </div>
                        <div className="absolute bottom-4 left-4">
                          <Award className="h-8 w-8 text-white/80" />
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-yellow-400 transition-colors">
                          {cert.title}
                        </h3>
                        <p className="text-gray-400 mb-2">{cert.provider}</p>
                        <p className="text-gray-500 text-sm mb-4">
                          {cert.date}
                        </p>
                        <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                          {cert.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.slice(0, 3).map((skill) => (
                            <span
                              key={skill}
                              className="px-2 py-1 bg-yellow-500/20 text-yellow-300 rounded text-xs border border-yellow-500/30"
                            >
                              {skill}
                            </span>
                          ))}
                          {cert.skills.length > 3 && (
                            <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                              +{cert.skills.length - 3} more
                            </span>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {filteredCertificates.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <Award className="h-16 w-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-400 mb-2">
                  No certificates found
                </h3>
                <p className="text-gray-500">
                  Try adjusting your search or filter criteria
                </p>
              </motion.div>
            )}
          </div>
        </section>

        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedCert(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-gray-900 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-700"
              >
                {(() => {
                  const cert = certificates.find((c) => c.id === selectedCert);
                  if (!cert) return null;

                  return (
                    <>
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <h2 className="text-3xl font-bold text-white mb-2">
                            {cert.title}
                          </h2>
                          <p className="text-yellow-400 text-lg">
                            {cert.provider}
                          </p>
                          <p className="text-gray-400">{cert.date}</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setSelectedCert(null)}
                          className="text-gray-400 hover:text-white"
                        >
                          ✕
                        </Button>
                      </div>

                      <div
                        className={`max-h-[400px] overflow-y-auto bg-gradient-to-br ${cert.color} rounded-lg mb-6 relative`}
                      >
                        <Image
                          src={cert.image || "/placeholder.svg"}
                          alt={cert.title}
                          width={86}
                          height={86}
                          className="w-full h-full object-cover opacity-100 overflow-y-auto"
                        />
                        <div className="absolute h-full" />
                        <div className="absolute top-6 right-4">
                          <Award className="h-12 w-12 text-black" />
                        </div>
                      </div>

                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {cert.description}
                      </p>

                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-white mb-3">
                          Skills Covered
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm border border-yellow-500/30"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <a
                        href={cert.image}
                        download
                        className="inline-flex items-center px-4 py-2 border border-gray-600 text-gray-300 hover:bg-gray-800 rounded-md transition-colors"
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </a>
                    </>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
