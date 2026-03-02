import { useState } from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Mail, MapPin, Phone, Send, Github, Linkedin, MessageSquare } from 'lucide-react';

export function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'macvanthanh200@gmail.com',
      href: '',
    },
    {
      icon: Phone,
      label: 'Số điện thoại',
      value: '0867153918',
      href: '',
    },
    {
      icon: MapPin,
      label: 'Địa điểm',
      value: 'Mễ trì, Hà Nội',
      href: 'https://www.google.com/search?q=m%E1%BB%85+tr%C3%AC&oq=m%E1%BB%85+tr%C3%AC&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyBwgBEC4YgAQyBwgCEAAYgAQyBwgDEC4YgAQyDQgEEC4YrwEYxwEYgAQyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQgxOTc1ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8',
    },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/macvanthanh123', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/thanh-m%E1%BA%A1c-825a93319/', label: 'LinkedIn' },
    { icon: MessageSquare, href: '#', label: 'Discord' },
  ];

  return (
    <section id="contact" ref={ref} className="relative py-32 px-6">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            Hãy <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Kết nối</span>
          </h2>
          <p className="text-slate-400 text-lg">Bạn có ý tưởng dự án? Hãy cùng nhau xây dựng điều gì đó tuyệt vời</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl text-white mb-4">Liên hệ</h3>
              <p className="text-slate-400 mb-8">
                Tôi luôn sẵn sàng thảo luận về các dự án mới, ý tưởng sáng tạo hoặc cơ hội hợp tác để cùng thực hiện tầm nhìn của bạn.
                Đừng ngần ngại liên hệ qua bất kỳ kênh nào dưới đây.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, idx) => (
                <motion.a
                  key={idx}
                  href={info.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-xl hover:border-cyan-500/50 transition-all group"
                  whileHover={{ x: 10 }}
                >
                  <div className="p-3 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">{info.label}</p>
                    <p className="text-white">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg text-white mb-4">Theo dõi tôi</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + idx * 0.1 }}
                    className="p-3 bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-xl hover:border-cyan-500/50 transition-all group"
                    whileHover={{ y: -5, scale: 1.1 }}
                    title={social.label}
                  >
                    <social.icon className="w-6 h-6 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center gap-3 p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-xl"
            >
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </div>
              <span className="text-green-400">Sẵn sàng cho các cơ hội hợp tác</span>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/30 transition-all">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl opacity-0 hover:opacity-20 blur-2xl transition-opacity"></div>

              <form onSubmit={handleSubmit} className="relative space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-slate-400 mb-2">
                    Họ và tên
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 text-white placeholder-slate-500 transition-all"
                    placeholder="Nguyễn Văn A"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-slate-400 mb-2">
                    Địa chỉ Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 text-white placeholder-slate-500 transition-all"
                    placeholder="nva@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm text-slate-400 mb-2">
                    Tiêu đề
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 text-white placeholder-slate-500 transition-all"
                    placeholder="Yêu cầu dự án"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-slate-400 mb-2">
                    Tin nhắn
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 text-white placeholder-slate-500 resize-none transition-all"
                    placeholder="Hãy kể cho tôi nghe về dự án của bạn..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all flex items-center justify-center gap-2 group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Gửi tin nhắn</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
