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
              База отдыха премиум-класса в окружении природы. Идеальное место
              для отдыха и восстановления сил.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-emerald-200">
              <li>Проживание</li>
              <li>Ресторан</li>
              <li>SPA-центр</li>
              <li>Спортивные активности</li>
              <li>Конференц-зал</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <div className="space-y-2 text-emerald-200">
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={16} />
                <span>+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Mail" size={16} />
                <span>info@verda-resort.ru</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} />
                <span>Московская область</span>
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
