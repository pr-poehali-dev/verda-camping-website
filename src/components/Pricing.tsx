import Icon from "@/components/ui/icon";

const Pricing = () => {
  const paidServices = [
    { name: "Велопрокат", price: "400 руб/час", icon: "Bike" },
    { name: "Групповая йога", price: "500 руб", icon: "Heart" },
    { name: "Индивидуальная йога", price: "700 руб", icon: "User" },
    { name: "Массаж", price: "800 руб/час", icon: "Sparkles" },
    {
      name: "Грязевое обертывание",
      price: "1200 руб/2 часа",
      icon: "Droplets",
    },
    { name: "Именной саженец", price: "200 руб", icon: "TreePine" },
    { name: "Прачечная", price: "200 руб/вещь", icon: "Shirt" },
    { name: "Личный трансфер", price: "2000 руб/день", icon: "Car" },
  ];

  const freeServices = [
    "Высокоскоростной интернет",
    "Завтрак включен",
    "Круглосуточная рецепция",
    "Трансфер жд/аэропорт",
    "Детская площадка",
    "Зоны для медитаций",
    "Эко-тропы",
    "Парковка",
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-4 font-montserrat">
            Услуги и цены
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Дополнительные услуги и бесплатные возможности для гостей
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Платные услуги */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-emerald-800 mb-6 flex items-center">
              <Icon name="CreditCard" className="mr-3" size={28} />
              Дополнительные услуги
            </h3>

            <div className="space-y-4">
              {paidServices.map((service, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center">
                    <Icon
                      name={service.icon as any}
                      className="text-emerald-600 mr-3"
                      size={20}
                    />
                    <span className="font-medium">{service.name}</span>
                  </div>
                  <span className="text-emerald-600 font-semibold">
                    {service.price}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Бесплатные услуги */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-emerald-800 mb-6 flex items-center">
              <Icon name="Gift" className="mr-3" size={28} />
              Бесплатные услуги
            </h3>

            <div className="space-y-3">
              {freeServices.map((service, index) => (
                <div
                  key={index}
                  className="flex items-center p-3 bg-emerald-50 rounded-lg"
                >
                  <Icon
                    name="Check"
                    className="text-emerald-600 mr-3 flex-shrink-0"
                    size={16}
                  />
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-emerald-100 rounded-lg">
              <p className="text-emerald-800 font-semibold text-center">
                Все бесплатные услуги доступны круглосуточно
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
