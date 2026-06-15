import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ShoppingCart, Heart, Minus, Plus, ArrowLeft } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

export function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [customMessage, setCustomMessage] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl mb-4 text-gray-800">ไม่พบสินค้า</h1>
          <Link to="/shop" className="text-red-500 hover:underline">
            กลับไปหน้าสินค้า
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity, customMessage);
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 3000);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity, customMessage);
    navigate('/cart');
  };

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-red-500 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>กลับ</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <ImageWithFallback
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl mb-4 text-gray-800">{product.name}</h1>
            <p className="text-3xl text-red-600 mb-6">฿{product.price}</p>

            <div className="bg-gradient-to-r from-red-50 to-yellow-50 rounded-2xl p-6 mb-6">
              <h3 className="text-lg mb-2 text-gray-700">ความหมาย</h3>
              <p className="text-gray-600">{product.meaning}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg mb-2 text-gray-700">รายละเอียด</h3>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            <div className="mb-6">
              <label className="block text-lg mb-2 text-gray-700">
                ข้อความในการ์ด (ไม่บังคับ)
              </label>
              <textarea
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                placeholder="เขียนข้อความพิเศษสำหรับผู้รับ..."
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none resize-none"
                rows={3}
              />
            </div>

            <div className="mb-6">
              <label className="block text-lg mb-2 text-gray-700">จำนวน</label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="bg-gray-200 hover:bg-gray-300 p-3 rounded-full transition-colors"
                  disabled={quantity <= 1}
                >
                  <Minus className="w-5 h-5 text-gray-700" />
                </button>
                <span className="text-2xl w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="bg-gray-200 hover:bg-gray-300 p-3 rounded-full transition-colors"
                >
                  <Plus className="w-5 h-5 text-gray-700" />
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="flex-1 bg-white text-red-600 border-2 border-red-600 hover:bg-red-50 px-8 py-4 rounded-full text-lg shadow-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ShoppingCart className="w-5 h-5" />
                เพิ่มลงตะกร้า
              </button>
              <button
                onClick={handleBuyNow}
                disabled={!product.inStock}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full text-lg shadow-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                สั่งซื้อทันที
              </button>
            </div>

            {!product.inStock && (
              <p className="text-center mt-4 text-red-500">สินค้าหมดชั่วคราว</p>
            )}

            {showSuccessMessage && (
              <div className="mt-4 bg-green-100 text-green-700 px-4 py-3 rounded-lg text-center">
                เพิ่มสินค้าลงตะกร้าเรียบร้อยแล้ว!
              </div>
            )}
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-3xl mb-8 text-gray-800">สินค้าที่เกี่ยวข้อง</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map(relatedProduct => (
                <Link
                  key={relatedProduct.id}
                  to={`/product/${relatedProduct.id}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md">
                      <span className="text-red-600">฿{relatedProduct.price}</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg text-gray-800">{relatedProduct.name}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
