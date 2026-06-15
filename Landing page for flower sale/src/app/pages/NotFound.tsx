import { Link } from 'react-router';
import { Home, Search } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-yellow-50 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <Search className="w-24 h-24 text-gray-300 mx-auto mb-4" />
          <h1 className="text-6xl mb-4 text-red-600">404</h1>
          <h2 className="text-3xl mb-4 text-gray-800">ไม่พบหน้าที่คุณต้องการ</h2>
          <p className="text-gray-600 mb-8">
            ขอโทษค่ะ เราไม่พบหน้าที่คุณกำลังมองหา<br />
            อาจถูกย้ายหรือไม่มีอยู่แล้ว
          </p>
        </div>

        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full text-lg shadow-lg transition-all transform hover:scale-105"
        >
          <Home className="w-5 h-5" />
          กลับหน้าแรก
        </Link>
      </div>
    </div>
  );
}
