import { motion } from "motion/react";
import { useState, useEffect } from "react";
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  FileText,
} from "lucide-react";

export function HeroSection() {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    {
      content: "Mạc Văn Thanh",
      gradient: "from-cyan-400 via-blue-500 to-purple-600",
    },
    {
      content: "Kỹ sư AI & Đam mê Machine Learning",
      gradient: "from-cyan-400 via-blue-500 to-purple-600",
    },
  ];

  useEffect(() => {
    const currentText = texts[textIndex].content;

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          if (displayText.length < currentText.length) {
            setDisplayText(
              currentText.slice(0, displayText.length + 1),
            );
          } else {
            // Wait before deleting
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          // Deleting
          if (displayText.length > 0) {
            setDisplayText(
              currentText.slice(0, displayText.length - 1),
            );
          } else {
            setIsDeleting(false);
            setTextIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? 50 : 100,
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-end px-6 lg:px-0 pt-20"
    >
      {/* Gradient Orbs for additional depth */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 w-full lg:w-[45%] max-w-2xl">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900/80 backdrop-blur-xl border border-cyan-500/40 rounded-full mb-12 shadow-lg shadow-cyan-500/20"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
          </span>
          <span className="text-cyan-400 text-sm">
            Sẵn sàng cho cơ hội mới
          </span>
        </motion.div>

        {/* Main Heading with Typing Animation */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-6xl lg:text-7xl leading-tight mb-8"
        >
          {/* Static greeting text */}
          <span className="block text-white mb-4">
            Xin chào, tôi là
          </span>

          {/* Typing animation text */}
          <span
            className={`block bg-gradient-to-r ${texts[textIndex].gradient} bg-clip-text text-transparent min-h-[1.2em]`}
          >
            {displayText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{
                duration: 0.7,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="inline-block w-1 h-[0.9em] bg-cyan-400 ml-1"
            />
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.5 }}
          className="text-base md:text-lg text-slate-400 mb-10 leading-relaxed max-w-xl"
        >
          Biến ý tưởng thành giải pháp thông minh qua công nghệ
          Machine Learning, Deep Learning và AI tiên tiến. Xây
          dựng tương lai, từng model một.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.7 }}
          className="flex flex-wrap gap-4 mb-12"
        >
          <motion.a
            href="#projects"
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full overflow-hidden shadow-lg shadow-cyan-500/30"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(6, 182, 212, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Xem Dự Án</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </motion.a>

          <motion.a
            href="#contact"
            className="px-8 py-4 bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-full hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Liên Hệ
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.9 }}
          className="flex gap-4"
        >
          {[
            { icon: Github, href: "https://github.com/macvanthanh123", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/thanh-m%E1%BA%A1c-825a93319/", label: "LinkedIn" },
            { icon: Mail, href: "#contact", label: "Email" },
            { icon: FileText, href: "#", label: "Hồ sơ" },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                delay: 2.9 + index * 0.1,
              }}
              className="p-3 bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-full hover:border-cyan-500/50 hover:bg-slate-900 hover:shadow-lg hover:shadow-cyan-500/20 transition-all group"
              whileHover={{ y: -5 }}
              title={social.label}
            >
              <social.icon className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-slate-400 hover:text-cyan-400 transition-colors"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </motion.a>
    </section>
  );
}