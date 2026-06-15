import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Heart, Award, Users, Truck } from 'lucide-react';

export function About() {
  const values = [
    {
      icon: Heart,
      title: 'ดอกไม้คุณภาพพรีเมียม',
      description: 'คัดสรรดอกไม้สดใหม่ทุกวัน จากสวนดอกไม้คุณภาพ',
    },
    {
      icon: Award,
      title: 'ฝีมือจัดช่อระดับมืออาชีพ',
      description: 'ทีมงานมากประสบการณ์ ใส่ใจทุกรายละเอียด',
    },
    {
      icon: Users,
      title: 'บริการดีเยี่ยม',
      description: 'ให้คำปรึกษาและบริการด้วยใจ ทุกความต้องการ',
    },
    {
      icon: Truck,
      title: 'จัดส่งตรงเวลา',
      description: 'ส่งถึงมือคุณในสภาพสมบูรณ์และตรงเวลา',
    },
  ];

  const team = [
    {
      name: 'คุณน้ำ',
      role: 'ผู้ก่อตั้ง',
      image: 'https://images.unsplash.com/photo-1661248269469-c2b5740cea7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    },
    {
      name: 'คุณดอกไม้',
      role: 'ช่างจัดดอกไม้หัวหน้า',
      image: 'https://images.unsplash.com/photo-1636682250694-4f85bb4d8a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    },
    {
      name: 'คุณใบไม้',
      role: 'ผู้จัดการร้าน',
      image: 'https://images.unsplash.com/photo-1720789098210-8f1c1b8abc02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-yellow-50">
      <div className="bg-gradient-to-r from-red-100 to-pink-100 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl mb-6 text-gray-800">เกี่ยวกับเรา</h1>
          <p className="text-xl text-gray-600">
            เราคือร้านดอกไม้ที่มุ่งมั่นส่งมอบความสุข<br />
            และความทรงจำดีๆ ผ่านดอกไม้คุณภาพพรีเมียม
          </p>
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1761039232667-d7dd78f8d5c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
              alt="ร้านดอกไม้ของเรา"
              className="w-full h-96 object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl mb-6 text-gray-800">เรื่องราวของเรา</h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                ร้านดอกไม้สดของเราเริ่มต้นจากความรักในความงามของดอกไม้
                และความตั้งใจที่จะส่งมอบความสุขให้กับทุกคน
              </p>
              <p>
                เรามีประสบการณ์กว่า 10 ปีในการจัดดอกไม้สำหรับทุกโอกาสพิเศษ
                ไม่ว่าจะเป็นงานแต่งงาน วันเกิด งานเลี้ยง หรือการแสดงความรู้สึกดีๆ
                ให้กับคนที่คุณรัก
              </p>
              <p>
                ทุกช่อดอกไม้ของเราได้รับการคัดสรรและจัดด้วยฝีมือผู้เชี่ยวชาญ
                เพื่อให้แน่ใจว่าคุณจะได้รับดอกไม้ที่สวยงามและมีคุณภาพสูงสุด
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl mb-12 text-center text-gray-800">แนวคิดของเรา</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="bg-gradient-to-br from-red-400 to-yellow-400 p-4 rounded-full">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl mb-3 text-gray-800">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h2 className="text-3xl mb-12 text-center text-gray-800">ทีมงานของเรา</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl mb-2 text-gray-800">{member.name}</h3>
                  <p className="text-red-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-red-100 to-yellow-100 py-16 px-4 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl mb-6 text-gray-800">
            ความใส่ใจและความหมายของดอกไม้
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            เราเชื่อว่าดอกไม้ไม่ใช่แค่ของขวัญ แต่เป็นการสื่อสารความรู้สึกที่ลึกซึ้ง
            ทุกช่อดอกไม้มีความหมายและเรื่องราว ที่สามารถสร้างความทรงจำอันล้ำค่า
            ให้กับทั้งผู้ให้และผู้รับ นี่คือเหตุผลที่เราใส่ใจทุกรายละเอียด
            เพื่อให้ดอกไม้ของเราสามารถสื่อความรู้สึกของคุณได้อย่างสมบูรณ์แบบ
          </p>
        </div>
      </section>
    </div>
  );
}
