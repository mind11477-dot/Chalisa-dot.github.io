import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router';
import { useCart } from '../context/CartContext';
import { CreditCard, Truck, Calendar, CheckCircle } from 'lucide-react';

export function Checkout() {
  const navigate = useNavigate();
  const { cart, getTotalPrice, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const [formData, setFormData] = useState({
    recipientName: '',
    phone: '',
    address: '',
    deliveryDate: '',
    paymentMethod: 'credit-card',
    notes: '',
  });

  if (cart.length === 0 && !orderComplete) {
    navigate('/cart');
    return null;
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setOrderComplete(true);
      clearCart();
    }, 2000);
  };

  if (orderComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-yellow-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl p-12 shadow-2xl max-w-md w-full text-center">
          <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-6" />
          <h1 className="text-3xl mb-4 text-gray-800">สั่งซื้อสำเร็จ!</h1>
          <p className="text-gray-600 mb-8">
            ขอบคุณที่ใช้บริการของเรา<br />
            เราจะจัดส่งดอกไม้ให้คุณตามวันที่กำหนด
          </p>
          <button
            onClick={() => navigate('/')}
            className="w-full bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full text-lg shadow-lg transition-all transform hover:scale-105"
          >
            กลับหน้าแรก
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-yellow-50">
      <div className="bg-gradient-to-r from-red-100 to-pink-100 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl text-gray-800">ชำระเงิน</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <Truck className="w-6 h-6 text-red-500" />
              <h2 className="text-2xl text-gray-800">ข้อมูลผู้รับ</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-gray-700 mb-2">ชื่อผู้รับ *</label>
                <input
                  type="text"
                  required
                  value={formData.recipientName}
                  onChange={(e) => setFormData({ ...formData, recipientName: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none"
                  placeholder="กรอกชื่อผู้รับ"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">เบอร์โทรศัพท์ *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none"
                  placeholder="0XX-XXX-XXXX"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">วันที่จัดส่ง *</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="date"
                    required
                    value={formData.deliveryDate}
                    onChange={(e) => setFormData({ ...formData, deliveryDate: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-gray-700 mb-2">ที่อยู่จัดส่ง *</label>
                <textarea
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none resize-none"
                  rows={3}
                  placeholder="บ้านเลขที่ ซอย ถนน แขวง/ตำบล เขต/อำเภอ จังหวัด รหัสไปรษณีย์"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-gray-700 mb-2">หมายเหตุเพิ่มเติม</label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none resize-none"
                  rows={2}
                  placeholder="ข้อมูลเพิ่มเติมสำหรับการจัดส่ง (ถ้ามี)"
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <CreditCard className="w-6 h-6 text-red-500" />
              <h2 className="text-2xl text-gray-800">วิธีชำระเงิน</h2>
            </div>

            <div className="space-y-3">
              <label className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-xl hover:border-red-500 cursor-pointer transition-colors">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="credit-card"
                  checked={formData.paymentMethod === 'credit-card'}
                  onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                  className="w-5 h-5 text-red-500"
                />
                <span className="text-gray-700">บัตรเครดิต/เดบิต</span>
              </label>

              <label className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-xl hover:border-red-500 cursor-pointer transition-colors">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="bank-transfer"
                  checked={formData.paymentMethod === 'bank-transfer'}
                  onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                  className="w-5 h-5 text-red-500"
                />
                <span className="text-gray-700">โอนเงินผ่านธนาคาร</span>
              </label>

              <label className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-xl hover:border-red-500 cursor-pointer transition-colors">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="prompt-pay"
                  checked={formData.paymentMethod === 'prompt-pay'}
                  onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                  className="w-5 h-5 text-red-500"
                />
                <span className="text-gray-700">พร้อมเพย์</span>
              </label>

              <label className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-xl hover:border-red-500 cursor-pointer transition-colors">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cash-on-delivery"
                  checked={formData.paymentMethod === 'cash-on-delivery'}
                  onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                  className="w-5 h-5 text-red-500"
                />
                <span className="text-gray-700">เก็บเงินปลายทาง</span>
              </label>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl mb-6 text-gray-800">สรุปคำสั่งซื้อ</h2>

            <div className="space-y-3 mb-6">
              {cart.map(item => (
                <div key={item.id} className="flex justify-between text-gray-600">
                  <span>{item.name} x{item.quantity}</span>
                  <span>฿{item.price * item.quantity}</span>
                </div>
              ))}
            </div>

            <div className="border-t pt-4 mb-6">
              <div className="flex justify-between text-2xl">
                <span className="text-gray-700">ยอดรวมทั้งหมด</span>
                <span className="text-red-600">฿{getTotalPrice()}</span>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full text-lg shadow-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'กำลังดำเนินการ...' : 'ยืนยันการสั่งซื้อ'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
