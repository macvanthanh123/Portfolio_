import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ExternalLink, Github, Star, TrendingUp } from 'lucide-react';

const projects = [
  {
    title: 'Chatbot Pháp luật Việt Nam',
    description: 'Chatbot Luật Việt Nam là một ứng dụng trí tuệ nhân tạo được xây dựng nhằm hỗ trợ người dùng tra cứu và tìm hiểu pháp luật Việt Nam thông qua hình thức hội thoại. Hệ thống sử dụng các mô hình xử lý ngôn ngữ tự nhiên (NLP) để phân tích câu hỏi, truy xuất thông tin từ các văn bản pháp luật như luật, nghị định, thông tư và đưa ra câu trả lời ngắn gọn, dễ hiểu, kèm theo căn cứ pháp lý rõ ràng. Chatbot hướng tới việc giúp cá nhân, sinh viên và doanh nghiệp tiếp cận pháp luật thuận tiện hơn, giảm thời gian tra cứu và hạn chế rủi ro hiểu sai quy định.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    tags: ['gemini','Docker', 'OpenAI', 'React', 'FastAPI', 'PostgreSQL'],
    metrics: [
      { label: 'Response Time', value: '<4s' },
    ],
    github: 'https://github.com/macvanthanh123/VietLawBot',
    featured: true,
  },
  {
  title: 'Ingest Service for LLMs (không thể show code)',
  description: 'Microservice mạnh mẽ để thu thập, phân tích và xử lý tài liệu cho hệ thống LLM: upload & lưu trữ file (MinIO), trích xuất văn bản (PDF, DOCX, HTML, OCR), phân đoạn thông minh (chunking), sinh embedding (OpenAI), lưu trữ metadata & embedding (Postgres + vector store), và cung cấp API tìm kiếm ngữ nghĩa cùng UI thử nghiệm (Streamlit). Hỗ trợ xử lý bất đồng bộ qua Redis/Bytewax để tối ưu throughput và khả năng mở rộng.',
  image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&h=600&fit=crop',
  tags: ['Python', 'FastAPI', 'OpenAI', 'MinIO', 'PostgreSQL', 'Redis', 'Bytewax', 'Streamlit', 'Embeddings', 'Semantic Search'],
  metrics: [
    { label: 'Ingestion throughput', value: 'scalable (workers/Redis)' },
    { label: 'Avg embedding latency', value: '~150ms (model-dependent)' },
    { label: 'Search latency', value: '<200ms (typical)' }
  ],
  github: "không thể show code do công ty mình làm",
  featured: true
  },
  {
  title: 'Nhận diện cử chỉ tay',
  description: 'Hệ thống nhận diện cử chỉ tay sử dụng mô hình Deep Learning dựa trên VGG19 pretrained, được fine-tune cho bài toán phân loại 5 cử chỉ tay phổ biến. Mô hình xử lý ảnh đầu vào kích thước 224×224, áp dụng Transfer Learning và đạt độ chính xác cao trên tập kiểm tra.',
  image: 'https://images.unsplash.com/photo-1526378722461-35c7a8c0b87a?w=800&h=600&fit=crop',
  tags: ['Deep Learning', 'CNN', 'VGG19', 'Transfer Learning', 'Keras', 'OpenCV'],
  metrics: [
    { label: 'Accuracy', value: '99.27%' },
    { label: 'Classes', value: '5 gestures' },
    { label: 'Input Size', value: '224×224 RGB' },
  ],
  github: 'https://github.com/macvanthanh123/image-processing',
  featured: true,
  },
  {
    "title": "Phát hiện đối tượng YOLOv8 cho Tài liệu Giáo dục Tiếng Việt",
    "description": "Dự án này trình bày cách huấn luyện mô hình phát hiện đối tượng YOLOv8 để nhận diện các yếu tố trong tài liệu giáo dục tiếng Việt. Nó giải quyết vấn đề mất cân bằng lớp thông qua các kỹ thuật tăng cường dữ liệu và đạt được độ chính xác phát hiện cao.",
    "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    "tags": ["YOLOv8", "Phát hiện đối tượng", "Tăng cường dữ liệu", "PyTorch", "Thị giác máy tính", "OCR Tiếng Việt"],
    "metrics": [
      { "label": "mAP@50", "value": "0.995" },
      { "label": "mAP@50-95", "value": "0.938" }
    ],
    github: "https://colab.research.google.com/drive/1hPyASPGPIgJ-k6bg4e5pCI__vqZr78qz#scrollTo=vw6kfFGP8S9L",
    featured: true
  },
];

export function ProjectsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" ref={ref} className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-slate-400 text-lg">Showcasing my best AI/ML work and real-world impact</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all"
              whileHover={{ y: -10 }}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-20 flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-sm">
                  <Star className="w-4 h-4 fill-current" />
                  <span>Featured</span>
                </div>
              )}

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-3 py-1 bg-slate-700/50 text-cyan-400 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-3 py-1 bg-slate-700/50 text-slate-400 rounded-full text-sm">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 mb-4 pb-4 border-b border-slate-700/50">
                  {project.metrics.map((metric, metricIdx) => (
                    <div key={metricIdx} className="text-center">
                      <div className="text-cyan-400 flex items-center justify-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        <span className="text-sm">{metric.value}</span>
                      </div>
                      <div className="text-slate-500 text-xs mt-1">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.github}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </motion.a>
                  
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-full hover:border-cyan-500/50 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View All Projects</span>
            <ExternalLink className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
