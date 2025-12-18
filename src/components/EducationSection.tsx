import { GraduationCap, Award, BookOpen } from 'lucide-react';

const education = [
  {
    degree: 'Thạc sĩ Khoa học Máy tính',
    school: 'Đại học Bách Khoa Hà Nội',
    period: '2017 - 2019',
    gpa: '3.8/4.0',
    focus: 'Chuyên ngành: Trí tuệ nhân tạo và Machine Learning',
    thesis: 'Nghiên cứu về Deep Learning trong xử lý ngôn ngữ tự nhiên tiếng Việt'
  },
  {
    degree: 'Kỹ sư Công nghệ Thông tin',
    school: 'Đại học Công nghệ - ĐHQGHN',
    period: '2013 - 2017',
    gpa: '3.6/4.0',
    focus: 'Chuyên ngành: Khoa học máy tính',
    thesis: 'Xây dựng hệ thống recommendation sử dụng Collaborative Filtering'
  }
];

const certifications = [
  {
    name: 'AWS Certified Machine Learning - Specialty',
    issuer: 'Amazon Web Services',
    date: '2023'
  },
  {
    name: 'TensorFlow Developer Certificate',
    issuer: 'Google',
    date: '2022'
  },
  {
    name: 'Deep Learning Specialization',
    issuer: 'DeepLearning.AI - Coursera',
    date: '2021'
  },
  {
    name: 'MLOps Engineering',
    issuer: 'Linux Foundation',
    date: '2023'
  }
];

const publications = [
  {
    title: 'Efficient Vietnamese Text Classification using Pre-trained Language Models',
    venue: 'ACM Computing Conference 2023',
    authors: 'N.M. Tuấn, et al.'
  },
  {
    title: 'Real-time Object Detection for Edge Devices: A Comprehensive Study',
    venue: 'IEEE AI Systems 2022',
    authors: 'N.M. Tuấn, et al.'
  }
];

export function EducationSection() {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10">
      <h2 className="mb-8">Học Vấn & Chứng Chỉ</h2>
      
      <div className="space-y-8">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <h3>Bằng Cấp</h3>
          </div>
          
          <div className="space-y-6">
            {education.map((edu, idx) => (
              <div key={idx} className="pl-6 border-l-2 border-blue-200">
                <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6 border border-slate-100">
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-2">
                    <div>
                      <h4 className="text-slate-900">{edu.degree}</h4>
                      <p className="text-blue-600 mt-1">{edu.school}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-slate-600">{edu.period}</p>
                      <p className="text-green-600 mt-1">GPA: {edu.gpa}</p>
                    </div>
                  </div>
                  <p className="text-slate-700 mt-3">{edu.focus}</p>
                  <p className="text-slate-600 mt-2 italic">{edu.thesis}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-green-500 to-green-600 rounded-xl">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h3>Chứng Chỉ Chuyên Môn</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-50 to-green-50 rounded-xl p-5 border border-slate-100 hover:shadow-md transition-shadow">
                <p className="text-slate-900">{cert.name}</p>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-green-600 text-sm">{cert.issuer}</p>
                  <p className="text-slate-500 text-sm">{cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h3>Công Trình Nghiên Cứu</h3>
          </div>
          
          <div className="space-y-4">
            {publications.map((pub, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-50 to-purple-50 rounded-xl p-5 border border-slate-100">
                <p className="text-slate-900">{pub.title}</p>
                <div className="flex flex-wrap justify-between items-center gap-2 mt-2">
                  <p className="text-purple-600 text-sm">{pub.venue}</p>
                  <p className="text-slate-500 text-sm">{pub.authors}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
