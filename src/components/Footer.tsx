import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-emerald-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="TreePine" className="text-emerald-300" size={32} />
              <h3 className="text-2xl font-bold">Verda</h3>
            </div>
            <p className="text-emerald-200 leading-relaxed">
              Эко-курорт в лесу Варникен, Калининградская область. 9 домиков,
              ресторан "Шишка", СПА с термобочками.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-emerald-200">
              <li>Домики для отдыха</li>
              <li>Ресторан "Шишка"</li>
              <li>СПА-комплекс</li>
              <li>Эко-тропы</li>
              <li>Зона йоги</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <div className="space-y-2 text-emerald-200">
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={16} />
                <span>+7 (4012) 567-890</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Mail" size={16} />
                <span>info@verda-varnikem.ru</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} />
                <span>Лес Варникен</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Социальные сети</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-emerald-700 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-colors"
              >
                <Icon name="Facebook" size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-emerald-700 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-colors"
              >
                <Icon name="Instagram" size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-emerald-700 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-colors"
              >
                <Icon name="Twitter" size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-emerald-700 mt-8 pt-8 text-center text-emerald-200">
          <p>&copy; 2024 База отдыха Verda. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
