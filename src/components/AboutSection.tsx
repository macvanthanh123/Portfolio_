import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Award, BookOpen, Briefcase, Code2, GraduationCap, Target } from 'lucide-react';

const highlights = [
  {
    icon: Briefcase,
    label: '6 Month',
    description: 'Professional Experience'
  },
  {
    icon: Code2,
    label: '5+ Projects',
    description: 'Successfully Delivered'
  },
  {
    icon: Award,
    label: '5+ Certifications',
    description: 'AI/ML Expertise'
  },
  {
    icon: GraduationCap,
    label: 'DS&AI',
    description: 'Phenikaa University'
  }
];

export function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" ref={ref} className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            About <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-slate-400 text-lg">Get to know more about my journey in AI</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border-2 border-slate-800 shadow-2xl">
              <ImageWithFallback
                src="src\components\image\Screenshot 2025-12-15 141258.png"
                alt="Profile"
                className="w-full aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-6 -right-6 bg-gradient-to-r from-cyan-500 to-purple-600 p-6 rounded-2xl shadow-2xl"
            >
              <Target className="w-8 h-8 text-white" />
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
              <p>
                Tôi là một <span className="text-cyan-400">AI Engineer</span> đầy nhiệt huyết và là sinh viên mới tốt nghiệp,
                có kinh nghiệm thực tế thông qua quá trình thực tập. Tôi tập trung vào việc xây dựng các giải pháp
                Machine Learning mang tính ứng dụng, với mối quan tâm và kinh nghiệm ở cả
                <span className="text-cyan-400"> Xử lý Ngôn ngữ Tự nhiên (NLP)</span> và
                <span className="text-cyan-400"> Thị giác Máy tính (Computer Vision)</span>.
              </p>

              <p>
                Trong thời gian thực tập, tôi đã tham gia phát triển các pipeline xử lý dữ liệu và các thành phần AI
                cho các bài toán thực tế, bao gồm ingest tài liệu, xử lý văn bản và tích hợp mô hình vào các ứng dụng
                thông minh. Tôi yêu thích việc biến dữ liệu thô thành các giá trị và tính năng AI có thể triển khai được.
              </p>

              <p>
                Tôi kết hợp nền tảng <span className="text-purple-400">kiến thức lý thuyết</span> với khả năng triển khai thực tế,
                luôn hướng tới việc viết mã nguồn sạch, dễ bảo trì và không ngừng nâng cao kỹ năng trong việc xây dựng
                các hệ thống AI hiện đại cũng như phát triển backend.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-xl p-4 hover:border-cyan-500/50 transition-all group"
                  whileHover={{ y: -5 }}
                >
                  <item.icon className="w-8 h-8 text-cyan-400 mb-2 group-hover:scale-110 transition-transform" />
                  <p className="text-white text-xl mb-1">{item.label}</p>
                  <p className="text-slate-400 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-6">
              <motion.a
                href="#contact"
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Hire Me
              </motion.a>
              <motion.a
                href="#"
                className="px-6 py-3 bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-full hover:border-cyan-500/50 transition-all flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <BookOpen className="w-5 h-5" />
                Download CV
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
