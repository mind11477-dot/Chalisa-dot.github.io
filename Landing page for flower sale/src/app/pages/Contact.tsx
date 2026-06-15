import { useState, FormEvent } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-yellow-50">
      <div className="bg-gradient-to-r from-red-100 to-pink-100 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl mb-6 text-gray-800">ติดต่อเรา</h1>
          <p className="text-xl text-gray-600">
            มีคำถามหรือต้องการคำแนะนำ? ติดต่อเราได้เลย
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl mb-8 text-gray-800">ส่งข้อความถึงเรา</h2>

            {isSubmitted && (
              <div className="mb-6 bg-green-100 text-green-700 px-6 py-4 rounded-xl">
                ขอบคุณที่ติดต่อเรา! เราจะตอบกลับโดยเร็วที่สุด
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">ชื่อของคุณ *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none"
                  placeholder="กรอกชื่อของคุณ"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">อีเมล *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">เบอร์โทรศัพท์</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none"
                  placeholder="0XX-XXX-XXXX"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">ข้อความ *</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none resize-none"
                  rows={6}
                  placeholder="เขียนข้อความของคุณที่นี่..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full text-lg shadow-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                ส่งข้อความ
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-3xl mb-8 text-gray-800">ข้อมูลติดต่อ</h2>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-lg">
                <div className="bg-gradient-to-br from-red-400 to-yellow-400 p-3 rounded-full flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg mb-2 text-gray-800">ที่อยู่ร้าน</h3>
                  <p className="text-gray-600">
                    123 ถนนดอกไม้สวย แขวงสวนหลวง<br />
                    เขตสวนหลวง กรุงเทพฯ 10250
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-lg">
                <div className="bg-gradient-to-br from-red-400 to-yellow-400 p-3 rounded-full flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg mb-2 text-gray-800">โทรศัพท์</h3>
                  <p className="text-gray-600">02-XXX-XXXX</p>
                  <p className="text-gray-600">089-XXX-XXXX</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-lg">
                <div className="bg-gradient-to-br from-red-400 to-yellow-400 p-3 rounded-full flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg mb-2 text-gray-800">อีเมล</h3>
                  <p className="text-gray-600">info@flowers.com</p>
                  <p className="text-gray-600">support@flowers.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-lg">
                <div className="bg-gradient-to-br from-red-400 to-yellow-400 p-3 rounded-full flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg mb-2 text-gray-800">เวลาทำการ</h3>
                  <p className="text-gray-600">จันทร์-ศุกร์: 9:00 - 18:00</p>
                  <p className="text-gray-600">เสาร์-อาทิตย์: 10:00 - 17:00</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <MessageCircle className="w-8 h-8 text-green-600" />
                <h3 className="text-xl text-gray-800">แชทกับเราทาง Line</h3>
              </div>
              <p className="text-gray-600 mb-4">
                ติดต่อเราผ่าน Line Official Account สำหรับคำปรึกษาและการสั่งซื้อ
              </p>
              <button
                onClick={() => window.open('https://line.me/ti/p/@mindnaeiei2', '_blank')}
                className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                </svg>
                @mindnaeiei2
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl mb-8 text-center text-gray-800">แผนที่ร้าน</h2>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-96 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <MapPin className="w-16 h-16 mx-auto mb-4 text-gray-300" />
              <p className="text-lg">แผนที่ Google Maps จะแสดงที่นี่</p>
              <p className="text-sm mt-2">123 ถนนดอกไม้สวย แขวงสวนหลวง กรุงเทพฯ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
