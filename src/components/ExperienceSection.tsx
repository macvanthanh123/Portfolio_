import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, ExternalLink } from 'lucide-react';

const experiences = [
  {
    company: 'iConnex x Phenikaa',
    position: 'Python Backend Developer Intern',
    duration: 'July 2025 - October 2025',
    website: 'https://phenikaa-x.com/',
    description: [
      'Tham gia phát triển và bảo trì các API backend bằng Python (FastAPI / Flask) phục vụ hệ thống web và ứng dụng nội bộ.',
      'Làm việc với cơ sở dữ liệu (PostgreSQL / MySQL / MongoDB), viết truy vấn SQL cơ bản và tối ưu các thao tác CRUD.',
      'Hỗ trợ xử lý business logic phía server, đảm bảo tính đúng đắn và hiệu năng của hệ thống.',
      'Tham gia debug, fix bug và viết test cơ bản để cải thiện chất lượng mã nguồn.',
      'Phối hợp với frontend và các thành viên khác trong nhóm để tích hợp API và hoàn thiện tính năng.',
      'Sử dụng Git trong quá trình phát triển, tham gia code review và tuân thủ coding standards của dự án.',
      'Hỗ trợ deploy và vận hành ứng dụng ở mức cơ bản (Docker / Linux environment).',
    ],
    technologies: ['Python', 'FastAPI/Flask', 'PostgreSQL/MySQL', 'MongoDB', 'REST APIs', 'Docker', 'Git', 'Linux'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    company: 'Authentic Education Hub',
    position: 'AI Engineer Intern',
    duration: 'March 2025 - June 2025',
    website: 'https://authenticeducationhub.com/en/home/',
    description: [
      'Thiết kế và triển khai Ingest Service cho Dify nhằm thu thập, xử lý và đưa dữ liệu vào dataset phục vụ các ứng dụng RAG (Retrieval-Augmented Generation).',
      'Xây dựng pipeline xử lý dữ liệu đầu–cuối cho tài liệu (PDF, DOCX, TXT, văn bản thô), bao gồm trích xuất nội dung, làm sạch và chuẩn hóa văn bản.',
      'Triển khai các chiến lược chia nhỏ dữ liệu (chunking) như fixed-size và sliding window có overlap để tối ưu hiệu quả truy vấn trong vector search.',
      'Tạo embedding cho văn bản bằng Hugging Face / OpenAI embedding models và lưu trữ vector trong cơ sở dữ liệu vector (FAISS / Qdrant).',
      'Quản lý metadata của tài liệu và chunk (nguồn dữ liệu, document ID, versioning) bằng cơ sở dữ liệu quan hệ / NoSQL.',
      'Phát triển RESTful API với FastAPI để hỗ trợ ingest file, ingest text và đồng bộ dataset với Dify Dataset APIs.',
      'Tối ưu luồng ingest cho xử lý theo batch, giảm lỗi ingest lại và trùng lặp dữ liệu.',
      'Đóng gói dịch vụ bằng Docker và áp dụng các thực hành CI/CD cơ bản trong quá trình phát triển và kiểm thử.',
      'Phối hợp với các thành viên trong nhóm để tích hợp ingest service vào chatbot và các hệ thống AI nội bộ.',
    ],
    technologies: ['Python', 'FastAPI', 'Hugging Face', 'OpenAI API', 'LangChain', 'FAISS/Qdrant', 'PostgreSQL', 'Docker', 'Git'],
    color: 'from-cyan-500 to-blue-500',
  },
];

export function ExperienceSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" ref={ref} className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            Work <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-slate-400 text-lg">My professional journey in tech</p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 opacity-30"></div>

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className={`relative mb-16 ${idx % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'} md:w-full`}
            >
              {/* Timeline Dot */}
              <div className={`absolute left-8 md:left-1/2 top-8 w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} transform -translate-x-1/2 z-10`}>
                <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${exp.color} animate-ping opacity-75`}></div>
              </div>

              {/* Content Card */}
              <div className={`ml-20 md:ml-0 ${idx % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group relative bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all"
                >
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity blur-xl`}></div>

                  {/* Header */}
                  <div className="relative mb-6">
                    <div className="flex items-start justify-between flex-wrap gap-4 mb-3">
                      <div className="flex-1">
                        <a 
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 group/link"
                        >
                          <h3 className="text-2xl text-white group-hover/link:text-cyan-400 transition-colors">
                            {exp.company}
                          </h3>
                          <ExternalLink className="w-5 h-5 text-slate-400 group-hover/link:text-cyan-400 transition-colors" />
                        </a>
                        <p className={`text-lg bg-gradient-to-r ${exp.color} bg-clip-text text-transparent mt-1`}>
                          {exp.position}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-slate-400">
                        <Calendar className="w-5 h-5" />
                        <span>{exp.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="relative mb-6">
                    <ul className="space-y-3 text-slate-300">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className={`inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.color} mt-2 flex-shrink-0`}></span>
                          <span className="text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="relative">
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className={`px-3 py-1.5 text-sm bg-gradient-to-r ${exp.color} bg-opacity-10 backdrop-blur-sm border border-slate-600/50 rounded-lg text-slate-200`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
