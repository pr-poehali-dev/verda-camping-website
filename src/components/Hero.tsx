import Icon from "@/components/ui/icon";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-green-100"
    >
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')] bg-cover bg-center opacity-20"></div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="flex justify-center mb-6">
          <Icon name="TreePine" className="text-emerald-600" size={64} />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-emerald-800 mb-6 font-montserrat">
          База отдыха Verda
        </h1>

        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
          Эко-курорт в лесу Варникен, Калининградская область. 9 уютных домиков,
          ресторан "Шишка", СПА-комплекс с термобочками и эко-тропы для единения
          с природой.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToContact}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
          >
            Забронировать
          </button>

          <button
            onClick={() =>
              document
                .getElementById("services")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Узнать больше
          </button>
        </div>

        <div className="mt-12 flex justify-center space-x-8 text-emerald-700">
          <div className="flex items-center space-x-2">
            <Icon name="Wifi" size={20} />
            <span>Wi-Fi</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Car" size={20} />
            <span>Парковка</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Utensils" size={20} />
            <span>Ресторан</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
