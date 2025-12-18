import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Brain, Cloud, Code, Database, Cpu, Zap, Server, HardDrive } from 'lucide-react';

const skillCategories = [
  {
    title: 'Core AI & ML',
    icon: Brain,
    color: 'from-cyan-500 to-blue-500',
    skills: [
      { name: 'Machine Learning' },
      { name: 'Deep Learning' },
      { name: 'Natural Language Processing (NLP)' },
      { name: 'Computer Vision (CV)' },
      { name: 'CNNs' },
      { name: 'Transformers' },
    ]
  },
  {
    title: 'Frameworks & Libraries',
    icon: Zap,
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'PyTorch' },
      { name: 'TensorFlow' },
      { name: 'Scikit-learn' },
      { name: 'Hugging Face Transformers' },
      { name: 'OpenCV' },
      { name: 'Pandas' },
      { name: 'NumPy' },
      { name: 'Matplotlib' },
      { name: 'Seaborn' },
      
    ]
  },
  {
    title: 'Programming',
    icon: Code,
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'Python' },
      { name: 'SQL' },
      { name: 'Git' },
      { name: 'Linux' },
    ]
  },
  {
    title: 'Backend & Model Serving',
    icon: Server,
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'FastAPI' },
      { name: 'Docker (basic usage)' },
      { name: 'MLflow (experiment tracking)' },
    ]
  },
  {
    title: 'Databases & Caching',
    icon: Database,
    color: 'from-blue-500 to-indigo-500',
    skills: [
      { name: 'PostgreSQL' },
      { name: 'MongoDB' },
      { name: 'MySQL' },
      { name: 'Sqlite' },
    ]
  },
  {
    title: 'Familiar With',
    icon: Cloud,
    color: 'from-yellow-500 to-orange-500',
    skills: [
      { name: 'AWS SageMaker' },
      { name: 'LangChain' },
      { name: 'OpenAI API' },
      { name: 'CI/CD concepts (GitHub Actions)' },
    ]
  },
];

export function SkillsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" ref={ref} className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            Skills & <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-slate-400 text-lg">Technologies I work with to build intelligent solutions</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 hover:border-cyan-500/50 transition-all"
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity blur-xl`}></div>

              {/* Icon */}
              <div className="relative mb-6">
                <div className={`inline-flex p-3 bg-gradient-to-br ${category.color} rounded-xl`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl text-white mb-6">{category.title}</h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIdx) => (
                  <motion.span
                    key={skillIdx}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: idx * 0.1 + skillIdx * 0.05 }}
                    className={`px-4 py-2 bg-gradient-to-r ${category.color} bg-opacity-10 backdrop-blur-sm border border-slate-600/50 rounded-lg text-slate-200 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all cursor-default`}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Technologies - REMOVED */}
      </div>
    </section>
  );
}