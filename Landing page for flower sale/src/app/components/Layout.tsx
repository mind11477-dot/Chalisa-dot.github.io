import { Outlet, Link, useLocation } from 'react-router';
import { ShoppingCart, Heart, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

export function Layout() {
  const { getTotalItems } = useCart();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const navLinks = [
    { path: '/', label: 'หน้าแรก' },
    { path: '/shop', label: 'สินค้าทั้งหมด' },
    { path: '/about', label: 'เกี่ยวกับเรา' },
    { path: '/contact', label: 'ติดต่อเรา' },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Heart className="w-8 h-8 text-red-500" fill="currentColor" />
              <span className="text-2xl text-red-600">ร้านดอกไม้สด</span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-lg transition-colors hover:text-red-500 ${
                    isActive(link.path) ? 'text-red-600' : 'text-gray-700'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <Link
                to="/cart"
                className="relative p-2 hover:bg-red-50 rounded-full transition-colors"
              >
                <ShoppingCart className="w-6 h-6 text-red-600" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {getTotalItems()}
                  </span>
                )}
              </Link>

              <button
                className="md:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-gray-700" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-700" />
                )}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t pt-4">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block py-2 text-lg transition-colors hover:text-red-500 ${
                    isActive(link.path) ? 'text-red-600' : 'text-gray-700'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-gradient-to-r from-red-600 via-pink-600 to-yellow-600 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-6 h-6" fill="currentColor" />
                <h3 className="text-xl">ร้านดอกไม้สด</h3>
              </div>
              <p className="text-white/90">ส่งความรู้สึกดีๆ ด้วยดอกไม้คุณภาพพรีเมียม</p>
            </div>

            <div>
              <h3 className="text-xl mb-4">เมนู</h3>
              <ul className="space-y-2">
                {navLinks.map(link => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-white/90 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl mb-4">ติดต่อเรา</h3>
              <div className="space-y-2 text-white/90">
                <p>Line: @mindnaeiei2</p>
                <p>Tel: 02-XXX-XXXX</p>
                <p>Email: info@flowers.com</p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/30 text-center">
            <p className="text-white/90">© 2026 ร้านดอกไม้สดคุณภาพพรีเมียม - ส่งความสุขทุกวัน</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
