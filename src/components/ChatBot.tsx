import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Sparkles, Bot } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

// Mock data về AI Engineer
const PROFILE_DATA = {
  name: "Mạc Văn Thanh",
  role: "AI Engineer & ML Enthusiast",
  bio: "Tôi là AI Engineer đam mê biến ý tưởng thành giải pháp thông minh qua công nghệ Machine Learning, Deep Learning và AI tiên tiến.",
  skills: [
    "Python", "TensorFlow", "PyTorch", "Computer Vision", "NLP",
    "Deep Learning", "Machine Learning", "Neural Networks", "LLMs"
  ],
  experience: "5+ năm phát triển AI/ML",
  education: "Thạc sĩ Khoa học Máy tính, chuyên ngành Machine Learning",
  interests: ["Nghiên cứu AGI", "Computer Vision", "Xử lý Ngôn ngữ Tự nhiên", "Generative AI"],
  contact: "Sẵn sàng cho cơ hội mới",
};

// Simple response matching system
const getResponse = (question: string): string => {
  const lowerQuestion = question.toLowerCase();

  // Greetings
  if (lowerQuestion.match(/^(hi|hello|hey|chào|xin chào)/)) {
    return `Xin chào! Tôi là AI Assistant của ${PROFILE_DATA.name}. Tôi có thể giúp bạn tìm hiểu về kỹ năng, kinh nghiệm, dự án và thông tin liên hệ. Bạn muốn biết điều gì?`;
  }

  // Name queries
  if (lowerQuestion.match(/(tên|name|who are you|bạn là ai)/)) {
    return `Tôi là AI Assistant đại diện cho ${PROFILE_DATA.name} - ${PROFILE_DATA.role}. ${PROFILE_DATA.bio}`;
  }

  // Skills queries
  if (lowerQuestion.match(/(skill|kỹ năng|công nghệ|technology|tech stack)/)) {
    return `${PROFILE_DATA.name} có chuyên môn về:\n\nAI/ML: ${PROFILE_DATA.skills.slice(0, 5).join(', ')}\nDeep Learning: ${PROFILE_DATA.skills.slice(5).join(', ')}\n\nVới hơn ${PROFILE_DATA.experience} trong lĩnh vực AI và Machine Learning!`;
  }

  // Experience queries
  if (lowerQuestion.match(/(kinh nghiệm|experience|work|làm việc|công việc)/)) {
    return `${PROFILE_DATA.name} có ${PROFILE_DATA.experience} với nhiều dự án thực tế về:\n\n Computer Vision\nNatural Language Processing\n Generative AI\n Deep Learning Models\n\nBạn có thể xem các dự án cụ thể ở phần Projects!`;
  }

  // Education queries
  if (lowerQuestion.match(/(học vấn|education|degree|học|trường)/)) {
    return `Trình độ học vấn: ${PROFILE_DATA.education}\n\nChuyên sâu về Machine Learning và AI, với nền tảng vững chắc về toán học và khoa học máy tính.`;
  }

  // Projects queries
  if (lowerQuestion.match(/(dự án|project|portfolio|work)/)) {
    return `${PROFILE_DATA.name} đã thực hiện nhiều dự án AI/ML ấn tượng! Bạn có thể:\n\nXem các dự án chi tiết ở phần "Projects" bên dưới\n Ghé thăm GitHub để xem source code\n💼 Xem portfolio đầy đủ với demos và case studies\n\nMỗi dự án đều có ứng dụng thực tế và giải quyết vấn đề cụ thể!`;
  }

  // Interests queries
  if (lowerQuestion.match(/(sở thích|interest|passion|yêu thích)/)) {
    return `Các lĩnh vực quan tâm:\n\n${PROFILE_DATA.interests.map(i => `${i}`).join('\n')}\n\nLuôn cập nhật với các công nghệ AI mới nhất!`;
  }

  // Contact queries
  if (lowerQuestion.match(/(liên hệ|contact|email|hire|tuyển dụng)/)) {
    return `${PROFILE_DATA.contact}! \n\nBạn có thể liên hệ qua:\nmail: Xem phần Contact bên dưới\n💼 LinkedIn: Tìm ở phần social links\n🐙 GitHub: Check out my repositories\n\nHãy scroll xuống phần Contact để gửi tin nhắn trực tiếp!`;
  }

  // AI/Tech specific queries
  if (lowerQuestion.match(/(ai|machine learning|deep learning|neural network|llm|gpt)/)) {
    return `Tôi chuyên về AI và Machine Learning! \n\nCác lĩnh vực chính:\n• Deep Learning & Neural Networks\n• Computer Vision (CNN, Object Detection)\n• NLP & Large Language Models\n• Generative AI (GANs, Diffusion Models)\n• MLOps & Model Deployment\n\nCó câu hỏi cụ thể về công nghệ nào không?`;
  }

  // Default response
  return `Cảm ơn bạn đã hỏi! \n\nTôi có thể giúp bạn về:\n• Kỹ năng và công nghệ\n• Kinh nghiệm làm việc\n• Dự án đã thực hiện\n• Học vấn và chứng chỉ\n• Thông tin liên hệ\n\nBạn muốn biết gì cụ thể hơn về ${PROFILE_DATA.name}?`;
};

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: `Xin chào! Tôi là AI Assistant của ${PROFILE_DATA.name}. Hỏi tôi bất cứ điều gì về kỹ năng, kinh nghiệm, hoặc dự án nhé!`,
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate bot response delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getResponse(input),
        isBot: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 800 + Math.random() * 1000);
  };

  const quickQuestions = [
    "Kỹ năng của bạn là gì?",
    "Kinh nghiệm làm việc",
    "Dự án đã làm",
    "Cách liên hệ"
  ];

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full shadow-lg shadow-cyan-500/50 hover:shadow-xl hover:shadow-purple-500/50 transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              className="relative"
            >
              <MessageCircle className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-400"></span>
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed bottom-24 right-6 z-50 w-[380px] h-[600px] bg-slate-900/95 backdrop-blur-2xl border border-cyan-500/30 rounded-2xl shadow-2xl shadow-cyan-500/20 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border-b border-cyan-500/30 p-4 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Bot className="w-6 h-6" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-900"></span>
                </div>
                <div className="flex-1">
                  <h3 className="flex items-center gap-2">
                    Trợ lý AI
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                  </h3>
                  <p className="text-xs text-slate-400">Luôn sẵn sàng trợ giúp</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 ${message.isBot
                        ? 'bg-slate-800/50 border border-cyan-500/30 text-slate-100'
                        : 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                      }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-slate-800/50 border border-cyan-500/30 rounded-2xl px-4 py-3">
                    <div className="flex gap-1">
                      <motion.div
                        className="w-2 h-2 bg-cyan-400 rounded-full"
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-cyan-400 rounded-full"
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-cyan-400 rounded-full"
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            {messages.length <= 2 && (
              <div className="px-4 pb-2">
                <p className="text-xs text-slate-400 mb-2">Câu hỏi gợi ý:</p>
                <div className="flex flex-wrap gap-2">
                  {quickQuestions.map((q, i) => (
                    <button
                      key={i}
                      onClick={() => setInput(q)}
                      className="text-xs px-3 py-1.5 bg-slate-800/50 border border-cyan-500/30 rounded-full hover:bg-slate-800 hover:border-cyan-500/50 transition-all"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-cyan-500/30 bg-slate-900/50 backdrop-blur-xl">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Hỏi tôi điều gì đó..."
                  className="flex-1 bg-slate-800/50 border border-slate-700 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors"
                />
                <motion.button
                  onClick={handleSend}
                  className="p-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all disabled:opacity-50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={!input.trim()}
                >
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}