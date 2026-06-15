import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Heart, Gift, Users, Calendar, ArrowRight } from 'lucide-react';
import { products, categoryNames } from '../data/products';

export function Home() {
  const featuredProducts = products.slice(0, 6);

  const categories = [
    { id: 'bouquet', name: categoryNames.bouquet, icon: Heart, color: 'from-red-400 to-pink-400' },
    { id: 'birthday', name: categoryNames.birthday, icon: Gift, color: 'from-yellow-400 to-orange-400' },
    { id: 'congratulations', name: categoryNames.congratulations, icon: Users, color: 'from-green-400 to-emerald-400' },
    { id: 'special', name: categoryNames.special, icon: Calendar, color: 'from-purple-400 to-pink-400' },
  ];

  return (
    <div>
      <section className="relative h-[600px] bg-gradient-to-br from-red-50 via-yellow-50 to-pink-50 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1726931021274-d60f29865086?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="ร้านดอกไม้"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4 z-10">
          <h1 className="text-5xl md:text-7xl mb-6 text-red-600">ส่งความรู้สึกดีๆ ด้วยดอกไม้</h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl">
            ดอกไม้สดใหม่คุณภาพพรีเมียม จัดส่งตรงเวลา ในทุกโอกาสพิเศษของคุณ
          </p>
          <Link
            to="/shop"
            className="bg-red-500 hover:bg-red-600 text-white px-10 py-4 rounded-full text-xl shadow-lg transition-all transform hover:scale-105 flex items-center gap-2"
          >
            เลือกซื้อดอกไม้
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-gray-800">หมวดหมู่ดอกไม้</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map(category => {
              const Icon = category.icon;
              return (
                <Link
                  key={category.id}
                  to={`/shop/${category.id}`}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className={`bg-gradient-to-br ${category.color} p-4 rounded-full group-hover:rotate-12 transition-transform duration-300`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl text-gray-800">{category.name}</h3>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-br from-yellow-50 to-red-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-800">สินค้าแนะนำ</h2>
            <p className="text-lg text-gray-600">ดอกไม้คุณภาพพรีเมียมที่ลูกค้าชื่นชอบ</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md">
                    <span className="text-red-600">฿{product.price}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-2 text-gray-800">{product.name}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{product.description}</p>
                  <div className="mt-4 flex items-center text-red-500 group-hover:gap-2 transition-all">
                    <span className="text-sm">ดูรายละเอียด</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 bg-white text-red-600 px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              ดูสินค้าทั้งหมด
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-red-100 via-pink-50 to-yellow-100 rounded-3xl p-12 shadow-xl">
            <Heart className="w-16 h-16 text-red-500 mx-auto mb-6" fill="currentColor" />
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-800">โปรโมชั่นพิเศษ</h2>
            <p className="text-5xl md:text-6xl text-red-600 mb-4">ซื้อ 1 แถม 1</p>
            <p className="text-xl text-gray-700 mb-8">สำหรับทุกช่อดอกไม้ในเดือนนี้!</p>
            <button
              onClick={() => window.open('https://line.me/ti/p/@mindnaeiei2', '_blank')}
              className="bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-full text-xl shadow-lg transition-all transform hover:scale-105 inline-flex items-center gap-3"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
              </svg>
              แอดไลน์เพื่อสั่งซื้อ
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
