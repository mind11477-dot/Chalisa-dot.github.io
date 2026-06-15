import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

export function Cart() {
  const { cart, removeFromCart, updateQuantity, getTotalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-yellow-50 flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-6" />
          <h1 className="text-3xl mb-4 text-gray-800">ตะกร้าสินค้าว่างเปล่า</h1>
          <p className="text-gray-600 mb-8">ยังไม่มีสินค้าในตะกร้า เลือกซื้อดอกไม้สวยๆ กันเถอะ!</p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full shadow-lg transition-all transform hover:scale-105"
          >
            เลือกซื้อดอกไม้
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-yellow-50">
      <div className="bg-gradient-to-r from-red-100 to-pink-100 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl text-gray-800">ตะกร้าสินค้า</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cart.map(item => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex gap-6">
                  <Link to={`/product/${item.id}`} className="flex-shrink-0">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.name}
                      className="w-32 h-32 object-cover rounded-xl hover:opacity-90 transition-opacity"
                    />
                  </Link>

                  <div className="flex-1">
                    <Link
                      to={`/product/${item.id}`}
                      className="text-xl mb-2 text-gray-800 hover:text-red-600 transition-colors block"
                    >
                      {item.name}
                    </Link>
                    <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                    {item.customMessage && (
                      <div className="bg-yellow-50 rounded-lg p-3 mb-3">
                        <p className="text-sm text-gray-700">
                          <span className="font-semibold">ข้อความในการ์ด:</span> "{item.customMessage}"
                        </p>
                      </div>
                    )}
                    <p className="text-red-600 text-xl">฿{item.price}</p>
                  </div>

                  <div className="flex flex-col items-end justify-between">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>

                    <div className="flex items-center gap-3 bg-gray-100 rounded-full px-2 py-1">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="hover:bg-gray-200 p-2 rounded-full transition-colors"
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="w-4 h-4 text-gray-700" />
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="hover:bg-gray-200 p-2 rounded-full transition-colors"
                      >
                        <Plus className="w-4 h-4 text-gray-700" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-24">
              <h2 className="text-2xl mb-6 text-gray-800">สรุปคำสั่งซื้อ</h2>

              <div className="space-y-3 mb-6">
                {cart.map(item => (
                  <div key={item.id} className="flex justify-between text-gray-600">
                    <span className="truncate mr-2">{item.name} x{item.quantity}</span>
                    <span>฿{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between text-xl mb-2">
                  <span className="text-gray-700">ยอดรวม</span>
                  <span className="text-red-600">฿{getTotalPrice()}</span>
                </div>
                <p className="text-sm text-gray-500">รวมภาษีมูลค่าเพิ่มแล้ว</p>
              </div>

              <Link
                to="/checkout"
                className="block w-full bg-red-500 hover:bg-red-600 text-white text-center px-8 py-4 rounded-full text-lg shadow-lg transition-all transform hover:scale-105"
              >
                ดำเนินการชำระเงิน
              </Link>

              <Link
                to="/shop"
                className="block w-full text-center text-red-600 hover:text-red-700 mt-4 transition-colors"
              >
                เลือกซื้อสินค้าเพิ่ม
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
