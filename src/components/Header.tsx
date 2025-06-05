import { useState } from "react";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed w-full top-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="TreePine" className="text-emerald-600" size={32} />
            <h1 className="text-2xl font-bold text-emerald-800">Verda</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors"
            >
              Главная
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors"
            >
              Услуги
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors"
            >
              Галерея
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors"
            >
              О нас
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors"
            >
              Контакты
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-left text-gray-700 hover:text-emerald-600 font-medium transition-colors"
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-left text-gray-700 hover:text-emerald-600 font-medium transition-colors"
              >
                Услуги
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-left text-gray-700 hover:text-emerald-600 font-medium transition-colors"
              >
                Галерея
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-gray-700 hover:text-emerald-600 font-medium transition-colors"
              >
                О нас
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-gray-700 hover:text-emerald-600 font-medium transition-colors"
              >
                Контакты
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
