import { useState, useMemo } from 'react';
import { Link, useParams } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ArrowRight, Filter } from 'lucide-react';
import { products, categoryNames } from '../data/products';

export function Shop() {
  const { category } = useParams();
  const [selectedCategory, setSelectedCategory] = useState<string>(category || 'all');
  const [priceRange, setPriceRange] = useState<string>('all');

  const filteredProducts = useMemo(() => {
    let filtered = products;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    if (priceRange === 'low') {
      filtered = filtered.filter(p => p.price < 800);
    } else if (priceRange === 'medium') {
      filtered = filtered.filter(p => p.price >= 800 && p.price < 1000);
    } else if (priceRange === 'high') {
      filtered = filtered.filter(p => p.price >= 1000);
    }

    return filtered;
  }, [selectedCategory, priceRange]);

  const categories = [
    { id: 'all', name: 'ทั้งหมด' },
    { id: 'bouquet', name: categoryNames.bouquet },
    { id: 'birthday', name: categoryNames.birthday },
    { id: 'congratulations', name: categoryNames.congratulations },
    { id: 'special', name: categoryNames.special },
  ];

  const priceRanges = [
    { id: 'all', name: 'ทุกราคา' },
    { id: 'low', name: 'ต่ำกว่า 800 บาท' },
    { id: 'medium', name: '800-999 บาท' },
    { id: 'high', name: '1,000 บาทขึ้นไป' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-yellow-50">
      <div className="bg-gradient-to-r from-red-100 to-pink-100 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl mb-4 text-gray-800">สินค้าทั้งหมด</h1>
          <p className="text-lg text-gray-600">เลือกดอกไม้สวยๆ เพื่อส่งความรู้สึกดีๆ ให้คนที่คุณรัก</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-24">
              <div className="flex items-center gap-2 mb-6">
                <Filter className="w-5 h-5 text-red-500" />
                <h2 className="text-xl text-gray-800">ตัวกรอง</h2>
              </div>

              <div className="mb-6">
                <h3 className="text-lg mb-3 text-gray-700">หมวดหมู่</h3>
                <div className="space-y-2">
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        selectedCategory === cat.id
                          ? 'bg-red-500 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg mb-3 text-gray-700">ช่วงราคา</h3>
                <div className="space-y-2">
                  {priceRanges.map(range => (
                    <button
                      key={range.id}
                      onClick={() => setPriceRange(range.id)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        priceRange === range.id
                          ? 'bg-red-500 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {range.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          <div className="flex-1">
            <div className="mb-6">
              <p className="text-gray-600">
                แสดง {filteredProducts.length} รายการ
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
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
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="bg-white px-4 py-2 rounded-lg text-gray-800">สินค้าหมด</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl mb-2 text-gray-800">{product.name}</h3>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-4">{product.description}</p>
                    <div className="flex items-center text-red-500 group-hover:gap-2 transition-all">
                      <span className="text-sm">ดูรายละเอียด</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-xl text-gray-500">ไม่พบสินค้าในหมวดหมู่นี้</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
