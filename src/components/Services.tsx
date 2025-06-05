import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "Home",
      title: "Домики для отдыха",
      description:
        "6 стандартных домиков на 2 чел (24м²) и 3 семейных на 4 чел (36м²) с террасами",
    },
    {
      icon: "Utensils",
      title: "Ресторан «Шишка»",
      description:
        "Зал на 24 места, летняя веранда, дровяная печь и детский уголок с эко-игрушками",
    },
    {
      icon: "Sparkles",
      title: "СПА-комплекс",
      description:
        "2 термобочки (кедровая и дубовая), массажный кабинет и открытая купель с подогревом",
    },
    {
      icon: "Baby",
      title: "Детская зона",
      description:
        "Игровой комплекс из лиственницы, песочница и качели на деревьях",
    },
    {
      icon: "Heart",
      title: "Зона для йоги",
      description:
        "Деревянный настил с шатром и подвесные платформы для практик",
    },
    {
      icon: "MapPin",
      title: "Эко-тропы",
      description:
        "«Утренняя тропа» (1 км) и «Вечерняя тропа» (1,5 км) по лесу Варникен",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-4 font-montserrat">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Всё необходимое для незабываемого отдыха в одном месте
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-emerald-50 to-green-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow hover:transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-emerald-600 rounded-full mb-6 mx-auto">
                <Icon
                  name={service.icon as any}
                  className="text-white"
                  size={28}
                />
              </div>

              <h3 className="text-xl font-semibold text-emerald-800 mb-4 text-center">
                {service.title}
              </h3>

              <p className="text-gray-600 text-center leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
