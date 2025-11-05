import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const navItems = [
    { path: "/", label: t.nav.home },
    { path: "/register", label: t.nav.register },
    { path: "/submit", label: t.nav.submit },
    { path: "/track", label: t.nav.track },
    { path: "/crypto", label: t.nav.crypto },
    { path: "/fiat", label: t.nav.fiat },
    { path: "/support", label: t.nav.support },
  ];

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-engraved">
            🧪 EchoLAB™
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg transition-all button-emboss ${
                  location.pathname === item.path
                    ? "bg-primary text-primary-foreground"
                    : "bg-granite-button text-granite-text hover:bg-primary"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg bg-granite-button button-emboss"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 rounded-lg transition-all button-emboss ${
                  location.pathname === item.path
                    ? "bg-primary text-primary-foreground"
                    : "bg-granite-button text-granite-text"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
